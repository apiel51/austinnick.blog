import { GetStaticProps } from 'next';

import { Page } from 'shared/Page';
import TextBlob from 'shared/TextBlob';
import { getTextBlocksFromPage, TextBlock } from 'utils/notion';

type HomeProps = {
  textBlocks: TextBlock[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const textBlocks = await getTextBlocksFromPage(
    process.env.NOTION_ABOUT_PAGE_ID,
  );
  return {
    props: {
      textBlocks,
    },
    revalidate: 60,
  };
};

export default function Home({ textBlocks }: HomeProps) {
  return (
    <Page>
      <TextBlob textBlocks={textBlocks} />
    </Page>
  );
}
