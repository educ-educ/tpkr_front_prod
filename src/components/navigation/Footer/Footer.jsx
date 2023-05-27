import './Footer.scss'
import {Container} from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className='footer '>
                <div className='footer-info'>
                    <div className='footer-info-title'>Контакты</div>
                    <div className='footer-text'>Почта: tve12@tpu.ru</div>
                    <div className='footer-text'>Телефон: 88003565535</div>
                </div>
        </Container>
    );
}