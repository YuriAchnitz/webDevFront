function OrderSubItem() {
    const sub_item_number = 1
    const item_name = "Lanche Caseiro"
    const item_qtt = 5
    const item_price = 23

    return (
        <div className="flex-column">
            <b>Item {sub_item_number}:</b>

            <div className="orderSubItem">
                <p><strong>{item_name}</strong></p>
                <p>Quantidade: {item_qtt}</p>
                <p>Preço: R${item_price}</p>
                <p>Total: R${item_price * item_qtt}</p>
            </div>
        </div>
    )
}

export default OrderSubItem;