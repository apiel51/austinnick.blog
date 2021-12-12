import { Client } from '@notionhq/client';
import { parse } from 'date-fns';
import compact from 'lodash/compact';

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
export type TextBlock =
  | ParagraphBlock
  | Heading3Block
  | NumberedListItemBlock
  | BulletedListItem;

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
export type BulletedListItem = TextBlockBase & {
  type: 'bulleted_list_item';
  bulleted_list_item: {
    text: TextItem[];
  };
};
export function isBulletedListItemBlock(
  blockResult: TextBlockBase,
): blockResult is BulletedListItem {
  return blockResult.type === 'bulleted_list_item';
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
          isNumberedListItemBlock(result) ||
          isBulletedListItemBlock(result)
        ) {
          return result;
        }

        return null;
      });

      return compact<TextBlock>(blockResults);
    });

  return textBlocks;
}
