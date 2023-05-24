import {Outlet} from "react-router-dom"
import {useState} from "react";
import Footer from '../components/navigation/Footer/Footer'
import Navbar from '../components/navigation/Navbar/Navbar'

const MainLayout = () => {
   
    const [navigationHeight, setNavigationHeight] = useState(0);

    const passNavigationHeight = (value) => {
        setNavigationHeight(value);
        console.log(value)
    }

    return (
        <div>
            <Navbar passNavigationHeight={passNavigationHeight}/>
            <div>
                <Outlet context={navigationHeight}/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;