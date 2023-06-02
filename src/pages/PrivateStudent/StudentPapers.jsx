import {Container, Table} from 'react-bootstrap';
import "../pages.scss"

const papers = [
    {
        course: 'Курс по гуглению',
        completion_date: '25.04.2023',
        grade: 5,
        doc_link: 'https://google.com'
    },
    {
        course: 'Курс по написанию диплома',
        completion_date: '25.04.2023',
        grade: 4,
        doc_link: 'https://google.com'
    },
    {
        course: 'Курс по чистописанию',
        completion_date: '25.04.2023',
        grade: 5,
        doc_link: 'https://google.com'
    },
    {
        course: 'Курс по по китайским иероглифам',
        completion_date: '25.04.2023',
        grade: 4,
        doc_link: 'https://google.com'
    }
]

const StudentPapers = () => {
    return (
        <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
            <div className='student-decorator__title'>
                Сертификаты
            </div>
            <div className='student-decorator__mainpage'>
                <Table>
                    <thead>
                        <th>Курс</th>
                        <th>Оценка</th>
                        <th>Дата окончания</th>
                        <th>Ссылка на документ</th>
                    </thead>
                    <tbody className="person-table">
                        {
                            papers.map((paper)=>
                                <>
                                    <tr className="person-table__stripped">
                                        <td>{paper.course}</td>
                                        <td>{paper.grade}</td>
                                        <td>{paper.completion_date}</td>
                                        <td><a target="_blank" rel="noreferrer" className="person-table__link" href={paper.doc_link}>Скачать сертификат</a></td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default StudentPapers