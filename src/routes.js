import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteCardapio from './pages/rotaCardapio';
import RouteCart from './pages/rotaCarrinho';
import RouteOrders from './pages/rotaPedidos';
import RouteLogin from './pages/rotaLogin';
import RouteAdmin from './pages/rotaAdmin';

function RoutesApp(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RouteLogin/> } />
        <Route path="/cardapio" element= {<RouteCardapio/>} />
        <Route path="/cart" element={ <RouteCart/> } />
        <Route path="/orders" element={ <RouteOrders/> } />
        <Route path="/admin" element={ <RouteAdmin/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;