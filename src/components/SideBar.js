import { FaArrowLeft } from "react-icons/fa";
import ProfileBox from "./ProfileBox";

function SideBar() {
    return (
        <div className="sideBarCcontainer">
            <button className="returnButton" onClick="pass"> <FaArrowLeft/> </button>
            <ProfileBox/>
            <button className="sideBarButton" onClick="pass"> Cardápio </button>
            <button className="sideBarButton" onClick="pass"> Carrinho </button>
            <button className="sideBarButton" onClick="pass"> Pedidos </button>
        </div>
    )
}

export default SideBar;