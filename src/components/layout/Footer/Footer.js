import './Footer.css'

export default function Footer() {
    return (
        <div className='container-fluid bg-green'>
            {/* <footer className='py-3'>
                <div className='row justify-content-center'>
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Наша команда</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2 footer-text">Егор</li>
                        <li class="nav-item mb-2 footer-text">Василий</li>
                        <li class="nav-item mb-2 footer-text">Алина</li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Телефон</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2 footer-text">88003773754</li>
                        <li class="nav-item mb-2 footer-text">88003773754</li>
                        <li class="nav-item mb-2 footer-text">88003773754</li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Почта</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2 footer-text">abc@tpu.ru</li>
                        <li class="nav-item mb-2 footer-text">abc@tpu.ru</li>
                        <li class="nav-item mb-2 footer-text">abc@tpu.ru</li>
                        </ul>
                    </div>
                </div>
                <div className='row justify-content-start border-secondary border-top'>
                    <p>© 2022 Climov & co, Inc. All rights reserved.</p>
                </div>
            </footer> */}
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