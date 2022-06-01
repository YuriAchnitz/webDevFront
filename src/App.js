import './App.css';
import SideBar from './components/SideBar';
import TitleBar from './components/TitleBar';
import Cardapio from './pages/Cardapio';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {
  let currentPage = <Orders />

  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Cardapio />
        <Cart />
        {currentPage}
      </div>
    </div>
  );
}

export default App;
