import { IResolvers } from 'graphql-tools';

import authResolver from './Auth/Auth';
import booksResolver from './Books/Books';

const resolvers: IResolvers[] = [authResolver, booksResolver];

export default resolvers;
