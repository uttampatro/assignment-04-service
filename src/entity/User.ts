import { type } from 'os';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany,
    BaseEntity,
    Index,
    CreateDateColumn,
} from 'typeorm';

@Entity('user')
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    image: string;

    @Column()
    totalOrders: number;

    @CreateDateColumn()
    @Index()
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamp' })
    lastLogin: Date;
}
