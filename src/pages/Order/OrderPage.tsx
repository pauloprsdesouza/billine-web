import React, { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import OrderService from "../../services/OrderService";
import { convertToPTBTDateTime } from "../../helpers/DatetimeHelper";
import ModalComponent from "../../components/ModalComponent";
import { IOrderResponse } from "../../models/Orders/IOrderResponse";
import OrderItemCardComponent from "../../components/Orders/OrderItemComponent";

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<IOrderResponse[]>([]);
    const [showItems, setShowItems] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<IOrderResponse | null>(null);

    useEffect(() => {
        OrderService.getByLoggeUser()
            .then((response: AxiosResponse<IOrderResponse[]>) => {
                setOrders(response.data);
            })
            .catch((error: AxiosError) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    function showModal() {
        return showItems && (
            <ModalComponent
                show={showItems}
                handleClose={setShowItems}
                title={selectedOrder!.companyName}
                body={<OrderItemCardComponent order={selectedOrder!} />}
            />)
    }

    return (
        <>
            {orders.map(order => (
                <div key={order.qrCodeId} className="card border-0 shadow mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{order.companyName}</h5>
                        <div className="d-flex flex-row align-content-center justify-content-between">
                            <div>

                                <p className="card-text">
                                    <i className="fa-solid fa-file-invoice-dollar"></i> R$ {order.total}
                                </p>
                                <p className="card-text">
                                    <i className="fa-solid fa-calendar-days"></i> {convertToPTBTDateTime(order.createdAt)}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    setShowItems(true);
                                    setSelectedOrder(order);
                                }}
                            >
                                Ver Items
                            </button>
                        </div>




                    </div>
                </div>
            ))}
            {showModal()}
        </>
    );
}

export default OrderPage;
