import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';
import Options from './components/Options';
import Body from './components/Body';
import Creditos from './components/Creditos';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      {/* <MyComponent/> */}

      <NavBar/>
      <MenuBar/>
      <Options/>
      <Body name={'Echeveria'} price={7.99}/>
      <Creditos/>
      <Footer/>
    </div>
  );
}

export default App;
