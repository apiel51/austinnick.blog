import { GetStaticProps } from 'next';

import { BookInfo, Bookshelf } from 'components/bookshelf';
import { Page } from 'shared/Page';
import { getBooksInfo } from 'utils/bookshelf';

type BookshelfPageProps = {
  booksInfo: BookInfo[];
};

export const getStaticProps: GetStaticProps<BookshelfPageProps> = async () => {
  const booksInfo = await getBooksInfo();

  return {
    props: {
      booksInfo,
    },
    revalidate: 60,
  };
};

export default function BookshelfPage({ booksInfo }: BookshelfPageProps) {
  return (
    <Page>
      <Bookshelf booksInfo={booksInfo} />
    </Page>
  );
}
