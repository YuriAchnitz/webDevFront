import SideBar from './SideBar';
import TitleBar from './TitleBar';
import Cardapio from '../pages/Cardapio';

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