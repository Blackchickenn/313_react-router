
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import OldProducts from './components/OldProducts';
import Users from './components/Users';
import DetailUser from './components/DetailUser';
import Profile from './components/Profile';



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order' element={<Order />}></Route>
        <Route path='products' element={<Products />}>
          <Route index element={<NewProducts />}></Route>
          <Route path='old' element={<OldProducts/>}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}></Route>
        <Route path='users/:userID' element={<DetailUser />}></Route>
        <Route path='profile' element={<Profile /> }></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>    
    </>
  );
}

