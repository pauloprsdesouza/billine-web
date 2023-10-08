import { User } from "../User";

export interface UserResponse {
    token: string,
    user: User
}