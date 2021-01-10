import ComingSoon from "shared/ComingSoon";
import PostRow from "./PostRow";

export default function Bookshelf() {
  return (
    <div className="pb-8">
      <div>
        <PostRow
          title="Large Company vs Startup & Door #3"
          date="01/10/21"
          caption="How I navigated a difficult career choice and what I learned along the way."
          id={1}
        />
      </div>
    </div>
  );
}
