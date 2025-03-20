// import User from '@/models/User';
import { signup, login } from '@/services/authService';

import User from '@/models/User';
import {
  UserContext,
  ResolverParent,
  ResolverSignupArgs,
  ResolverLoginArgs,
} from '@/types/user';

const userResolvers = {
  Query: {
    me: async (_: ResolverParent, __: ResolverParent, context: UserContext) => {
      console.log(context);
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      return User.findByPk(context.user.userId);
    },
  },
  Mutation: {
    signup: async (
      _: ResolverParent,
      { username, email, password }: ResolverSignupArgs
    ) => {
      return signup(username, email, password);
    },

    login: async (
      _: ResolverParent,
      { email, password }: ResolverLoginArgs
    ) => {
      return login(email, password);
    },
  },
};

export default userResolvers;
