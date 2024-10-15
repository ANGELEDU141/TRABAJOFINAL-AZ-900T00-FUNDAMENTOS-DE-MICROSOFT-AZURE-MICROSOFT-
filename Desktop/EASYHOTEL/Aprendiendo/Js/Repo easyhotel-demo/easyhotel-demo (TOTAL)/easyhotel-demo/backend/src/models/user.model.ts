import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm'
import { Business } from './business.model'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id?: number

  @Column()
  name: string

  @Column()
  lastName: string

  @Column()
  age: number

  @Column()
  color: string

  @Column()
  photoUri: string

  @OneToMany(() => Business, (business) => business.user)
  businesses: Business[]

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  updateAt?: Date

  @DeleteDateColumn()
  deletedAt?: Date

  static async getById(id: number) {
    const query = `SELECT * FROM users WHERE id = ? AND deleted_at IS NULL`
    const [rows] = await this.query(query, [id])
    return rows[0]
  }
}
