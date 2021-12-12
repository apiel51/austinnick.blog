import PostRow, { PostInfo } from './PostRow';

export type { PostInfo };

type WritingProps = {
  postsInfo: PostInfo[];
};

export function Writing({ postsInfo }: WritingProps) {
  return (
    <>
      {postsInfo.map((postInfo) => (
        <div key={JSON.stringify(postInfo)} className="pb-2">
          <div>
            <PostRow {...postInfo} />
          </div>
        </div>
      ))}
    </>
  );
}
