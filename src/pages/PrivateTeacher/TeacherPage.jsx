import {Container} from 'react-bootstrap';
import "../pages.scss"

const TeacherPage = () => {
        return (
            <Container fluid className='student-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
                <div className='student-decorator__title'>
                    Личный кабинет
                </div>
                <div className='student-decorator__mainpage'>
                    <div className='student-decorator__mainpage__title'>
                        Добро пожаловать!
                    </div>
                    <div className='student-decorator__mainpage__text'>
                       Личный кабинет это пространство, в котором вы можете управлять своим обучением и настройками подписки. 
                       <br/>
                       В личном кабинете будут храниться все ваши результаты, также через него вы сможете получить доступ к контенту курсов,
                       в том числе уже пройденных.
                       <br/>
                       Если вы хотите записаться на курс, просто вернитесь на главную страницу и выберите понравившееся предложение.
                    </div>
                </div>
            </Container>
        )
    }
export default TeacherPage;