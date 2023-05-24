import {Container} from 'react-bootstrap';
import {useRef, useEffect, useState, useLayoutEffect} from "react";
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdLanguage} from 'react-icons/md';
import {HashLink } from 'react-router-hash-link';
import {fetchWrapper } from '../../../_helpers';
import './Navbar.scss'

export default function Navbar({passNavigationHeight}) {

    const topElement = useRef(null);
    const [displayArray, setDisplayArray] = useState({dropdawnDisplay: 'none', menuDisplay: 'block'})
    const [opaque, setOpaque] = useState({opacity: 1});
    const [menuContent, setMenuContent] = useState([])
    const [isShown, setIsShown] = useState(true);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });

    useLayoutEffect(() => {
        fetchWrapper.post(`${process.env.REACT_APP_API_URL}/getMenuPoints`).then((response) => {
            console.log(response)
            const changedData = response
            setMenuContent(changedData)
        });
        setAppState({ loading: false, repos: "ok"});
    }, [setAppState])

    useEffect(() => {
        passNavigationHeight(topElement.current.offsetHeight)
        console.log(topElement.current.offsetHeight)
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setOpaque({opacity: 0.92})
            );
          }
        if(topElement.current.offsetWidth > 1100) {
            setDisplayArray({dropdawnDisplay: 'none', menuDisplay: 'block'})
        }
        else {setDisplayArray({dropdawnDisplay: 'block', menuDisplay: 'none'})}
    }, []);

    const handleClick = () => {
        setIsShown(current => !current);
    };

    return (
        <Container fluid className = "top-navbar" ref={topElement} style={opaque}>
                <Link to="/" className="site-name">
                {/* <Img src={logo} classes={['logo']}/> */}
            </Link>
            <div>
                <div className="top-navbar__links" style={{display: displayArray.menuDisplay}}>
                    {menuContent && menuContent?.map((item) => (
                        <HashLink key={item.id} to={item.link}>{item.title}</HashLink>
                    ))}
                    <button className="btn__menu" onClick={handleClick}>
                        <MdLanguage/>
                    </button>
                </div>
                <div style={{display: displayArray.dropdawnDisplay}}>
                    <button onClick={handleClick}>
                        <AiOutlineMenu/>
                    </button>
                    <div className="dropdown-content" style={{display: isShown ? 'none' : 'flex'}}>
                        {menuContent && menuContent?.map((item) => (
                            <HashLink key={item.id} to={item.link} onClick={() => {setIsShown('none')}}>{item.title}</HashLink>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

/* <div className="container-fluid">
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
                </div> */