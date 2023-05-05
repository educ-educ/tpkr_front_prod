import {Outlet} from "react-router-dom"

const PrivateLayout = () => {
   
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

export default PrivateLayout;