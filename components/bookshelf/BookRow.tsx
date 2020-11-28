type Props = {
  date: string;
  title: string;
  favorite?: boolean;
};

export default function BookRow({ date, favorite, title }: Props) {
  return (
    <div className="flex py-4 text-sm">
      <div className="flex items-center pr-4 text-gray-700">{date}</div>
      <div className="flex-1">
        <div className={`text-lg leading-tight ${favorite && "font-semibold"}`}>
          {title}
        </div>
      </div>
    </div>
  );
}
