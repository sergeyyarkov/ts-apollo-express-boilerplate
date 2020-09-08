import { IResolvers } from 'graphql-tools';

interface UserType {
  id: string;
  name: string;
}

const users = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Ivan' },
];

const usersResolver: IResolvers = {
  Query: {
    users: (): UserType[] => users,
  },
};

export default usersResolver;
