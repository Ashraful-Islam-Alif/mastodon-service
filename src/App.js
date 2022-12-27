
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
import { ToastContainer } from 'react-toastify';
import Test from './Pages/Test';
import RequireAuth from './Pages/Login/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard'
import { useEffect, useState } from 'react';
import DetailingOrder from './Pages/Dashboard/DetailingOrder';
import SparePartsOrder from './Pages/Dashboard/SparePartsOrder';
import MechanicsOrder from './Pages/Dashboard/MechanicsOrder';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, [1000])
  }, [])
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
              <Route path='/test' element={<Test></Test>}></Route>
              <Route path='/service' element={<Services></Services>}></Route>
              <Route path='/blog' element={<Blogs></Blogs>}></Route>
              <Route path="dashboard" element={
                <RequireAuth>
                  <Dashboard></Dashboard>
                </RequireAuth>
              } >
                <Route index element={<DetailingOrder />}></Route>
                <Route path='sparePartsOrderList' element={<SparePartsOrder />}></Route>
                <Route path='mechanicsOrderList' element={<MechanicsOrder />}></Route>
                <Route path='users' element={
                  <RequireAdmin>
                    <AllUsers />
                  </RequireAdmin>
                }></Route>
              </Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<CreateAccount></CreateAccount>}></Route>
              <Route path='*' elements={<PageNotFound />}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
          </div>)
      }

    </>
  );
}

export default App;
