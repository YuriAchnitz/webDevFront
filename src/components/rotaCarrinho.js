import SideBar from './SideBar';
import TitleBar from './TitleBar';
import Cart from '../pages/Cart';

function routeCart() {
  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Cart />
      </div>
    </div>
  );
}

export default routeCart;