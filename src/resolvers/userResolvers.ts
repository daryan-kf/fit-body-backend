// import User from '@/models/User';
import { signup, login } from '@/services/authService';

import { SignupArgs, LoginArgs } from '../types';

const userResolvers = {
  Query: {},
  Mutation: {
    signup: async (_: unknown, { username, email, password }: SignupArgs) => {
      return signup(username, email, password);
    },

    login: async (_: unknown, { email, password }: LoginArgs) => {
      return login(email, password);
    },
  },
};

export default userResolvers;
