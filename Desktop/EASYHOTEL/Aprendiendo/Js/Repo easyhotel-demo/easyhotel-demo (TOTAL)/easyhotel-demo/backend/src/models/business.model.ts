import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from 'typeorm'
import { User } from './user.model'
import { Establishment } from './establishment.model'

@Entity('businesses')
export class Business extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number

  @Column()
  ruc: number

  @Column()
  reasonSocial: string

  @Column()
  fullAddress: string

  @ManyToOne(() => User, (user) => user.businesses)
  user: User

  @OneToMany(() => Establishment, (establishment) => establishment.business)
  establishments: Establishment[]

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  updateAt?: Date

  @DeleteDateColumn()
  deletedAt?: Date

  static async getById(id: number) {
    const query = `SELECT * FROM businesses WHERE id = ? AND deleted_at IS NULL`
    const [rows] = await this.query(query, [id])
    return rows
  }

  static async getAll() {
    const query = `SELECT * FROM businesses WHERE deleted_at IS NULL`
    const rows = await this.query(query)
    return rows
  }
}
