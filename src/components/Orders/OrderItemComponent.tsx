import { IOrderResponse } from "../../models/Orders/IOrderResponse";

type OrderItemCardProps = {
    order: IOrderResponse;
};

const OrderItemCardComponent: React.FC<OrderItemCardProps> = ({ order }) => {
    return (
        <div>
            {
                order.items.map((item, index) => (
                    <div key={index} className={`card border-0 shadow ${index === order.items.length-1 ? "mb-0" : "mb-3"}`} >
                        <div className="card-body">
                            <h6 className="card-title">{item.description}</h6>
                            <div className="d-flex flex-row">
                                <p className="text-secondary pe-2">Qtd.: {item.quantity} {item.unityMeasure}</p>
                                <p className="card-text text-secondary ps-3">Preço Unitário: R$ {item.unityPrice}</p>
                            </div>
                            <h5 className="card-subtitle text-primary">Total R$ {item.totalPrice}</h5>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default OrderItemCardComponent;
