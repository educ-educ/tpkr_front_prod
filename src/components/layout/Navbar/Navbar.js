import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const authUser = useSelector(x => x.auth.user);
    const userBase = (authUser==null) ? (
        <>
            <Link to='/auth' className='nav-item px-2'>
                <div className="btn btn-green" aria-current="page">Регистрация</div>
            </Link>
            <Link to='/auth' className='nav-item px-2'>
                <div className="btn btn-green" aria-current="page">Войти</div>
            </Link>
        </>
    ) : (
        <>
            <Link to='/admin/home' className='nav-item px-2'>
                <div className="btn btn-green">
                    <FontAwesomeIcon icon={faUser}/>  
                </div>
            </Link>
        </>
    )
    return (
            <nav className="navbar navbar-expand navbar-light bg-green">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#0">
                        Navbar
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-flex flex-row-reverse gap-2'>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav d-flex flex-row-reverse">
                                {userBase}
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