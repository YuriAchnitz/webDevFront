import ItemBox from './ItemBox';

function Categoria(props) {
    return (
        <>
        <h1>{props.cat}</h1>
        <div className="menu-row">
            {props.itens.map((item) => {
                if (item.Tipo === props.cat)
                    return (
                        <div>
                            <ItemBox key={item.id} item_data={item} />
                        </div>);
                else
                    return null;
            })}
        </div>
        </>
    );
}

export default Categoria;