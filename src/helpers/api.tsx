import axios from "axios";

const BillineApi = axios.create({
    baseURL: "http://localhost:48649/api/v1",
    //baseURL: "https://46tn2t6j25.execute-api.us-east-1.amazonaws.com/dev/api/v1", 
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
});

BillineApi.interceptors.request.use(async config => {
    const token = getToken();
    
    if (token && config.headers) {
        
        config.headers.Authorization = `Bearer ${token}`;
        console.log(config.headers);
    }
    return config;
});

export default BillineApi;

export const TOKEN_KEY = "Token";
export const USER_KEY = "User";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getAutenticatedUser = () => localStorage.getItem(USER_KEY);

export const autenticaded = function (token: string, user: string) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, user);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};