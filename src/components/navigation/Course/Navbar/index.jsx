import "./CourseNavbar.scss"
import {fetchWrapper } from '../../../../_helpers';
import {useState, useLayoutEffect} from 'react';
import {useParams} from 'react-router-dom';

const CourseNavbar = () => {

    let {courseId} = useParams();
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });
    const [course, setCourse] = useState();

    useLayoutEffect(() => {
        fetchWrapper.post(`${process.env.REACT_APP_API_URL}/getCourseById`, {body: JSON.stringify(Number(courseId))}).then((response) => {
            const changedData = response.map(elem => ({id: elem.id,
                src: elem.src,
                name: elem.text, 
                data: elem.data, 
                url: `courses/${elem.id}`}))
            setCourse(changedData[0])
            setAppState({ loading: false, repos: "ok"});
        });
    }, [setAppState])

    return (
        <div className='course__def-background'>
            <div className='course__sub-header'>
                <div className='course__sub-header__box'>
                    <h1 className='course__sub-header__title'>{course !== undefined ? course.name : " "}</h1>
                    <p className='course__sub-header__description'>{course !== undefined ? course.data : " "}</p>
                </div>
            </div>
        </div>
    );
}
export default CourseNavbar;