import SideBar from '../components/SideBar';
import TitleBar from '../components/TitleBar';
import Orders from '../components/Pedidos/Orders';

function routeOrders() {
  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Orders />
      </div>
    </div>
  );
}

export default routeOrders;