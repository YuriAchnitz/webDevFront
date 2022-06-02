import React from 'react';
import ItemBox from '../components/ItemBox';

function Cardapio() {
    const [menu, setMenu] = React.useState([]);
    const getMenu = async () => {
        const res = await fetch("https://webdev-backend-whntohr7oq-rj.a.run.app/cardapio");
        const json = await res.json();
        setMenu(json);
    };

    React.useEffect(() => { getMenu() })

    return (
        <div className='menuContainer'>

            <h1>Lanches</h1>
            <div className="menu-row">
                {menu.map((item) => {
                    if (item.Tipo == "Lanche")
                        return (
                            <div>
                                <ItemBox key={item.id} item_data={item} />
                            </div>);
                    else
                        return null;
                })}
            </div>

            <h1>Acompanhamentos</h1>
            <div className="menu-row">
                {menu.map((item) => {
                    if (item.Tipo != "Lanche")
                        return (
                            <div>
                                <ItemBox key={item.id} item_data={item} />
                            </div>);
                    else
                        return null;
                })}
            </div>
        </div>
    )

}

export default Cardapio;