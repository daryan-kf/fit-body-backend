import { IncomingMessage } from 'http';
import { User } from '@/types/user';

export interface GraphQLContext {
  req: IncomingMessage;
  user?: User;
}
