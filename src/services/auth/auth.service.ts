import bcrypt from 'bcrypt';
import { UsersRepository } from 'db/users.repository';
import { FastifyReply } from 'fastify';
import { AuthPayload, LoginInput, RegisterInput } from 'gen/resolvers.types';
import jwt from 'jsonwebtoken';
import mercurius from 'mercurius';

import { appConfig } from '../../config';

const { ErrorWithProps } = mercurius;

const generateToken = (email: string) => {
  return jwt.sign({ email }, appConfig.jwtSecret as string, {
    expiresIn: 60 * 15,
  });
};

export class AuthService {
  constructor(private repository: UsersRepository) {}

  async login({ email, password }: LoginInput, reply: FastifyReply) {
    let user = await this.repository.getUserByEmail(email);

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = generateToken(user.email);

      reply.setCookie(appConfig.jwtCookieName, token, {
        secure: appConfig.jwtSecure,
      });

      return {
        user,
      };
    } else {
      throw new ErrorWithProps('Email or password is wrong', {});
    }
  }

  async register({ password, email }: RegisterInput, reply: FastifyReply): Promise<AuthPayload | any> {
    const isAllowedToRegister = appConfig.authAllowList.indexOf(email.toLowerCase()) !== -1;
    if (!isAllowedToRegister) {
      throw new ErrorWithProps('User not allowed to register', {});
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.repository.createUser({
      email: email.toLowerCase(),
      password: hash,
    });

    const token = generateToken(email);

    reply.setCookie(appConfig.jwtCookieName, token, {
      secure: appConfig.jwtSecure,
    });

    return {
      user,
    };
  }

  async refreshToken(reply: FastifyReply): Promise<string> {
    const JWT_TOKEN = reply.request?.cookies[appConfig.jwtCookieName];
    try {
      const oldToken = jwt.verify(JWT_TOKEN, appConfig.jwtSecret);
      const email = (oldToken as { email: string }).email;
      const newToken = generateToken(email);

      reply.setCookie(appConfig.jwtCookieName, newToken, {
        secure: appConfig.jwtSecure,
      });
    } catch (error) {
      throw new ErrorWithProps(error?.name, {
        code: 'UNAUTHENTICATED',
      });
    }

    return 'success';
  }

  async logout(reply: FastifyReply): Promise<string> {
    try {
      reply.setCookie(appConfig.jwtCookieName, '', {
        secure: appConfig.jwtSecure,
      });
    } catch (error) {
      throw new ErrorWithProps(error?.name || 'Unable to logout');
    }

    return 'success';
  }
}
