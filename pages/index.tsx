import { GetStaticProps } from 'next';

import Page from 'shared/Page';
import About from 'components/About';
import { getParagraphBlocksFromPage, ParagraphBlock } from 'notion';

type HomeProps = {
  aboutParagraphs: ParagraphBlock[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const aboutParagraphs = await getParagraphBlocksFromPage(
    process.env.NOTION_ABOUT_PAGE_ID,
  );
  return {
    props: {
      aboutParagraphs,
    },
  };
};

export default function Home({ aboutParagraphs }: HomeProps) {
  return (
    <Page>
      <About paragraphs={aboutParagraphs} />
    </Page>
  );
}
