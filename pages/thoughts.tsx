import { GetStaticProps } from 'next';

import { Page } from 'shared/Page';
import Thoughts from 'components/Thoughts';
import {
  getDateFromNotionDate,
  getPageDetails,
  getTextBlocksFromPage,
  TextBlock,
} from 'utils/notion';
import { format } from 'date-fns';

type ThoughtsPageProps = {
  textBlocks: TextBlock[];
  lastUpdatedDate: string;
};

export const getStaticProps: GetStaticProps<ThoughtsPageProps> = async () => {
  const textBlocks = await getTextBlocksFromPage(
    process.env.NOTION_THOUGHTS_PAGE_ID,
  );
  const pageDetails = await getPageDetails(process.env.NOTION_THOUGHTS_PAGE_ID);
  const lastUpdatedNotionDate = pageDetails?.last_edited_time.slice(0, 10);
  const lastUpdatedDate = lastUpdatedNotionDate
    ? format(getDateFromNotionDate(lastUpdatedNotionDate), 'MMMM do, yyyy')
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
      <Thoughts
        lastUpdatedDate={lastUpdatedDate}
        textBlocks={[...textBlocks].reverse()}
      />
    </Page>
  );
}
