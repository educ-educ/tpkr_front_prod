import './Footer.css'

export default function Footer() {
    return (
        <div className='container-fluid bg-green'>
            <footer className='nav justify-content-center border-top pb-3 mb-3'>
                <div className='footer-info'>
                    <div className='footer-info-title'>Контакты</div>
                    <div className='footer-text'>Почта: tve12@tpu.ru</div>
                    <div className='footer-text'>Телефон: 88003565535</div>
                </div>
            </footer>
        </div>
    );
}