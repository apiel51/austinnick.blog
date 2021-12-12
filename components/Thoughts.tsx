import TextBlob from 'shared/TextBlob';
import { TextBlock } from 'utils/notion';

type ThoughtsProps = {
  textBlocks: TextBlock[];
  lastUpdatedDate: string;
};

export default function Thoughts({
  textBlocks,
  lastUpdatedDate,
}: ThoughtsProps) {
  return (
    <div className="pb-8">
      <div className="text-sm pb-4 text-gray-700">
        Last updated on {lastUpdatedDate}
      </div>
      This is a list of some things that have crossed my mind. Some are
      half-baked, but still thought they would be interesting to share. Items
      are placed in reverse chronological order.
      <ul className="list-disc list-inside pt-4 grid gap-y-2">
        <TextBlob textBlocks={textBlocks} />
      </ul>
    </div>
  );
}
