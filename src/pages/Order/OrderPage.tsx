import React, { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import OrderService from "../../services/OrderService";
import { convertToPTBTDateTime } from "../../helpers/DatetimeHelper";
import ModalComponent from "../../components/ModalComponent";
import { IOrderResponse } from "../../models/Orders/IOrderResponse";

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<IOrderResponse[]>([]);
    const [showItems, setShowItems] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<IOrderResponse | undefined>();

    useEffect(() => {
        OrderService.getByLoggeUser()
            .then((response: AxiosResponse<IOrderResponse[]>) => {
                setOrders(response.data);
            })
            .catch((error: AxiosError) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    function getOrderItems(order: IOrderResponse) {
        return order.items.map((item, index) => <span key={index}>{item.description}</span>);
    };

    function name() {
        if (showItems && selectedOrder) {
            return <ModalComponent
                show={showItems}
                handleClose={() => setShowItems(false)}
                title={selectedOrder.companyName}
                body={getOrderItems(selectedOrder)}
            />
        }
    }

    return (
        <>
            {orders.map(order => (
                <div key={order.qrCodeId} className="card border-0 shadow mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{order.companyName}</h5>
                        <p className="card-text">
                            <i className="fa-solid fa-file-invoice-dollar"></i> R$ {order.total}
                        </p>
                        <p className="card-text">
                            <i className="fa-solid fa-calendar-days"></i> {convertToPTBTDateTime(order.createdAt)}
                        </p>
                        <button
                            type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
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
            ))}
            {name()}
        </>
    );
}

export default OrderPage;
