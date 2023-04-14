export type BookInfo = {
  title: string;
  url: string;
  favorite?: boolean;
};

export default function BookRow({ favorite, title, url }: BookInfo) {
  return (
    <div className="flex my-8 text-sm">
      <div className="flex-1">
        <a
          className={`text-lg leading-tight ${favorite && 'font-semibold'}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
}
