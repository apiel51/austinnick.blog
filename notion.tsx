import { Client } from '@notionhq/client';
import { format, parse } from 'date-fns';
import compact from 'lodash/compact';

export const NotionClient = new Client({ auth: process.env.NOTION_TOKEN });

export type ParagraphBlock = {
  id: string;
  type: 'paragraph';
  paragraph: {
    text: { type: 'text'; href: string | null; plain_text: string }[];
  };
};
function isParagraph(blockResult: {
  type: string;
}): blockResult is ParagraphBlock {
  return blockResult.type === 'paragraph';
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

export async function getItemsIdsForDatabase(databaseId?: string) {
  if (!databaseId) {
    return [];
  }

  return NotionClient.databases
    .query({ database_id: databaseId })
    .then((response) => response.results.map((result) => result.id));
}

export async function getPageDetails(pageId?: string) {
  if (!pageId) {
    return undefined;
  }

  return NotionClient.pages.retrieve({ page_id: pageId });
}

export async function getParagraphBlocksFromPage(pageId?: string) {
  if (!pageId) {
    return [];
  }

  const paragraphBlocks = await NotionClient.blocks.children
    .list({ block_id: pageId as string })
    .then((response) => {
      const blockResults = response.results.map<ParagraphBlock | null>(
        (result) => {
          if (isParagraph(result)) {
            return result;
          }

          return null;
        },
      );

      return compact<ParagraphBlock>(blockResults);
    });

  return paragraphBlocks;
}

export function getElementsFromParagraphBlock(paragraphBlock: ParagraphBlock) {
  return paragraphBlock.paragraph.text.map((textBlock) => {
    const { href, plain_text: text } = textBlock;

    if (href) {
      return (
        <a
          key={`${paragraphBlock.id}-${href}-${text}`}
          aria-label={`${href} link`}
          className="underline"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
    }

    return text;
  });
}

export function formatNotionDate(date: string) {
  return format(parse(date, 'yyyy-MM-dd', new Date()), 'MM/dd/yy');
}
