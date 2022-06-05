import CartItem from "./CartIem";

import { useNavigate } from 'react-router-dom';


function Cart() {
    const navigate = useNavigate();

    const cart = JSON.parse(localStorage.getItem("cart"));
    const total = cart.reduce((ac, e) => {
        return ac += (e.Preço * e.qtd)
    }, 0);
    

    const clickHandler = (event) => {
        event.preventDefault();
        if(cart.length === 0)
            alert("O carrinho esta vazio!");
        else {
            localStorage.setItem("cart", JSON.stringify([]));
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Itens: cart,
                    Data: new Date().toISOString(),
                    Cliente: localStorage.getItem("username"),
                    PreçoTotal: total,
                    Status: "Aguardando Confirmação"
                })
            };
            fetch('https://webdev-backend-whntohr7oq-rj.a.run.app/pedido/createPedido', options).then(alert("Pedido enviado!")).catch("Erro");
            navigate('/orders');
        }
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