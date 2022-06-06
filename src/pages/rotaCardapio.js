import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Cardapio from '../components/Cardapio/Cardapio';

function routeCardapio() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option1={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Cardapio />
      </div>
    </div>
  );
}

export default routeCardapio;