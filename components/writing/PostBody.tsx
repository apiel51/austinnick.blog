import { FunctionComponent } from "react";

type Props = {
  header?: string;
};

const PostBody: FunctionComponent<Props> = function ({ children, header }) {
  return (
    <div className="my-4">
      {header && <div className="text-xl mb-2">{header}</div>}
      {children}
    </div>
  );
};

export default PostBody;
