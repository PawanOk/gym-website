import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Programs from './pages/Programs';
import Trainerspage from './pages/Trainerspage';
function App() {

  

  return (
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='pricing' element={<Pricing/>}/>
      <Route path='programs' element={<Programs/>}/>
      <Route path='Trainerspage' element={<Trainerspage/>}></Route>
    </Routes>
      <Footer/>
  </BrowserRouter>
    
      
    
  );
}
export default App;
