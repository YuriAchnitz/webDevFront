import { FaArrowLeft } from "react-icons/fa";
import ProfileBox from "./ProfileBox";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiShoppingBag3Fill } from "react-icons/ri";

import { useNavigate } from 'react-router-dom';

function SideBar() {

    const navigate = useNavigate();

    const logout = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    const cardapio = (event) => {
        event.preventDefault();
        navigate('/cardapio');
    };

    const pedidos = (event) => {
        event.preventDefault();
        navigate('/orders');
    };

    const carrinho = (event) => {
        event.preventDefault();
        navigate('/cart');
    };

    return (
        <div className="sideBarCcontainer">
            <button className="returnButton" onClick={logout}> <FaArrowLeft /> </button>
            <ProfileBox />
            <button className="sideBarButton" onClick={cardapio}> <MdOutlineMenuBook /> Cardápio </button>
            <button className="sideBarButton" onClick={carrinho}> <RiShoppingCart2Fill /> Carrinho </button>
            <button className="sideBarButton" onClick={pedidos}> <RiShoppingBag3Fill /> Pedidos </button>
        </div>
    )
}

export default SideBar;