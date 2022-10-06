
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home';
import CreateAccount from './Pages/Login/Login/CreateAccount';
import Login from './Pages/Login/Login/Login';
import SpareParts from './Pages/SpareParts/SpareParts';

function App() {
  return (
    <div className='bg-gray-300'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/spareParts' element={<SpareParts></SpareParts>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
