import {Outlet} from "react-router-dom"

const MainLayout = () => {
   
    return (
        <div>
            <div className="header"/>
            <div>
                <Outlet/>
            </div>
            <div className="footer"/>
        </div>
    )
}

export default MainLayout;