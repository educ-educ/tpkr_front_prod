import {Container} from 'react-bootstrap';
import "../pages.scss"

const StudentCurrentCourses = () => {
        return (
            <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
                <div className='student-decorator__title'>
                    Текущие курсы
                </div>
                <div className='student-decorator__mainpage'>
                    
                </div>
            </Container>
        )
    }
export default StudentCurrentCourses;