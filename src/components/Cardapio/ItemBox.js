import { IoBagAddSharp } from "react-icons/io5";

function ItemBox(props) {
    //copiar o objeto para uma variavel interna para permitir uso posterior
    const item_data = Object.assign({}, props.item_data)

    const item_image_src = item_data.Img
    const item_name = item_data.Nome
    const item_price = item_data.Preço

    return (
        <div className="itemBoxContainer">
            <img src={item_image_src} alt={item_name} />

            <p>{item_name}</p>
            <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>

            <button className="itemBoxButton" onClick=""> Adicionar <IoBagAddSharp /> </button>
        </div>
    )
}

export default ItemBox;