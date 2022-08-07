import AppDataSource from './infrastructure/typeorm/data-source';

AppDataSource.initialize().then(async () => {
  console.log('Inserting a new user into the database...');
}).catch((error) => console.log(error));
