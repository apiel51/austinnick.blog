import { GetStaticPaths, GetStaticProps } from 'next';

import PostHeader from 'components/writing/PostHeader';
import { format } from 'date-fns';
import Head from 'next/head';
import { Page } from 'shared/Page';
import TextBlob from 'shared/TextBlob';
import {
  getBlogPostPageIdByPostId,
  getPropertiesForBlogPostEntries,
  isBlogPostProperties,
} from 'utils/blog';
import { TextBlock, getPageDetails, getTextBlocksFromPage } from 'utils/notion';

type PostParams = { postId: string };

type PostProps = {
  textBlocks: TextBlock[];
  title: string;
  subtitle: string;
  date: string;
};

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const postsInfo = await getPropertiesForBlogPostEntries(
    process.env.NOTION_WRITING_DATABASE_ID,
  );

  return {
    paths: postsInfo.map(({ postId }) => ({
      params: { postId: String(postId) },
    })),
    // TODO: We should have fallback: true here and have a loading state
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({
  params,
}) => {
  const pageId = await getBlogPostPageIdByPostId(Number(params?.postId));
  const pageDetails = await getPageDetails(pageId ?? undefined);
  const textBlocks = await getTextBlocksFromPage(pageId ?? undefined);

  const { properties } = pageDetails ?? {};
  if (!isBlogPostProperties(properties)) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: {
      textBlocks,
      title: properties.Name.title[0].plain_text,
      subtitle: properties.subtitle.rich_text[0].plain_text,
      date: properties.datePublished.date.start,
    },
    revalidate: 60,
  };
};

export default function Post({ date, title, textBlocks, subtitle }: PostProps) {
  const formattedDate = format(new Date(date), 'MMMM do, yyyy');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={subtitle} key="description" />
        <meta name="og:description" content={subtitle} key="og:description" />
      </Head>
      <Page>
        <PostHeader date={formattedDate} title={title} />
        <TextBlob textBlocks={textBlocks} />
      </Page>
    </>
  );
}
