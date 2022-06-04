function OrderSubItem(props) {
    const sub_item_data = props.sub_item_data;
    const sub_item_number = props.sub_number

    const item_name = sub_item_data.Nome;
    const item_qtt = sub_item_data.qtd
    const item_price = sub_item_data.Preço

    return (
        <div className="flex-column">
            <b>Item {sub_item_number}:</b>

            <div className="orderSubItem">
                <strong>{item_name}</strong>
                <p>Quantidade: {item_qtt}</p>
                <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>
                <b><p>Total: {Number(item_price * item_qtt).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p></b>
            </div>
        </div>
    )
}

export default OrderSubItem;