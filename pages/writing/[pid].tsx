import { useRouter } from "next/router";
import Page from "../../components/shared/Page";
import ComingSoon from "../../components/shared/ComingSoon";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Page>
      <ComingSoon />
    </Page>
  );
}
