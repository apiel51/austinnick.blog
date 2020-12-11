import { useRouter } from "next/router";
import Page from "../../components/Page";
import ComingSoon from "../../components/ComingSoon";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Page>
      <ComingSoon />
    </Page>
  );
}
