import ApiService from "./ApiService";
import { IGetOrderQuery } from "../models/Orders/IGetOrderQuery";
import { IPostOrderRequest } from "../models/Orders/IPostOrderRequest";

class OrderService {
    async create(request: IPostOrderRequest) {
        return await ApiService.post("orders", request);
    }

    async getByLoggeUser() {
        return await ApiService.get("orders");
    }

    async getByQrCodeId(request: IGetOrderQuery) {
        return await ApiService.get(`orders/${request.qrCodeId}`);
    }
}

export default new OrderService();