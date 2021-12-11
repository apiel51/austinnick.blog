import Link from 'next/link';

type Props = {
  caption: string;
  date: string;
  id: number;
  title: string;
  published?: boolean;
};

export default function BookRow({
  caption,
  date,
  id,
  title,
  published = true,
}: Props) {
  if (!published) {
    return null;
  }
  return (
    <div className="flex py-4 text-sm max-w-md">
      <div className="flex items-center pr-4 text-gray-700">{date}</div>
      <div className="flex-1">
        <Link href={`/writing/${id}`}>
          <div className={`text-2xl leading-tight cursor-pointer`}>{title}</div>
        </Link>
        {caption}
      </div>
    </div>
  );
}
