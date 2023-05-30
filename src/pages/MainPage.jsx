import {Container} from "react-bootstrap";
import CarouselCountContent from "../components/Carousel/CarouselCountContent/index"
import {fetchWrapper } from '../_helpers';
import "./pages.scss"
import {useRef, useLayoutEffect, useState} from "react";

const MainPage = () => {

    const itemWidth = useRef(null);
    const pageWidth = useRef(null);
    const [widthItem, setWidthItem] = useState(0);
    const [width, setWidth] = useState(0);

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });
    const [courses, setCourses] = useState([])

    useLayoutEffect(() => {
        fetchWrapper.post(`${process.env.REACT_APP_API_URL}/getCourses`).then((response) => {
            console.log(response)
            const changedData = response
            setCourses(changedData)
        });
        setAppState({ loading: false, repos: "ok"});
    }, [setAppState])

    useLayoutEffect(() => {
        setWidth(pageWidth.current.offsetWidth);
        setWidthItem(itemWidth.current.offsetWidth);
    }, []);

    return (
        <div className = "main" ref={pageWidth}>
            <Container fluid className='main__wrapper' style={{height: window.innerHeight - 10 +'px'}}>
                    <div className='main__box'>
                        Ученье свет, 
                        а неученье — тьма.
                    </div>
            </Container>
            <div className="main__line"/>
              <Container fluid className='main__carousel-content' id={'info'}>
                <div className='main__carousel-content__decorator'>
                    <Container className='main__carousel-content__block-title'>
                        <p>Доступные курсы</p>
                    </Container>
                    <div className='main__carousel-content__carousel-decorator' ref={itemWidth}>
                        <CarouselCountContent articles={courses} width={width} widthItem={widthItem}/>
                    </div>
                </div>
            </Container >
        </div>
    )
}

export default MainPage;