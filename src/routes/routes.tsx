export class RoutePath {
    path: string;
    name: string;

    constructor(path: string, name: string) {
        this.path = path;
        this.name = name;
    }
}

const login = new RoutePath("/", "Login");
const home = new RoutePath("/home", "Home");
const orders = new RoutePath("/orders", "Compras");

export const routes = [login, home, orders]