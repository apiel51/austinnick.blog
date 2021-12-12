import React from 'react';
import {
  isBulletedListItemBlock,
  isHeading3Block,
  isNumberedListItemBlock,
  isParagraphBlock,
  TextBlock,
  TextItem,
} from 'utils/notion';

type TextBlobProps = {
  textBlocks: TextBlock[];
};

export default function TextBlob({ textBlocks }: TextBlobProps) {
  let listItemNumber = 0;

  return (
    <>
      {textBlocks.map((textBlock, idx) => {
        if (textBlock.type === 'numbered_list_item') {
          listItemNumber += 1;
        } else {
          listItemNumber = 0;
        }

        return (
          <TextBlockElements
            key={JSON.stringify(textBlock)}
            textBlocks={textBlocks}
            idx={idx}
            listItemNumber={listItemNumber}
          />
        );
      })}
    </>
  );
}

type TextBlockElementsProps = {
  textBlocks: TextBlock[];
  idx: number;
  listItemNumber: number;
};
function TextBlockElements({
  textBlocks,
  idx,
  listItemNumber,
}: TextBlockElementsProps) {
  const textBlock = textBlocks[idx];
  const { id } = textBlock;

  if (isParagraphBlock(textBlock)) {
    return (
      <div
        className={
          idx < textBlocks.length - 1 &&
          textBlocks[idx + 1].type === 'numbered_list_item'
            ? 'mb-2'
            : 'mb-4'
        }
      >
        <TextItemElement
          textBlockId={id}
          textItems={textBlock.paragraph.text}
        />
      </div>
    );
  }

  if (isHeading3Block(textBlock)) {
    return (
      <div className="text-xl mb-1">
        <TextItemElement
          textBlockId={id}
          textItems={textBlock.heading_3.text}
        />
      </div>
    );
  }

  if (isNumberedListItemBlock(textBlock)) {
    return (
      <div className="mb-2 ml-4">
        {`${listItemNumber}. `}
        <TextItemElement
          textBlockId={id}
          textItems={textBlock.numbered_list_item.text}
        />
      </div>
    );
  }

  if (isBulletedListItemBlock(textBlock)) {
    return (
      <li className="mb-2">
        <TextItemElement
          textBlockId={id}
          textItems={textBlock.bulleted_list_item.text}
        />
      </li>
    );
  }

  return null;
}

type TextItemElementProps = {
  textItems: TextItem[];
  textBlockId: string;
};
function TextItemElement({ textBlockId, textItems }: TextItemElementProps) {
  return (
    <>
      {textItems.map((textItem) => {
        const { href, plain_text: text, annotations } = textItem;
        let className = '';
        if (annotations.bold) {
          className += ' font-semibold';
        }
        if (annotations.italic) {
          className += ' italic';
        }
        if (annotations.underline) {
          className += ' underline';
        }
        if (annotations.strikethrough) {
          className += ' line-through';
        }
        className.trim();

        if (href) {
          return (
            <a
              key={`${textBlockId}-${href}-${text}`}
              aria-label={`${href} link`}
              className={`${className} underline`}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          );
        }

        return (
          <span key={`${textBlockId}-${text}`} className={className}>
            {text}
          </span>
        );
      })}
    </>
  );
}
