import { BsTrashFill } from "react-icons/bs";

function CartItem(props) {
    const item_name = props.name
    const item_qtt = props.quantity;
    const item_price = props.price;

    return (
        <div className="cartItemContainer">
            <p className="CIName"><strong>{item_name}</strong></p>
            <p>Quantidade: {item_qtt}</p>
            <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
            <p>Total: {Number(item_price * item_qtt).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
            <button className="CIButtonRemove" onClick="pass"> <BsTrashFill /> </button>
        </div>
    )
}

export default CartItem;