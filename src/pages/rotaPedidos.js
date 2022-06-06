import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Orders from '../components/Pedidos/Orders';

function routeOrders() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option3={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Orders />
      </div>
    </div>
  );
}

export default routeOrders;