import { iOrderItemResponse } from "./IOrderItemResponse";

export interface IOrderResponse {
    qrCodeId: string,
    userId: string,
    companyCNPJ: string,
    companyName: string,
    total: number,
    createdAt: Date,
    items: Array<iOrderItemResponse>
}