import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'organizations' })
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
  @Column({ type: 'int', nullable: false })
  status: number;
}
