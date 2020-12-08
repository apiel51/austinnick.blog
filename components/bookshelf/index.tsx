import BookRow from "./BookRow";

export default function Bookshelf() {
  return (
    <div className="pb-8">
      This is a running list of books that I've read since the inception of this
      website.
      <div>
        <BookRow
          title="Zero to One: Notes on Startups, or How to Build the Future"
          date="11/30/20"
          url="https://www.goodreads.com/book/show/37653154-zero-to-one"
        />
      </div>
    </div>
  );
}
