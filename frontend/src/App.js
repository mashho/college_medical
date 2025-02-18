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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
