import BillineApi from "../helpers/api";
import { ISigninRequest } from "../models/Users/Signin/SigninRequest";

export async function signinRequest(request: ISigninRequest) {
    return await BillineApi.post("users/signin", request);
}