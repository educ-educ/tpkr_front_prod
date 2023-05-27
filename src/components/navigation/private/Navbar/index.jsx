
import {Container} from 'react-bootstrap';
import {BsBoxArrowRight} from 'react-icons/bs'
import {useDispatch} from 'react-redux';
import {authActions} from '../../../../_store';

import './PrivateNavbar.scss';

const PrivateNavbar = () => {

    const dispatch = useDispatch();
    function goOut() {
        return dispatch(authActions.logout());
    }
    
    return (
        <Container fluid className = "private-navbar">
            <div className="private-navbar__go-out" onClick={() => {goOut()}}>
                <div className='private-navbar__go-out__text'>
                    Выход
                </div>
                <BsBoxArrowRight/>
            </div>
        </Container>
    )
}

export default PrivateNavbar;