import { useRouter } from "next/router";

import Page from "components/shared/Page";
import posts from "components/writing/posts";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const CurrentPost = posts[Number(pid) - 1];

  return (
    <Page>
      <CurrentPost />
    </Page>
  );
}
