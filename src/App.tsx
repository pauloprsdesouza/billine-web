import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import OrderPage from './pages/Order/OrderPage';
import NavbarComponent from './components/Templates/Navbar/NavbarComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path="/"  >
            <Route path='' element={<LoginPage />} ></Route>
            <Route path='Home' element={<HomePage />}></Route>
            <Route path='Orders' element={<OrderPage />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
