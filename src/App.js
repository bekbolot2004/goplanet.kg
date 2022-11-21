import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Work from './pages/Work';
import AboutUs from './pages/AboutUs';
import Avia from './pages/Avia';
import Education from './pages/Education';
import Insurance from './pages/Insurance';
import Services from './pages/Services';
import Travel from './pages/Travel';
import TourAsia from './pages/TourAsia';
import VisaTour from './pages/VisaTour';
import VisaWork from './pages/VisaWork';
import Blog from './pages/Blog';
import Umra from './pages/Umra';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/avia' element={<Avia/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/insurance' element={<Insurance/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/tourasia' element={<TourAsia/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/umra' element={<Umra/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/visatour' element={<VisaTour/>}/>
        <Route path='/visawork' element={<VisaWork/>}/>
        <Route path='/work' element={<Work/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
