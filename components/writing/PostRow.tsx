import Link from 'next/link';
import { formatNotionDate } from 'notion';

export type PostInfo = {
  title: string;
  date: string;
  subtitle: string;
  postId: number;
};

export default function PostRow({ subtitle, date, postId, title }: PostInfo) {
  const formattedDate = formatNotionDate(date);

  return (
    <div className="flex py-4 text-sm max-w-md">
      <div className="flex items-center pr-4 text-gray-700">
        {formattedDate}
      </div>
      <div className="flex-1">
        <Link passHref href={`/writing/${postId}`}>
          <div className="text-2xl leading-tight cursor-pointer">{title}</div>
        </Link>
        {subtitle}
      </div>
    </div>
  );
}
