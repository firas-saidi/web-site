import './App.css';
import Footer from './sections/Footer/Footer';
import Mainpage from './sections/Mainpage/Mainpage';
import Topnav from './sections/Topnav/Topnav';
import Header from './sections/Header/Header ';
import {HashRouter  as Router,Route,Routes} from 'react-router-dom'
import About from './componments/Pages/About/About';
import Shop from './componments/Pages/Shop/Shop';
import Singleshop from './componments/Pages/SingleShop/SingleShop';
import Contact from './componments/Pages/Contact/Contact';


function App() {
  return (
    <>
    <Router >
    <Topnav/>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Mainpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/single-shop' element={<Singleshop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    <Footer/>  
    </Router> 
    </>
  );
}

export default App;
