import * as React from 'react'
import {Route, Routes, Navigate, useNavigate, useLocation, Outlet} from 'react-router-dom';
import {useState, useLayoutEffect} from "react";
import {history} from './_helpers';
import {useSelector} from 'react-redux';
import {Login} from './_login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import MainPage from './pages/MainPage';
import PrivateLayout from './Layouts/PrivateLayout';
import PersonPage from './pages/PersonPage';
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar/Navbar'
import Title1 from './components/title1/Title1';

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  const [appState, setAppState] = useState({
       loading: false,
       repos: null,
  });

  function PrivateOutlet() {
    const authUser = useSelector(x => x.auth.user);
    return authUser ? <Outlet/> : <Navigate to="/"/>;
  }

  return (
    
    {/*<div className="App">
        <Navbar/>
        <Title1/>
        <Footer/>
    </div> */}
    
    <Routes>
        {/* <Route exact path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
        </Route>  */}
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/admin" element = {<PrivateOutlet/>}>
          <Route path="home" element={<PrivateLayout/>}>
            <Route index element={<PersonPage/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );

}

export default App;
