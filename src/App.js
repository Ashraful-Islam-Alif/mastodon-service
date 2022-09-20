
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home';
import CreateAccount from './Pages/Login/Login/CreateAccount';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
