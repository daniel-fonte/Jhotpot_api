import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'password',
  database: 'jhotpot',
  synchronize: true,
  logging: false,
  entities: ['src/infrastructure/typeorm/entities/*.ts'],
  migrations: ['src/infrastructure/typeorm/migration/*.ts'],
  subscribers: [],
});

export default AppDataSource;
