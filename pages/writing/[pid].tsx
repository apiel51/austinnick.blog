import { useRouter } from "next/router";

import Page from "components/shared/Page";
import { Post1 } from "components/writing/posts";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  switch (Number(pid)) {
    case 1:
      return (
        <Page>
          <Post1 />
        </Page>
      );
    default:
      return null;
  }
}
