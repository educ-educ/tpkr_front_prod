import {Outlet} from "react-router-dom";
import {useRef, useLayoutEffect, useState} from "react";
import TeacherSidebar from "../components/navigation/private/Sidebar/teacher"
import PrivateNavbar from '../components/navigation/private/Navbar/index'
import "./layout.scss"

const PrivateLayout = () => {

    const PageHeight = useRef(null);
    const [SidebarHeight, setSidebarHeight] = useState(0);
    
    useLayoutEffect(() => {
        setSidebarHeight(PageHeight.current.offsetHeight);
    }, []);

    return (
        <div className="person-container" ref={PageHeight}>
            <TeacherSidebar style={{height:SidebarHeight}}/>
            <div className='person-container__main-content'>
                <PrivateNavbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default PrivateLayout;