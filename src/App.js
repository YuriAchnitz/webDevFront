import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex-row">
      <div>
        <SideBar />
      </div>

      <div className='flex-column'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
