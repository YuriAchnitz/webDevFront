import OrderItem from "../components/OrderItem";

function Orders() {
    return (
        <div className="ordersContainer">
            <h2>Pedidos</h2>

            <OrderItem />
            <OrderItem />
            <OrderItem />

        </div>
    )
}

export default Orders;