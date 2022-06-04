import SideBar from './SideBar';
import TitleBar from './TitleBar';
import Orders from '../pages/Orders';

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