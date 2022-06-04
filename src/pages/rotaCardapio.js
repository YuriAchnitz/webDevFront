import SideBar from '../components/SideBar';
import TitleBar from '../components/TitleBar';
import Cardapio from '../components/Cardapio/Cardapio';

function routeCardapio() {
  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Cardapio />
      </div>
    </div>
  );
}

export default routeCardapio;