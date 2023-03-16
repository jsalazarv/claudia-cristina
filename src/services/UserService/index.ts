// services/UserService.ts

import { User } from '../UserService/types';
import { apiClient } from '../api';

export async function getUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
}

export async function getUser(id: number): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
}
