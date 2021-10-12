import { User } from '../../entity/User';
import {
    DeleteDTO,
    DetailsDTO,
    ImageDTO,
    RegisterDTO,
    SaveUserDTO,
    UpdateDTO,
} from './UserDTO';

class UserService {
    async register(dto: RegisterDTO) {
        const { username, email, password, image, totalOrders } = dto;
        const user = new User();
        user.email = email;
        user.username = username;
        user.password = password;
        user.image = image;
        user.totalOrders = totalOrders;
        await user.save();
        return user;
    }
    async login(dto: SaveUserDTO) {
        const { email } = dto;
        const user = await User.findOne({
            where: { email },
        });
        return user;
    }
    async delete(dto: DeleteDTO) {
        const { id } = dto;
        const user = await User.delete(id);
        return user;
    }
    async details(dto: DetailsDTO) {
        const { id } = dto;
        const user = await User.findOne({
            where: { id: id },
        });
        return user;
    }
    async update(dto: UpdateDTO) {
        const { username, email, password, image, id } = dto;
        const user = await User.findOne({
            where: { id: id },
        });

        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        user.image = image || user.image;
        await user.save();
        return user;
    }
    async image(dto: ImageDTO) {
        const { id } = dto;
        const user = await User.findOne({
            where: { id: id },
        });
        return user;
    }
}

export default new UserService();
