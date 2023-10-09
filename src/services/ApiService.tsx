import axios from "axios";
import { AuthService } from "./AuthService";

const BASE_URL = "https://o3stlz74m4.execute-api.us-east-1.amazonaws.com/dev/api/v1";
//const BASE_URL = "https://localhost:7022/api/v1";

export class ApiService {
    private axiosInstance;
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
        this.axiosInstance = axios.create({
            baseURL: BASE_URL,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.axiosInstance.interceptors.request.use(config => {
            const authHeader = this.authService.getAuthorizationHeader();
            if (authHeader && config.headers) {
                config.headers.Authorization = authHeader;
            }
            return config;
        });
    }

    get instance() {
        return this.axiosInstance;
    }
}

export default new ApiService().instance;
