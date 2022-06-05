import React from 'react';
import Categoria from './Categoria';

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
        </div>
    )

}

export default Cardapio;