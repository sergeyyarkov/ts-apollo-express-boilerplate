import { IResolvers } from 'graphql-tools';

interface BookType {
  id: string;
  title: string;
}

const books = [
  { id: '1', title: 'First Book' },
  { id: '2', title: 'Second Book' },
];

const booksResolver: IResolvers = {
  Query: {
    books: (): BookType[] => books,
  },
};

export default booksResolver;
