import { AddUserDocument, GetUsersByEmailDocument } from 'gen/hasura.types';
import { User } from 'gen/resolvers.types';
import { TypedGraphQLClient } from 'lib/gql-client';

export class UsersRepository {
  constructor(private client: TypedGraphQLClient) {}

  async getUserByEmail(email: string): Promise<Omit<User, 'role' | '__typename'>> {
    const data = await this.client.fetch(GetUsersByEmailDocument, {
      email,
    });
    if (data.users.length === 0) {
      throw new Error('User not found');
    }
    return data.users[0];
  }

  async createUser({
    email,
    password,
  }: Omit<User, 'id' | 'role'>): Promise<Omit<User, 'password' | '__typename' | 'role'>> {
    const { insert_users_one } = await this.client.fetch(AddUserDocument, {
      email: email.toLowerCase(),
      password: password,
    });

    if (!insert_users_one) {
      throw new Error('User not found');
    }

    return insert_users_one;
  }
}
