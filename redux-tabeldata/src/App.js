
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './component/Header';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';

function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addUser' element={<AddEditUser/>}/>
      <Route path='/editUser/:id' element={<AddEditUser/>}/>
      <Route path='/userInfo/:id' element={<UserInfo/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
