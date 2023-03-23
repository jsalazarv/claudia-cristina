import { useAxios } from '../api';
import { IUserService } from "~/services/UserService/types";
import { IUser } from '~/entities/user';


export const useUserService = (): IUserService => {
    const client = useAxios()

    return {
        async fetchAll(): Promise<IUser[]> {
            const response = await client.get<IUser[]>('/users');
            return response.data;
        },

        async fetchOne(id): Promise<IUser> {
            const response = await client.get<IUser>(`/users/${id}`);
            return response.data;
        },

        /*async createOne(data: CreateUserInput) {
            const response = await client.post(`/users`,data );
            return response.data
        },*/
    }
}

//const userService = useUserService()
