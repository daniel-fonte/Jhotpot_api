import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: ['src/infrastructure/typeorm/entities/*.ts'],
  migrations: ['src/infrastructure/typeorm/migration/*.ts'],
  subscribers: [],
});

export default AppDataSource;
