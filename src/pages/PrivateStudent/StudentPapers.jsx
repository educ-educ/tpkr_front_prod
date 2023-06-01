import {Container} from 'react-bootstrap';
import "../pages.scss"

const StudentPapers = () => {
        return (
            <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
                <div className='student-decorator__title'>
                    Сертификаты
                </div>
                <div className='student-decorator__mainpage'>
                   
                </div>
            </Container>
        )
    }
export default StudentPapers;