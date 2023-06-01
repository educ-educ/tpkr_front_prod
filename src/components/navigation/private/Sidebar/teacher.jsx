
import {useRef, useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import {AiFillHome, AiFillSetting, AiFillBook} from 'react-icons/ai';
import {BsBookmarkStarFill, BsBookHalf, BsBookmarksFill} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import './UserSidebar.scss';

const TeacherSidebar = () => {

    const authUser = useSelector(x => x.auth.user);
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const location = useLocation();
    const currentPath = authUser.role

    const sidebarNavItems = [
        {
            textContent: 'Главная',
            icon: <AiFillHome/>,
            to: `/${currentPath}`,
            section: ''
        },
        {
            textContent: 'Актуальные курсы',
            icon: <BsBookHalf/>,
            to: `/${currentPath}/current_courses`,
            section: 'menu'
        },
        {
            textContent: 'Черновики',
            icon: <AiFillBook/>,
            to: `/${currentPath}/ended_courses`,
            section: 'mainpage'
        },
        {
            textContent: 'Управление подпиской',
            icon: <AiFillSetting/>,
            to: `/${currentPath}/subscription`,
            section: 'form'
        },
    ]

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className='sidebar__wrapper'>
            <Link to={'/'} className='sidebar__site-name'>
                Платформа
            </Link>
            <div className="sidebar__person">
                <div className='sidebar__person__name'>
                    {authUser.lastName + " " + authUser.firstName + " " + authUser.patronymicName}
                </div>
                <div className='sidebar__person__role'>
                    {authUser.role}
                </div>
            </div>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index} className='sidebar__menu__link'>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className='sidebar__menu__item__icon'>{item.icon}</div>
                                {item.textContent}
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default TeacherSidebar;