// Common resolver parent type
export type ResolverParent = unknown;

// Args types
export interface SignupArgs {
  username: string;
  email: string;
  password: string;
}

export interface LoginArgs {
  email: string;
  password: string;
}

// You can also define return types
export interface AuthPayload {
  token: string;
  user: {
    id: string | number;
    username: string;
    email: string;
  };
}
