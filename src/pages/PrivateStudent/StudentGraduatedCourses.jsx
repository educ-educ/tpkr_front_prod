import { Container } from 'react-bootstrap';
import "../pages.scss"

const courses = [
    {
        course: 'Курс по гуглению',
        grade: 5,
    },
    {
        course: 'Курс по написанию диплома',
        grade: 4,
    },
    {
        course: 'Курс по чистописанию',
        grade: 5,
    },
    {
        course: 'Курс по китайским иероглифам',
        grade: 4,
    }
]


const StudentGraduatedCourses = () => {

    return (
        <Container fluid className='student-decorator' style={{ height: window.innerHeight - 60 + 'px' }}>
            <div className='student-decorator__title'>
                Законченные курсы
            </div>
            <div className='student-decorator__mainpage'>
                {
                    courses.map(course =>
                        <div className={'student-decorator__mainpage__card'}>
                            <div>
                                <img src={'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'} style={{ width: '200px', height: '150px', padding: '20px' }} />
                            </div>
                            <div className='student-decorator__mainpage__card__title'>
                                {course.course}
                            </div>
                            <div className="student-decorator__mainpage__card__progress-bar">
                                Ваша оценка: {course.grade}

                            </div>
                        </div>
                    )
                }
            </div>
            
        </Container>
        
    )
}
export default StudentGraduatedCourses;