import CartItem from "./CartIem";

function Cart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const total = cart.reduce((ac, e) => {
        return ac += (e.Preço * e.qtd)
    }, 0);
    

    const clickHandler = (event) => {
        event.preventDefault();
        localStorage.setItem("cart", JSON.stringify([]));
    }

    return (
        <div className="cartContainer">
            <h1>Carrinho</h1>
            <div className="flex-column">
                {cart.map((e) => <CartItem name={e.Nome} quantity={e.qtd} price={e.Preço} id={e.id}/>)}
            </div>

            <div className="cartRow">
                <h2>Total: {Number(total).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</h2>
                <button className="cartButtonFinish" onClick={clickHandler}> Finalizar </button>
            </div>
        </div>
    )
}

export default Cart;