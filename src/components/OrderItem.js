import OrderSubItem from "./OrderSubItem";

function OrderItem(props) {
    const order_data = Object.assign(props.order_data);

    const order_number = order_data.id;
    const total_price = order_data.PreçoTotal;
    const client_name = order_data.Cliente;
    const order_time = order_data.Data;
    const order_items = order_data.Items;

    return (
        <div className="orderItemContainer">
            <div className="orderItemRow">
                <p><strong>Pedido nº{order_number}</strong></p>
                <p className="OIp">Preço total: R${total_price}</p>
                <p className="OIp">Cliente: {client_name}</p>
                <p className="OIp">Horário: {order_time}</p>
            </div>

            <div className="orderItemColumn">
                {order_items.map((item, i = 0) => {
                    i += 1;
                    return (
                        <div>
                            <OrderSubItem sub_number={i} />
                        </div>);
                })}
            </div>
        </div>
    )
}

export default OrderItem;