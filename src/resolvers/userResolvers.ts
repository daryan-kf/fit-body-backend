import User from "../models/User";
import {signup, login} from "../services/authService";

const userResolvers = {
  Query: {},
  Mutations: {
    signup: async (_: any, {username, email, password}: any) => {
      return signup(username, email, password);
    },

    login: async (_: any, {email, password}: any) => {
      return login(email, password);
    },
  },
};

export default userResolvers;
