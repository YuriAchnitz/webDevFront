import CartItem from "../components/CartIem";

function Cart() {
    const total = 9999999;

    return (
        <div className="cartContainer">
            <h1>Carrinho</h1>

            <div className="flex-column">
                <CartItem name="X Gordo" quantity={5} price={19.99}/>
                <CartItem name="Hamburguer Caseiro" quantity={1} price={10}/>
                <CartItem name="Le Lanché Dè Primeré" quantity={2} price={34.1}/>
            </div>

            <div className="cartRow">
                <h2>Total: {Number(total).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</h2>
                <button className="cartButtonFinish" onClick="pass"> Finalizar </button>
            </div>
        </div>
    )
}

export default Cart;