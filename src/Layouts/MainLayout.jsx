import {Outlet} from "react-router-dom"
import Footer from '../components/navigation/Footer/Footer'
import Navbar from '../components/navigation/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;