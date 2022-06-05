import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";

function TableItem({item}) {
    const deleteItem = (event) => {
        event.preventDefault();
        fetch('https://webdev-backend-whntohr7oq-rj.a.run.app/cardapio/deleteItem?id=' + item.id, {method: 'DELETE'}).then(alert("Item apagado!"));
    }
    
    return (
        <tr>
            <td>{item.Nome}</td>
            <td>{Number(item.Preço).toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}</td>
            <td>{item.Tipo}</td>
            <td>{item.Img}</td>
            <td><button className="CIButtonRemove" onClick={deleteItem}> <BsTrashFill /></button></td>
        </tr>
    )
}

export default function Admin() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("");
    const [img, setImg] = useState("");

    const [menu, setMenu] = useState([]);
    const getMenu = async () => {
        const res = await fetch("https://webdev-backend-whntohr7oq-rj.a.run.app/cardapio");
        const json = await res.json();
        setMenu(json);
    };

    useEffect(() => { getMenu() })

    const handleSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Nome: name,
                Desc: desc,
                Img: img,
                Preço: Number(price),
                Tipo: type
            })
        };
        fetch('https://webdev-backend-whntohr7oq-rj.a.run.app/cardapio/createItem', options).then(alert("Cadastrado!")).catch("Erro");
        setName("");
        setPrice("");
        setDesc("");
        setImg("");
        setType("");
    }

    return (
        <div className='menuContainer'>
            <h1>Adicionar Item ao Cardapio</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>
                    Nome: 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    Preço: 
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>

                <label>
                    Descrição: 
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </label>

                <label>
                    Tipo: 
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </label>

                <label>
                    Imagem: 
                    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                </label>

                <input type="submit" value="Enviar" />
            </form>

            <h1>Itens Atuais</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Tipo</th>
                        <th>Link Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                
                <tbody>
                    {menu.map((e) => <TableItem item={e}/>)}
                </tbody>
            </table> 
        </div>
    )
};