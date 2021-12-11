import PostRow, { PostInfo } from './PostRow';

export type { PostInfo };

type WritingProps = {
  postsInfo: PostInfo[];
};

export function Writing({ postsInfo }: WritingProps) {
  return (
    <>
      {postsInfo.map((postInfo) => (
        <div className="pb-8">
          <div>
            <PostRow {...postInfo} />
          </div>
        </div>
      ))}
    </>
  );
}
