import BookRow, { BookInfo } from './BookRow';

export type { BookInfo };

type Props = {
  booksInfo: BookInfo[];
};

export function Bookshelf({ booksInfo }: Props) {
  return (
    <div className="pb-8">
      This is a running list of books that I have read since the inception of
      this website. Titles I particularly enjoyed are bolded.
      <div className="mt-2">
        {booksInfo.map((bookInfo) => (
          <BookRow {...bookInfo} />
        ))}
      </div>
    </div>
  );
}
