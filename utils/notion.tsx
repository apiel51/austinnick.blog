import { Client } from '@notionhq/client';
import compact from 'lodash/compact';

export const NotionClient = new Client({ auth: process.env.NOTION_TOKEN });

type BlockBase = { id: string; type: string };
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

export type ParagraphBlock = BlockBase & {
  type: 'paragraph';
  paragraph: {
    text: TextItem[];
  };
};

/**
 * Type guards
 */

export function isParagraphBlock(
  blockResult: BlockBase,
): blockResult is ParagraphBlock {
  return blockResult.type === 'paragraph';
}
export type Heading3Block = BlockBase & {
  type: 'heading_3';
  heading_3: {
    text: TextItem[];
  };
};
export function isHeading3Block(
  blockResult: BlockBase,
): blockResult is Heading3Block {
  return blockResult.type === 'heading_3';
}
export type NumberedListItemBlock = BlockBase & {
  type: 'numbered_list_item';
  numbered_list_item: {
    text: TextItem[];
  };
};
export function isNumberedListItemBlock(
  blockResult: BlockBase,
): blockResult is NumberedListItemBlock {
  return blockResult.type === 'numbered_list_item';
}
export type BulletedListItem = BlockBase & {
  type: 'bulleted_list_item';
  bulleted_list_item: {
    text: TextItem[];
  };
};
export function isBulletedListItemBlock(
  blockResult: BlockBase,
): blockResult is BulletedListItem {
  return blockResult.type === 'bulleted_list_item';
}
export function isTextBlock(blockResult: BlockBase): blockResult is TextBlock {
  return (
    isParagraphBlock(blockResult) ||
    isHeading3Block(blockResult) ||
    isNumberedListItemBlock(blockResult) ||
    isBulletedListItemBlock(blockResult)
  );
}

/**
 * Helpers
 */

export async function getPageDetails(pageId?: string) {
  if (!pageId) {
    return undefined;
  }

  return NotionClient.pages.retrieve({ page_id: pageId });
}

async function getAllBlockChildren(pageId?: string) {
  const children = [];
  let hasMore = true;
  let cursor: string | undefined;

  while (hasMore) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const response = await NotionClient.blocks.children.list({
        block_id: pageId as string,
        start_cursor: cursor,
      });

      children.push(...response.results);
      cursor = response.next_cursor ?? undefined;
      hasMore = response.has_more;
    } catch (error) {
      hasMore = false;
    }
  }

  return children;
}

export async function getTextBlocksFromPage(pageId?: string) {
  if (!pageId) {
    return [];
  }

  const allChildren = await getAllBlockChildren(pageId);
  const textBlocks = allChildren.map((child) => {
    if (isTextBlock(child)) {
      return child;
    }

    return null;
  });

  return compact(textBlocks);
}
