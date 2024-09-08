import { useState } from 'react';
import './AuthHeader.scss';
import { Modal } from '../modal/Modal';
import { Link } from 'react-router-dom';
const AuthHeader = () => {
    const [openModal,setOpenModal] = useState(false);
  return (
    <header>
        <nav>
            <div className="AuthContainer">
                <div className="navigation">
                   <a href="/" className='header__img'>
                    <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="logo" />
                    </a> 
                    <ul>
                        <li>
                            <Link className='nav__link' to="#">Our Story</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="#">Membership</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="#">Write</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="signIn">Sign In</Link>
                        </li>
                        <li>
                            <button onClick={() => setOpenModal(true)}>Get start</button>
                        </li>
                        
                    </ul>
                    <Modal openModal={openModal} setOpenModal={setOpenModal}>
                        <SIgnUp/>
                    </Modal>
                </div>
            </div>
            <hr  className='hr'/>
        </nav>
    </header>
  )
}

export default AuthHeader;