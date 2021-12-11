import { Client } from '@notionhq/client';
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

export async function getParagraphBlocksFromPage(pageId?: string) {
  if (!pageId) {
    return [];
  }

  const paragraphBlocks = await NotionClient.blocks.children
    .list({ block_id: pageId as string })
    .then((response) => {
      const blockResults = response.results.map<ParagraphBlock | undefined>(
        (result) => {
          if (isParagraph(result)) {
            return result;
          }

          return undefined;
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
