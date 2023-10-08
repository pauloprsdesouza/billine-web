import BillineApi from "../helpers/api";
import { IGetOrderQuery } from "../models/Orders/IGetOrderQuery";
import { IPostOrderRequest } from "../models/Orders/IPostOrderRequest";

export async function createOrder(request: IPostOrderRequest) {
    return await BillineApi.post("orders", request);
}

export async function getOrderByLoggeUser() {
    return await BillineApi.get("orders");
}

export async function getOrderByQrCodeId(request: IGetOrderQuery) {
    return await BillineApi.get(`orders/${request.qrCodeId}`);
}