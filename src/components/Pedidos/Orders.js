import React from 'react'
import OrderItem from "./OrderItem";

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
            <h1>Pedidos</h1>

            {orders.map((order, n = 0) => {
                let x = orders.length;
                x -= n;
                n += 1;
                if(order.Cliente === localStorage.getItem("username")) {
                    return (
                        <div>
                            <OrderItem order_data={order} order_number={x} />
                        </div>
                        );
                } else 
                    return null;
            })}

        </div>
    )
}

export default Orders;