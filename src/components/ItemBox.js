import { IoBagAddSharp } from "react-icons/io5";

function ItemBox() {
    const item_image_src = "https://cdn6.campograndenews.com.br/uploads/noticias/2021/11/18/b6d31ed75f006fd0868696cc4cfb035b95d5b3a3.JPG"
    const item_name = "Lanche caseiro da casa"
    const item_price = 23.00

    return (
        <div className="itemBoxContainer">
            <img src={item_image_src} width="60%" height="width" alt={item_name} />

            <p>{item_name}</p>
            <p>Preço: R${item_price}</p>

            <button className="itemBoxButton" onClick="pass"> Adicionar <IoBagAddSharp/> </button>
        </div>
    )
}

export default ItemBox;