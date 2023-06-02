import { Container, Card, ProgressBar } from 'react-bootstrap';
import "../pages.scss"

const grades = [
    {
        course_name: "Опознание фруктов и овощей",
        status: "Завершено",
        sections: [
            {
                name: "Опознание овощей",
                items: [
                    {
                        grade: 3.5,
                        max_grade: 5.0,
                        task: 'Тест по опознанию огурцов',
                        datetime: "14.05.2023 15:43" 
                    },
                    {
                        task: 'Тест по опознанию помидоров',
                        grade: 2.5,
                        max_grade: 5.0,
                        datetime: "14.05.2023 15:43" 
                    },
                    {
                        task: 'Тест по опознанию огурцов',
                        grade: 5.0,
                        max_grade: 10.0,
                        datetime: "14.05.2023 15:43" 
                    }
                ]
            },
            {
                name: "Опознание фруктов",
                items: [
                    {
                        task: 'Тест по опознанию яблок',
                        grade: 3.5,
                        max_grade: 5.0,
                        datetime: "14.05.2023 15:43" 
                    },
                    {
                        task: 'Тест по опознанию ананасов',
                        grade: 2.2,
                        max_grade: 3.0,
                        datetime: "14.05.2023 15:43" 
                    },
                    {
                        task: 'Тест по опознанию груш',
                        grade: 5.0,
                        max_grade: 10.0,
                        datetime: "14.05.2023 15:43" 
                    }
                ]
            }
        ]
    },
    {
        course_name: "Курс по JS",
        status: "В процессе",
        sections: [
            {
                name: "Методы массивов",
                items: [
                    {
                        task: 'Тест по map',
                        grade: 0,
                        max_grade: 5.0,
                        datetime: "14.05.2023 15:43" 
                    },
                    {
                        task: 'Тест по reduce',
                        grade: 5.0,
                        max_grade: 15.0,
                        datetime: "14.05.2023 15:43" 
                    }
                ]
            }
        ]
    }
]

const StudentCurrentCourses = () => {

    const getCourceGrade = (cource) => cource.sections.reduce((acc,section)=> acc+section.items.reduce((acc,item)=>acc+item.grade,0),0)
    const getCourceMaxGrade = (cource) => cource.sections.reduce((acc,section)=> acc+section.items.reduce((acc,item)=>acc+item.max_grade,0),0)

    return (
        <Container fluid className='student-decorator' style={{ height: window.innerHeight - 60 + 'px' }}>
            <div className='student-decorator__title'>
                Текущие курсы
            </div>
            <div className='student-decorator__mainpage'>
            {
                grades.map(course => 
                    <div className={'student-decorator__mainpage__card'}>
                        <div>
                            <img src={'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'} style={{ width: '200px', height: '150px', padding: '20px' }} />
                        </div>
                        <div className='student-decorator__mainpage__card__title'>
                            {course.course_name}
                        </div>
                        <div className="student-decorator__mainpage__card__progress-bar">
                            Ваши баллы
                            <ProgressBar now={getCourceGrade(course)} label={getCourceGrade(course)} min={0} max={getCourceMaxGrade(course)} variant='success'/>
                        </div>
                    </div>
                )
            }   
            </div>
        </Container>
    )
}
export default StudentCurrentCourses;