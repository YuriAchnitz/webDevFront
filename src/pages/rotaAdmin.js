import SideBar from '../components/SideBar';
import TitleBar from '../components/TitleBar';
import Admin from '../components/Admin/Admin';

function RouteAdmin() {
  
  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Admin />
      </div>
    </div>
  );
}

export default RouteAdmin;