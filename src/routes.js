import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteCardapio from './components/rotaCardapio';
import RouteCart from './components/rotaCarrinho';
import RouteOrders from './components/rotaPedidos';
import RouteLogin from './components/rotaLogin';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RouteLogin/> } />
        <Route path="/cardapio" element= {<RouteCardapio />} />
        <Route path="/cart" element={ <RouteCart/> } />
        <Route path="/orders" element={ <RouteOrders/> } />
        
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;