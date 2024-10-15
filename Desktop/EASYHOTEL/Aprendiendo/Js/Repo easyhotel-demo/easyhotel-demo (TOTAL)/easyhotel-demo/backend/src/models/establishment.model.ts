import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Business } from './business.model'

enum EstablishmentType {
  HOTEL = 'HOTEL',
  HOSTEL = 'HOSTAL',
  LODGIN = 'HOSPEDAJE',
}

@Entity({ name: 'establishments' })
export class Establishment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number
  @Column()
  public name: string

  @Column()
  public type: EstablishmentType

  @Column()
  public address: string

  @Column()
  public photoUri: string

  @ManyToOne(() => Business, (business) => business.establishments)
  business: Business

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  updateAt?: Date

  @DeleteDateColumn()
  deletedAt?: Date

  static async getAll() {
    const query = `SELECT * FROM establishments WHERE deleted_at IS NULL`
    const rows = await this.query(query)
    return rows
  }

  static async getById(id: number) {
    const query = `SELECT * FROM establishments WHERE id = ? AND deleted_at IS NULL`
    const [rows] = await this.query(query, [id])
    return rows
  }
}
