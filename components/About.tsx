import { getElementsFromParagraphBlock, ParagraphBlock } from 'notion';

type AboutProps = {
  paragraphs: ParagraphBlock[];
};

export default function About({ paragraphs }: AboutProps) {
  return (
    <div>
      {paragraphs.map((paragraphBlock, idx) => {
        const textElements = getElementsFromParagraphBlock(paragraphBlock);

        if (!textElements.length) {
          return null;
        }

        return (
          <div key={paragraphBlock.id} className={`${idx > 0 ? 'pt-4' : ''}`}>
            {textElements}
          </div>
        );
      })}
    </div>
  );
}
