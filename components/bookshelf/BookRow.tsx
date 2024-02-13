import Link from 'next/link';

export type BookInfo = {
  title: string;
  url: string;
  favorite: boolean;
  slug: string | null;
};

export default function BookRow({ favorite, slug, title, url }: BookInfo) {
  return (
    <div className="flex my-8 text-sm">
      <div className="flex-1">
        <a
          className={`text-lg leading-tight ${
            favorite && 'font-semibold'
          } cursor-pointer`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        {slug && (
          <div className="mt-1">
            [
            <Link passHref href={`/bookshelf/${slug}`}>
              <span className="hover:underline">notes</span>
            </Link>
            ]
          </div>
        )}
      </div>
    </div>
  );
}
