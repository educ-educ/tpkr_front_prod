import * as React from 'react'
import {Route, Routes, Navigate, useNavigate, useLocation, Outlet} from 'react-router-dom';
import {useState} from "react";
import {history} from './_helpers';
import {useSelector} from 'react-redux';
import {Login} from './_login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import MainPage from './pages/MainPage';
import PrivateLayout from './Layouts/PrivateLayout';
// import PersonPage from './pages/PersonPage';
import GradesPage from './pages/GradesPage';
import PapersPage from './pages/PapersPage';
import StudentPage from './pages/StudentPage';
import CourseLayout from "../src/Layouts/CourseLayout"
import CoursePage from "../src/pages/CoursePage"

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  const [appState, setAppState] = useState({
       loading: false,
       repos: null,
  });

  function PrivateOutlet() {
    const authUser = useSelector(x => x.auth.user);
    return authUser ? <Navigate to={`/admin/${authUser.role}`}/> : <Navigate to="/"/>;
  }

  function useCheckLogin() {
    const authUser = useSelector(x => x.auth.user);
    console.log(authUser)
    return authUser ? <Navigate to={`/${authUser.role}`}/> : <Navigate to="/"/>;
  }

  return (
    <Routes>
        <Route exact path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route exact path="courses/" element={<CourseLayout/>}/>
          <Route exact path="courses/:courseId" element={<CoursePage/>}/>
        </Route> 
        <Route exact path="/auth" element={<Login/>} onEnter={useCheckLogin}/>
        <Route exact path="/student" element={<PrivateLayout/>}>
          <Route index element={<StudentPage/>}/>
          <Route path='papers' element={<PapersPage/>}/>
          <Route path='grades' element={<GradesPage/>}/>
        </Route>
        <Route exact path="/teacher" element={<PrivateLayout/>}>
          <Route index element={<StudentPage/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );

}

export default App;
