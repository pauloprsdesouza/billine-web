import { UserTokenResponse } from '../models/Users/UserTokenResponse';
import { StorageHelper } from '../helpers/StorageHelper';

export class AuthService {
    private storageHelper: StorageHelper;

    constructor() {
        this.storageHelper = new StorageHelper();
    }

    isAuthenticated(): boolean {
        return this.storageHelper.getToken() !== null;
    }

    setAuthorizationToken(tokenResponse: UserTokenResponse): void {
        this.storageHelper.setToken(tokenResponse.token);
        this.storageHelper.setUser(tokenResponse.user);
    }

    logout(): void {
        this.storageHelper.clearAuthData();
    }

    getAuthorizationHeader(): string | null {
        const token = this.storageHelper.getToken();
        return token ? `Bearer ${token}` : null;
    }
}
