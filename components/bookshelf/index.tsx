import BookRow from "./BookRow";

export default function Bookshelf() {
  return (
    <div className="pb-8">
      <div className="text-sm pb-4 text-gray-700">
        Last updated on November 28, 2020
      </div>
      This is a running list of books that I've read since the inception of this
      website.
      <div>
        <BookRow
          title="Zero to One: Notes on Startups, or How to Build the Future"
          date="11/29/20"
        />
      </div>
    </div>
  );
}
