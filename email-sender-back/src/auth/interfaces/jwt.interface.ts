import { Strategy } from 'passport-jwt';
export interface JwtPayload {
  id: string;
  email: string;
  name: string;
  lastname: string;
}
