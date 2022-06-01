import { BsTrashFill } from "react-icons/bs";

function CartItem() {
    const item_name = "Lanche caseiro"
    const item_qtt = 5;
    const item_price = 23.00;

    return (
        <div className="cartItemContainer">
            <p className="CIName"><strong>{item_name}</strong></p>
            <p>Quantidade: {item_qtt}</p>
            <p>Preço: R${item_price}</p>
            <p>Total: R${item_price * item_qtt}</p>
            <button className="CIButtonRemove" onClick="pass"> <BsTrashFill /> </button>
        </div>
    )
}

export default CartItem;