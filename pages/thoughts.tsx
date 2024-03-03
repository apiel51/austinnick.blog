import { GetStaticProps } from 'next';

import Thoughts from 'components/Thoughts';
import { format } from 'date-fns';
import { Page } from 'shared/Page';
import { getPageDetails, getTextBlocksFromPage, TextBlock } from 'utils/notion';

type ThoughtsPageProps = {
  textBlocks: TextBlock[];
  lastUpdatedDate: string;
};

export const getStaticProps: GetStaticProps<ThoughtsPageProps> = async () => {
  const textBlocks = await getTextBlocksFromPage(
    process.env.NOTION_THOUGHTS_PAGE_ID,
  );
  const pageDetails = await getPageDetails(process.env.NOTION_THOUGHTS_PAGE_ID);
  const lastUpdatedDate = pageDetails?.last_edited_time
    ? format(new Date(pageDetails.last_edited_time), 'MMMM do, yyyy')
    : '';
  return {
    props: {
      textBlocks,
      lastUpdatedDate,
    },
    revalidate: 60,
  };
};

export default function ThoughtsPage({
  textBlocks,
  lastUpdatedDate,
}: ThoughtsPageProps) {
  return (
    <Page>
      <Thoughts lastUpdatedDate={lastUpdatedDate} textBlocks={textBlocks} />
    </Page>
  );
}
