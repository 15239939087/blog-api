import { Connection } from 'typeorm';
import { UserEntity } from './user.entity';

export const userProvider = [
  {
    provide: 'userRepositoryToken',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: ['DbConnectionToken'],
  },
];
