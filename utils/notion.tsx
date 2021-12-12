import { Client } from '@notionhq/client';
import { parse } from 'date-fns';
import compact from 'lodash/compact';

import { PostInfo } from 'components/writing';

export const NotionClient = new Client({ auth: process.env.NOTION_TOKEN });
export const getDateFromNotionDate = (notionDate: string) =>
  parse(notionDate, 'yyyy-MM-dd', new Date());

type TextBlockBase = { id: string; type: string };
export type TextItem = {
  type: 'text';
  href: string | null;
  plain_text: string;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
};
export type TextBlock = ParagraphBlock | Heading3Block | NumberedListItemBlock;

export type ParagraphBlock = TextBlockBase & {
  type: 'paragraph';
  paragraph: {
    text: TextItem[];
  };
};
export function isParagraphBlock(
  blockResult: TextBlockBase,
): blockResult is ParagraphBlock {
  return blockResult.type === 'paragraph';
}
export type Heading3Block = TextBlockBase & {
  type: 'heading_3';
  heading_3: {
    text: TextItem[];
  };
};
export function isHeading3Block(
  blockResult: TextBlockBase,
): blockResult is Heading3Block {
  return blockResult.type === 'heading_3';
}
export type NumberedListItemBlock = TextBlockBase & {
  type: 'numbered_list_item';
  numbered_list_item: {
    text: TextItem[];
  };
};
export function isNumberedListItemBlock(
  blockResult: TextBlockBase,
): blockResult is NumberedListItemBlock {
  return blockResult.type === 'numbered_list_item';
}

export type BlogPostProperties = {
  Name: {
    type: 'title';
    title: [{ plain_text: string }];
  };
  datePublished: {
    type: 'date';
    date: {
      start: string;
    };
  };
  subtitle: {
    type: 'rich_text';
    rich_text: [
      {
        type: 'text';
        plain_text: string;
      },
    ];
  };
  postId: {
    type: 'number';
    number: number;
  };
};
export function isBlogPostProperties(
  properties?: any,
): properties is BlogPostProperties {
  return (
    properties?.Name?.title?.[0]?.plain_text &&
    properties?.datePublished?.date?.start &&
    properties?.subtitle?.rich_text?.[0]?.plain_text &&
    properties?.postId?.number
  );
}

export async function getBlogPostPageIdByPostId(postId?: number) {
  const databaseId = process.env.NOTION_WRITING_DATABASE_ID;
  if (!postId || !databaseId) {
    return null;
  }

  const response = await NotionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'postId',
      number: {
        equals: postId,
      },
    },
  });

  if (!response?.results?.length) {
    return null;
  }

  return response.results[0].id;
}

export async function getPropertiesForDatabaseEntries(databaseId?: string) {
  if (!databaseId) {
    return [];
  }

  const itemIds = await NotionClient.databases
    .query({ database_id: databaseId })
    .then((response) => response.results.map((result) => result.id));

  const postsInfo = await Promise.all(
    itemIds.map<Promise<PostInfo | null>>(async (id) => {
      const { properties } = (await getPageDetails(id)) || {};
      if (isBlogPostProperties(properties)) {
        return {
          date: properties.datePublished.date.start,
          postId: properties.postId.number,
          subtitle: properties.subtitle.rich_text[0].plain_text,
          title: properties.Name.title[0].plain_text,
        };
      }
      return null;
    }),
  );

  return compact(postsInfo);
}

export async function getPageDetails(pageId?: string) {
  if (!pageId) {
    return undefined;
  }

  return NotionClient.pages.retrieve({ page_id: pageId });
}

export async function getTextBlocksFromPage(pageId?: string) {
  if (!pageId) {
    return [];
  }

  const textBlocks = await NotionClient.blocks.children
    .list({ block_id: pageId as string })
    .then((response) => {
      const blockResults = response.results.map<TextBlock | null>((result) => {
        if (
          isParagraphBlock(result) ||
          isHeading3Block(result) ||
          isNumberedListItemBlock(result)
        ) {
          return result;
        }

        return null;
      });

      return compact<TextBlock>(blockResults);
    });

  return textBlocks;
}
