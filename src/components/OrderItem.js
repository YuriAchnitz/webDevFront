import OrderSubItem from "./OrderSubItem";

function OrderItem() {
    const order_number = 1
    const total_price = 52;
    const client_name = "Renato"
    const order_time = "23:52"

    return (
        <div className="orderItemContainer">
            <div className="orderItemRow">
                <p><strong>Pedido {order_number}</strong></p>
                <p className="OIp">Preço total: R${total_price}</p>
                <p className="OIp">Cliente: {client_name}</p>
                <p className="OIp">Horário: {order_time}</p>
            </div>
            <div className="orderItemColumn">
                <OrderSubItem />
                <OrderSubItem />
                
            </div>
        </div>
    )
}

export default OrderItem;