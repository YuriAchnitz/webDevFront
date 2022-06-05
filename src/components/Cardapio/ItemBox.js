import { IoBagAddSharp } from "react-icons/io5";

function ItemBox(props) {
    //copiar o objeto para uma variavel interna para permitir uso posterior
    const item_data = Object.assign({}, props.item_data)
    const item_image_src = item_data.Img
    const item_name = item_data.Nome
    const item_price = item_data.Preço

    const addItem = (e) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);

        const itens = new Set();
        cart.forEach((e) => {
            itens.add(e.id);
        });
        
        if(itens.has(item_data.id)) {
            const index = cart.map((e) => e.id).indexOf(item_data.id);
            cart[index].qtd += 1;
        } else {
            cart.push(Object.assign(item_data, {qtd: 1}));
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
        <div className="itemBoxContainer">
            <img src={item_image_src} alt={item_name} />

            <p>{item_name}</p>
            <p>Preço: {Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>

            <button className="itemBoxButton" onClick={addItem}> Adicionar <IoBagAddSharp /> </button>
        </div>
    )
}

export default ItemBox;