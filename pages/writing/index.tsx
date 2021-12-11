import { GetStaticProps } from 'next';
import compact from 'lodash/compact';

import {
  getItemsIdsForDatabase,
  getPageDetails,
  isBlogPostProperties,
} from 'notion';
import Page from 'components/shared/Page';
import { Writing, PostInfo } from 'components/writing';

type WritingPageProps = {
  postsInfo: PostInfo[];
};

export const getStaticProps: GetStaticProps<WritingPageProps> = async () => {
  const itemIds = await getItemsIdsForDatabase(
    process.env.NOTION_WRITING_DATABASE_ID,
  );

  const postsInfo = await Promise.all(
    itemIds.map<Promise<PostInfo | null>>(async (id) => {
      const { properties } = (await getPageDetails(id)) || {};
      if (isBlogPostProperties(properties)) {
        return {
          date: properties.datePublished.date.start,
          postId: properties.postId.number,
          subtitle: properties.subtitle.rich_text[0].plain_text,
          title: properties.Name.title[0].plain_text,
        };
      }
      return null;
    }),
  );

  return {
    props: {
      postsInfo: compact(postsInfo),
    },
  };
};

export default function WritingPage({ postsInfo }: WritingPageProps) {
  return (
    <Page>
      <Writing postsInfo={postsInfo} />
    </Page>
  );
}
