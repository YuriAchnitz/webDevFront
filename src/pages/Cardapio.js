import React from 'react';
import ItemBox from '../components/ItemBox';

function Cardapio() {
    const [users, setUsers] = React.useState([]);
    const funcaoAssync = async () => {
        const resultado = await fetch("https://reqres.in/api/users/");
        const json = await resultado.json();
        setUsers(json.data);
    };
    funcaoAssync()

    return (
        <div className='menuContainer'>

            <h1>Lanches</h1>
            <div className="menu-row">
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>

            <h1>Acompanhamentos</h1>
            <div className="menu-row">
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <img key={user.avatar} src={user.avatar} />
                            <p> <strong> {user.first_name} </strong> </p>
                            <p> {user.email} </p>

                        </div>);
                })} </div></div>
    )

}

export default Cardapio;