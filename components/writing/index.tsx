import PostRow from "./PostRow";
import ComingSoon from "../shared/ComingSoon";

export default function Bookshelf() {
  return (
    <div className="pb-8">
      <div>
        <ComingSoon />
        <PostRow
          title="Large Company vs Startup & Door #3"
          date="11/30/20"
          caption="How I navigated a difficult career choice and what I learned along the way."
          id={1}
          published={false}
        />
      </div>
    </div>
  );
}
