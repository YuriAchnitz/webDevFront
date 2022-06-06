import { BsTrashFill } from "react-icons/bs";

function CartItem(props) {
    const item_name = props.name
    const item_qtt = props.quantity;
    const item_price = props.price;
    const id = props.id;

    const deleteItem = (event) => {
        event.preventDefault();
        const cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.map((e) => e.id).indexOf(id);
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload(false);
    };

    return (
        <div className="cartItemContainer">
            <b>{item_name}</b>
            <p>Quantidade: {item_qtt}</p>
            <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
            <p>Total: {Number(item_price * item_qtt).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
            <button className="CIButtonRemove" onClick={deleteItem}> <BsTrashFill /> </button>
        </div>
    )
}

export default CartItem;