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
import PrivateTeacherLayout from "../src/Layouts/PrivateTeacherLayout"
import TeacherPage from "./pages/PrivateTeacher/TeacherPage"
import TeacherCourses from "./pages/PrivateTeacher/TeacherCourses"
import TeacherRawCourses from "./pages/PrivateTeacher/TeacherRawCourses"
import TeacherSubscription from "./pages/PrivateTeacher/TeacherSubscription"
import StudentCurrentCourses from './pages/PrivateStudent/StudentCurrentCourses';
import StudentGraduatedCourses from './pages/PrivateStudent/StudentGraduatedCourses';
import StudentGrades from './pages/PrivateStudent/StudentGrades';
import StudentPapers from './pages/PrivateStudent/StudentPapers';
import StudentSubscription from "./pages/PrivateStudent/StudentSubscription"


function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  const [appState, setAppState] = useState({
       loading: false,
       repos: null,
  });

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
          <Route exact path="current_courses" element={<StudentCurrentCourses/>}/>
          <Route exact path="ended_courses" element={<StudentGraduatedCourses/>}/>
          <Route exact path="papers" element={<StudentPapers/>}/>
          <Route exact path="grades" element={<StudentGrades/>}/>
          <Route exact path="subscription" element={<StudentSubscription/>}/>
        </Route>
        <Route exact path="/teacher" element={<PrivateTeacherLayout/>}>
          <Route index element={<TeacherPage/>}/>
          <Route exact path="current_courses" element={<TeacherCourses/>}/>
          <Route exact path="ended_courses" element={<TeacherRawCourses/>}/>
          <Route exact path="subscription" element={<TeacherSubscription/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;
