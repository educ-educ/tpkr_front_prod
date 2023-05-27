import {Container} from 'react-bootstrap';
import "./pages.scss"

const PersonPage = () => {
        return (
            <Container fluid className='person-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
                <div className='person-decorator__title'>
                    Личный кабинет
                </div>
                <div className='person-decorator__mainpage'>
                    <div className='person-decorator__mainpage__title'>
                        Добро пожаловать!
                    </div>
                    <div className='person-decorator__mainpage__text'>
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
export default PersonPage;