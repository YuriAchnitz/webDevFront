import React from 'react'
import OrderItem from "../components/OrderItem";

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const getOrders = async () => {
        const res = await fetch("https://webdev-backend-whntohr7oq-rj.a.run.app/pedido");
        const json = await res.json();
        setOrders(json);
    };

    React.useEffect(() => { getOrders() })

    return (
        <div className="ordersContainer">
            <h2>Pedidos</h2>

            {orders.map((order) => {
                return (
                    <div>
                        <OrderItem key={order.id} order_data={order} />
                    </div>);
            })}

        </div>
    )
}

export default Orders;