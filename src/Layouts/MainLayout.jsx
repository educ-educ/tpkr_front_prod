import {Outlet} from "react-router-dom"
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'

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