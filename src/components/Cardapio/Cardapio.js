import React from 'react';
import Categoria from './Categoria';
import './menu.css'
import { ToastContainer } from 'react-toastify'

function Cardapio() {
    const [menu, setMenu] = React.useState([]);
    const getMenu = async () => {
        const res = await fetch("https://webdev-backend-whntohr7oq-rj.a.run.app/cardapio");
        const json = await res.json();
        setMenu(json);
    };

    React.useEffect(() => { getMenu() })

    const categorias = new Set();
    menu.forEach((e) => categorias.add(e.Tipo));

    return (
        <div className='menuContainer'>
            { [...categorias].map((e) => <Categoria cat={e} itens={menu}/>) }
            <ToastContainer theme='colored'/>
        </div>
    )

}

export default Cardapio;