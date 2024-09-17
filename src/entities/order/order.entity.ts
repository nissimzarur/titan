import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'user_id',
    default: '',
  })
  userId: string | null;

  @Column('decimal', {
    name: 'price',
    default: 0,
    precision: 10,
    scale: 2,
  })
  price: number | null;

  @Column('boolean', { name: 'is_payed', nullable: true })
  isPayed?: boolean | null;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;
}
