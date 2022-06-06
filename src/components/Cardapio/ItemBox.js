import { IoBagAddSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.min.css'
import { toast } from 'react-toastify';

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

        if (itens.has(item_data.id)) {
            const index = cart.map((e) => e.id).indexOf(item_data.id);
            cart[index].qtd += 1;
        } else {
            cart.push(Object.assign(item_data, { qtd: 1 }));
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        toast.success('Item adicionado ao Carrinho', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="itemBoxContainer">
            <img src={item_image_src} alt={item_name} />

            <span>
                <p>{item_name}</p>
                <p>{Number(item_price).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</p>

                <button className="itemBoxButton" onClick={addItem}> Adicionar <IoBagAddSharp /> </button>
            </span>
        </div>
    )
}

export default ItemBox;