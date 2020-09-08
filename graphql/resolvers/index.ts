import { IResolvers } from 'graphql-tools';

import booksResolver from './Books/Books';
import usersResolver from './Users/Users'

const resolvers: IResolvers[] = [usersResolver, booksResolver];

export default resolvers;
