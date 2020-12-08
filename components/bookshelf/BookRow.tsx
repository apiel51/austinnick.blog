type Props = {
  date: string;
  title: string;
  url: string;
  favorite?: boolean;
};

export default function BookRow({ date, favorite, title, url }: Props) {
  return (
    <div className="flex py-4 text-sm">
      <div className="flex items-center pr-4 text-gray-700">{date}</div>
      <div className="flex-1">
        <a
          className={`text-lg leading-tight ${favorite && "font-semibold"}`}
          href={url}
          target="_blank"
        >
          {title}
        </a>
      </div>
    </div>
  );
}
