import { BookInfo } from 'components/bookshelf';
import { compact } from 'lodash';
import { isDefined } from './general';
import { NotionClient, TextItem } from './notion';

type BookBlock = {
  properties: {
    rating: {
      type: 'number';
      number?: number;
    };
    link: {
      type: 'url';
      url: string;
    };
    hidden: {
      type: 'checkbox';
      checkbox: boolean;
    };
    Name: {
      type: 'title';
      title: [TextItem];
    };
  };
};
function isBookBlock(block: any): block is BookBlock {
  return (
    isDefined(block?.properties?.rating) &&
    block?.properties?.link?.url &&
    isDefined(block?.properties?.hidden) &&
    block?.properties?.Name?.title?.[0]
  );
}

export async function getBooksInfo(): Promise<BookInfo[]> {
  const databaseId = process.env.NOTION_BOOKS_DATABASE_ID;
  if (!databaseId) {
    return [];
  }

  const books = await NotionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'status',
      select: {
        equals: 'Finished',
      },
    },
    sorts: [{ property: 'dateFinished', direction: 'descending' }],
  });

  const booksInfo = books.results.map<BookInfo | null>((book) => {
    if (!isBookBlock(book) || book.properties.hidden.checkbox) {
      return null;
    }

    return {
      title: book.properties.Name.title[0].plain_text,
      url: book.properties.link.url,
      favorite: book.properties.rating.number === 5,
    };
  });

  return compact(booksInfo);
}