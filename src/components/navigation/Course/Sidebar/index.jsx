
import {useRef, useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import {AiFillHome, AiFillSetting, AiFillBook} from 'react-icons/ai';
import {BsBookmarkStarFill, BsBookHalf, BsBookmarksFill} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import './CourseSidebar.scss';


const sidebarNavItems = [
    {
        textContent: 'Описание',
        icon: <AiFillHome/>,
        to: '/admin/home',
        section: ''
    },
    {
        textContent: 'Обучающиеся',
        icon: <BsBookHalf/>,
        to: '/admin/home/current_courses',
        section: 'menu'
    },
    {
        textContent: 'Статистика',
        icon: <AiFillBook/>,
        to: '/admin/home/ended_courses',
        section: 'mainpage'
    },
    {
        textContent: 'Блоки заданий',
        icon: <BsBookmarksFill/>,
        to: '/admin/home/papers',
        section: 'contact'
    },
    {
        textContent: 'Отзывы',
        icon: <BsBookmarkStarFill/>,
        to: '/admin/home/grades',
        section: 'users'
    },
    {
        textContent: 'Рейтинг курса',
        icon: <AiFillSetting/>,
        to: '/admin/home/subscribtion',
        section: 'form'
    },
]

const CourseSidebar = () => {
    const authUser = useSelector(x => x.auth.user);
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const location = useLocation();
    
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
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

export default CourseSidebar;