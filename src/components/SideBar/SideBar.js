import { FaArrowLeft } from "react-icons/fa";
import ProfileBox from "./ProfileBox";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaCog } from "react-icons/fa";
import './sideBar.css'

import { useNavigate } from 'react-router-dom';

function SideBar(props) {

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
            <button className={`sideBarButton ${props.option1}`} onClick={cardapio}> <MdOutlineMenuBook /> Cardápio </button>
            <button className={`sideBarButton ${props.option2}`} onClick={carrinho}> <RiShoppingCart2Fill /> Carrinho </button>
            <button className={`sideBarButton ${props.option3}`} onClick={pedidos}> <RiShoppingBag3Fill /> Pedidos </button>
            {localStorage.getItem("username").endsWith("admin") ? <button className={`sideBarButton ${props.option4}`} onClick={admin}> <FaCog /> Admin </button> : <></>}
        </div>
    )
}

export default SideBar;