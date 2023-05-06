import './Navbar.css'

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand navbar-light bg-green">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        Navbar
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-flex flex-row-reverse gap-2'>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav d-flex flex-row-reverse">
                                <div className='nav-item px-2'>
                                    <a className="btn btn-green" aria-current="page" href="./">Регистрация</a>
                                </div>
                                <div className='nav-item px-2'>
                                    <a className="btn btn-green" aria-current="page" href="#0">Войти</a>
                                </div>
                                <div className='nav-item px-2 dropdown'>
                                    <a className="btn btn-green dropdown-toggle" href="#0" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Язык
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                        <li><a className="dropdown-item" href="#0">Русский</a></li>
                                        <li><a className="dropdown-item" href="#0">English</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    );
}