import { GetStaticProps } from 'next';

import { getPropertiesForBlogPostEntries } from 'utils/blog';
import { Page } from 'shared/Page';
import { Writing, PostInfo } from 'components/writing';

type WritingPageProps = {
  postsInfo: PostInfo[];
};

export const getStaticProps: GetStaticProps<WritingPageProps> = async () => {
  const postsInfo = await getPropertiesForBlogPostEntries(
    process.env.NOTION_WRITING_DATABASE_ID,
  );

  return {
    props: {
      postsInfo,
    },
    revalidate: 60,
  };
};

export default function WritingPage({ postsInfo }: WritingPageProps) {
  return (
    <Page>
      <Writing postsInfo={postsInfo} />
    </Page>
  );
}
