import { BookInfo } from 'components/bookshelf';
import { compact } from 'lodash';
import { isDefined } from './general';
import { NotionClient, TextItem } from './notion';

/**
 * Represents the structure of my 'Books' database in Notion.
 */
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
    slug: {
      type: 'rich_text';
      rich_text: [TextItem];
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

/**
 * Represents the structure of my 'Book Notes' database in Notion.
 */
export type BookNotesProperties = {
  Name: {
    type: 'title';
    title: [{ plain_text: string }];
  };
  datePublished: {
    type: 'date';
    date: {
      start: string;
    };
  };
  slug: {
    type: 'rich_text';
    rich_text: [TextItem];
  };
};
export function isBookNotesProperties(
  properties?: any,
): properties is BookNotesProperties {
  return (
    properties?.Name?.title?.[0]?.plain_text &&
    properties?.datePublished?.date?.start &&
    properties?.slug?.rich_text?.[0]?.plain_text
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
      slug: book.properties.slug
        ? book.properties.slug.rich_text[0]?.plain_text || null
        : null,
    };
  });

  return compact(booksInfo);
}

export async function getBookNotesIdBySlug(slug: string | undefined) {
  const databaseId = process.env.NOTION_BOOK_NOTES_DATABASE_ID;
  if (!slug || !databaseId) {
    return null;
  }

  const response = await NotionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'slug',
      text: {
        equals: slug,
      },
    },
  });

  if (!response?.results?.length) {
    return null;
  }

  return response.results[0].id;
}
