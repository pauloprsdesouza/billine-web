import React, { useEffect, useState } from "react";
import { IOrderResponse } from "../../models/Orders/IOrderResponse";
import { getOrderByLoggeUser } from "../../services/OrderService";
import { AxiosError, AxiosResponse } from "axios";

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<Array<IOrderResponse>>([]);

    useEffect(() => {
        getOrderByLoggeUser()
            .then((response: AxiosResponse) => {
                setOrders(response.data as Array<IOrderResponse>);
            }).catch((error: AxiosError) => {

            })
    }, []);

    return (
        <>
            {
                orders.map(order => {
                    return (
                        <div>{order.companyName}</div>
                    )
                })
            }
        </>
    )
}

export default OrderPage;