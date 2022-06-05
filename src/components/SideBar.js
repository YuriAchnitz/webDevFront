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

    const admin = (event) => {
        event.preventDefault();
        navigate('/admin');
    };

    return (
        <div className="sideBarCcontainer">
            <button className="returnButton" onClick={logout}> <FaArrowLeft /> </button>
            <ProfileBox />
            <button className="sideBarButton" onClick={cardapio}> <MdOutlineMenuBook /> Cardápio </button>
            <button className="sideBarButton" onClick={carrinho}> <RiShoppingCart2Fill /> Carrinho </button>
            <button className="sideBarButton" onClick={pedidos}> <RiShoppingBag3Fill /> Pedidos </button>
            {localStorage.getItem("username").endsWith("admin") ? <button className="sideBarButton" onClick={admin}> <RiShoppingBag3Fill /> Admin </button> : <></>}
        </div>
    )
}

export default SideBar;