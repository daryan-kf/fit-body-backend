export interface User {
  id?: string;
  email: string;
  username: string;
  password: string;
}

export type ResolverParent = unknown;

export interface UserContext {
  user?: {
    userId: number | string;
  };
}

export interface ResolverSignupArgs {
  username: string;
  email: string;
  password: string;
}

export interface ResolverLoginArgs {
  email: string;
  password: string;
}

export interface AuthPayload {
  token: string;
  user: {
    id: string | number;
    username: string;
    email: string;
  };
}
