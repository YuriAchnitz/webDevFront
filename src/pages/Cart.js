import CartItem from "../components/CartIem";

function Cart() {
    const total = 9999999;

    return (
        <div className="cartContainer">
            <h1>Carrinho</h1>

            <div className="flex-column">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            <div className="cartRow">
                <h2>Total: R${total}</h2>
                <button className="cartButtonFinish" onClick="pass"> Finalizar </button>
            </div>
        </div>
    )
}

export default Cart;