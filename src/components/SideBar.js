import { FaArrowLeft } from "react-icons/fa";
import ProfileBox from "./ProfileBox";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiShoppingBag3Fill } from "react-icons/ri";

function SideBar() {
    return (
        <div className="sideBarCcontainer">
            <button className="returnButton" onClick="pass"> <FaArrowLeft /> </button>
            <ProfileBox />
            <button className="sideBarButton" onClick="pass"> <MdOutlineMenuBook /> <a href="">Cardápio</a> </button>
            <button className="sideBarButton" onClick="pass"> <RiShoppingCart2Fill /> <a href="">Carrinho</a> </button>
            <button className="sideBarButton" onClick="pass"> <RiShoppingBag3Fill /> <a href="">Pedidos</a> </button>
        </div>
    )
}

export default SideBar;