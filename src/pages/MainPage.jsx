
import {Container} from "react-bootstrap";
import "./pages.scss"
import {useRef, useLayoutEffect, useState} from "react";
import {useOutletContext } from "react-router-dom";

const MainPage = () => {

    const [width, setWidth] = useState(0);
    const pageWidth = useRef(null);
    const bannerHeight = useOutletContext();

    useLayoutEffect(() => {
        setWidth(pageWidth.current.offsetWidth);
        console.log(bannerHeight)
        // setWidthItem(itemWidth.current.offsetWidth);
    }, []);

    return (
        <div className = "main" ref={pageWidth}>
            <Container fluid className='main__wrapper' style={{height: window.innerHeight-bannerHeight+60+ 'px'}}>
                    <div className='main__box'>
                        Ученье свет, а неученье — тьма.
                    </div>
            </Container>
            <div className="main__line"/>
        </div>
    )
}

export default MainPage;