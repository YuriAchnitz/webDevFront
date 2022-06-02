function OrderSubItem(props) {
    const sub_item_number = props.sub_number
    const item_name = props.name
    const item_qtt = props.quantity
    const item_price = props.price

    return (
        <div className="flex-column">
            <b>Item {sub_item_number}:</b>

            <div className="orderSubItem">
                <p><strong>{item_name}</strong></p>
                <p>Quantidade: {item_qtt}</p>
                <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
                <p>Total: {Number(item_price * item_qtt).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </div>
    )
}

export default OrderSubItem;