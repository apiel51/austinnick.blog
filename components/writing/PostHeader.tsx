type Props = {
  date: string;
  title: string;
};

export default function Post1({ date, title }: Props) {
  return (
    <div className="text-center mb-4">
      <div className="text-2xl">{title}</div>
      <div className="pt-2 text-sm text-gray-700">{date}</div>
    </div>
  );
}
