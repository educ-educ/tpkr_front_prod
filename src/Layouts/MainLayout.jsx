import {Outlet} from "react-router-dom"
import {useState} from "react";
import Footer from '../components/navigation/Footer/Footer'
import Navbar from '../components/navigation/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;