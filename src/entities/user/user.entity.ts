import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'full_name',
    default: '',
  })
  fullName: string | null;

  @Column('varchar', {
    name: 'email',
    default: '',
  })
  email: string | null;

  @Column('varchar', {
    name: 'full_address',
    default: '',
  })
  fullAddress: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive?: boolean | null;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;
}
