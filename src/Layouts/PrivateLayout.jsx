import {Outlet} from "react-router-dom";
import {useRef, useLayoutEffect, useState} from "react";
import UserSidebar from "../components/navigation/private/Sidebar/index"
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
            <UserSidebar style={{height:SidebarHeight}}/>
            <div className='person-container__main-content'>
                <PrivateNavbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default PrivateLayout;