import logo from './logo.svg';
import './App.css';
import {orginals,actions} from './urls'
import Navbar from './Components/navBar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowposter from './Components/Posters/Rowposter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowposter urls={orginals} title='Netflix Orginals'/>
      <Rowposter urls={actions} title='Action' isSmall/>

    </div>
  );
}

export default App;
