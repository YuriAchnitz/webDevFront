import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Cart from '../components/Carrinho/Cart';

function routeCart() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option2={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Cart />
      </div>
    </div>
  );
}

export default routeCart;