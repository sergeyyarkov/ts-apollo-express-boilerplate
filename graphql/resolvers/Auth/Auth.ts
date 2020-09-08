import { IResolvers } from 'graphql-tools';

const authResolver: IResolvers = {
  Query: {
    login: (): string => 'login logic...',
  },
};

export default authResolver;
