import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/Home/home';
import {Route,Routes,Redirect} from 'react-router-dom'
import Login from './pages/Login/login';
import Stock from './pages/Stock/stock';
import AdminDashboard from './pages/AdminPages/AdminHome/adminDashboard';
import RegisterStudent from './pages/AdminPages/RegisterStudent/registerStudent';
import ManageMedicine from './pages/AdminPages/ManageMedicine/manageMedicine';
import Record from './pages/AdminPages/Records/record';
import AdminFacilitiy from './pages/AdminPages/Facilities/adminFacilitiy';
import NearByHospitalsManage from './pages/AdminPages/NearByHospitals/nearByHospitalsManage';
import GallaryAdmin from './pages/AdminPages/Gallary/gallaryAdmin';
import StudentDashboard from './pages/StudentPages/StudentDashboard/studentDashboard';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/stock' element={<Stock />} />

        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/register-student' element={<RegisterStudent />} />
        <Route path='/admin/manage-medicine' element={<ManageMedicine />} />
        <Route path='/admin/records' element={<Record />} />
        <Route path='/admin/faciltity' element={<AdminFacilitiy />} />
        <Route path='/admin/hospitals' element={<NearByHospitalsManage />} />
        <Route path='/admin/gallary' element={<GallaryAdmin />} />

        <Route path='/student/:id' element={<StudentDashboard />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
