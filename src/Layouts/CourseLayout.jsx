import {Outlet} from "react-router-dom";
import {useRef, useLayoutEffect, useState} from "react";
import CourseSidebar from "../components/navigation/Course/Sidebar/index"
import CourseNavbar from "../components/navigation/Course/Navbar/index"
import Navbar from "../components/navigation/Navbar/Navbar";
import "./layout.scss"

const CourseLayout = () => {

    const PageHeight = useRef(null);
    const [SidebarHeight, setSidebarHeight] = useState(0);
    
    useLayoutEffect(() => {
        setSidebarHeight(PageHeight.current.offsetHeight);
    }, []);

    return (
        <div className="course-container" ref={PageHeight}>
            <CourseNavbar/>
            <CourseSidebar style={{height:SidebarHeight}}/>
            <div className='course-container__main-content'>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default CourseLayout;