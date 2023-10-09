import ApiService from "./ApiService";
import { ISigninRequest } from "../models/Users/Signin/SigninRequest";

class UserService {
    async signin(request: ISigninRequest) {
        return await ApiService.post("users/signin", request);
    }
}

export default new UserService();
