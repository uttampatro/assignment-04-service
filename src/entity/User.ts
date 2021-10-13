import { type } from 'os';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
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

// export default (sequelize, DataTypes) => {
//     const BaseUser = sequelize.define(
//         'user',
//         {
//             user_id: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//                 primaryKey: true,
//             },
//             user_name: {
//                 type: DataTypes.STRING(250),
//                 allowNull: false,
//             },
//             user_email: {
//                 type: DataTypes.STRING(250),
//                 allowNull: false,
//             },
//             user_password: {
//                 type: DataTypes.STRING(250),
//                 allowNull: false,
//             },
//             user_image: {
//                 type: DataTypes.STRING(250),
//             },
//             total_orders: {
//                 type: DataTypes.STRING(250),
//                 allowNull: false,
//             },
//             created_at: {
//                 type: Date(),
//                 allowNull: false,
//             },
//         },
//         {
//             timestamps: true,
//             underscored: true,
//             tableName: 'user',
//         }
//     );

//     return BaseUser;
// };
