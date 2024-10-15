import { DataSource } from 'typeorm'
import { Business, Establishment, User } from '../models'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Establishment, Business, User],
  subscribers: [],
  migrations: [],
  namingStrategy: new SnakeNamingStrategy(),
})
