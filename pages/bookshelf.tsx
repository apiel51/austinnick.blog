import { GetStaticProps } from 'next';

import { Page } from 'shared/Page';
import { BookInfo, Bookshelf } from 'components/bookshelf';
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
  };
};

export default function BookshelfPage({ booksInfo }: BookshelfPageProps) {
  return (
    <Page>
      <Bookshelf booksInfo={booksInfo} />
    </Page>
  );
}
