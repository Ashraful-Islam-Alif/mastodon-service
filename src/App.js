
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home';
import CreateAccount from './Pages/Login/Login/CreateAccount';
import Login from './Pages/Login/Login/Login';
import SpareParts from './Pages/SpareParts/SpareParts';
import BuyCar from './Pages/BuyCar/BuyCar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './Pages/Login/Login/Loading';
import PageNotFound from './Pages/NotFound/PageNotFound';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {
        loading ? (<Loading></Loading>)
          :
          (<div className='bg-gray-300'>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
              <Route path='/spareParts' element={<SpareParts></SpareParts>}></Route>
              <Route path='/buyCar' element={<BuyCar></BuyCar>}></Route>
              <Route path='/service' element={<Services></Services>}></Route>
              <Route path='/blog' element={<Blogs></Blogs>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<CreateAccount></CreateAccount>}></Route>
              <Route path='*' elements={<PageNotFound />}></Route>
            </Routes>
          </div>)
      }

    </>
  );
}

export default App;
