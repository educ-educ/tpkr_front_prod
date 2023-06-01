import "./pages.scss"
import Table from "react-bootstrap/Table"
import { Container } from "react-bootstrap"
import {AiFillFolderOpen} from 'react-icons/ai'

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

const GradesPage = () => {
    const getCourceRowCount = (cource) => cource.sections.reduce((acc,section)=> acc+section.items.length,0)+cource.sections.length;
    const getCourceGrade = (cource) => cource.sections.reduce((acc,section)=> acc+section.items.reduce((acc,item)=>acc+item.grade,0),0)
    const getCourceMaxGrade = (cource) => cource.sections.reduce((acc,section)=> acc+section.items.reduce((acc,item)=>acc+item.max_grade,0),0)
    // const [isActive, setIsActive] = useState(Array.from({length:grades.length}, ()=> false))
    // console.log(getCourceRowCount(grades[0]));
    // console.log(isActive)
    return (
        <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
            <div className='student-decorator__title'>
                Оценки
            </div>
            <div className='student-decorator__mainpage'>
                <Table>
                    <thead>
                        <th colSpan="3" id="itemname">Название</th>
                        <th id='status'>Статус</th>
                        <th id="grade">Оценка</th>
                        <th id="grade_diap">Диапазон</th>
                        <th id="grade_percents">Процент</th>
                    </thead>
                    <tbody className="person-table">
                        {
                            grades.map((cource) => 
                                <>
                                    <tr className="person-table__layer1">
                                        <td className="person-table__name" colSpan="3"><AiFillFolderOpen/> {cource.course_name}</td>
                                        <td>{cource.status}</td>
                                        <td>{getCourceGrade(cource)}</td>
                                        <td>{getCourceMaxGrade(cource)}</td>
                                        <td>{((getCourceGrade(cource) / getCourceMaxGrade(cource))*100).toFixed(0)}%</td>
                                    </tr>
                                    {
                                    cource.sections.map((section, sectionIndex)=>
                                        <>
                                            <tr>
                                                {(sectionIndex===0) &&
                                                     <td className="person-table__layer1 person-table__offset" rowSpan={getCourceRowCount(cource)}></td>
                                                }
                                                <td className="person-table__layer2 person-table__name" colSpan="100"><AiFillFolderOpen/> {section.name}</td>
                                            </tr>
                                            {
                                            section.items.map((item, itemIndex)=> 
                                                <>
                                                    <tr className="person-table__layer3">
                                                        {(itemIndex===0) &&
                                                            <td className="person-table__layer2 person-table__offset" rowSpan={section.items.length}></td>
                                                        }
                                                        <td className="person-table__line" colSpan="2">{item.task}</td>
                                                        <td className="person-table__line">{item.grade}</td>
                                                        <td className="person-table__line">0-{item.max_grade}</td>
                                                        <td className="person-table__line">{((item.grade / item.max_grade)*100).toFixed(0)}%</td>
                                                    </tr>
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default GradesPage