import { Container } from "react-bootstrap"
import "../pages.scss"

const PapersPage = () => {
    return (
        <Container fluid className='person-decorator' style={{height: window.innerHeight - 60 + 'px'}}>
            <div className='person-decorator__title'>
                Сертификаты
            </div>
            <div className='person-decorator__mainpage'>
            </div>
        </Container>
    )
}

export default PapersPage