export class StorageHelper {
    private readonly TOKEN_KEY = "Token";
    private readonly USER_KEY = "User";

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    setUser(user: string): void {
        localStorage.setItem(this.USER_KEY, user);
    }

    getUser(): string | null {
        return localStorage.getItem(this.USER_KEY);
    }

    clearAuthData(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
    }
}