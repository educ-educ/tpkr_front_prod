import {Container} from 'react-bootstrap';
import "../pages.scss"

const StudentGraduatedCourses = () => {
        return (
            <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
                <div className='student-decorator__title'>
                    Законченные курсы
                </div>
                <div className='student-decorator__mainpage'>
                    
                </div>
            </Container>
        )
    }
export default StudentGraduatedCourses;