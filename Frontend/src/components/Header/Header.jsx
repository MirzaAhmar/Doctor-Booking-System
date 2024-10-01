import React from 'react'
import { ReactDOM } from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Header.css'
// images
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authContext } from '../../../context/AuthContext';


import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from '../../../config'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const NavLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Doctors'
  },
  {
    path: '/services',
    display: 'Services'
  },

  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState('close');
  const [active, setActive] = useState();
  const { user, role, token } = useContext(authContext);

  const { data: userdata, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
  return (
      <header>
          <nav className="navbar navbar-expand-lg">
              <div className="container">
                  <Link to='/'> <img src={logo} alt="logo" /> </Link>
                  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-5">
                          {NavLinks.map((item, index) => (
                              <li key={index} onClick={() => setActive(item.display)}>
                                  <Link to={item.path} className={`${active === item.display ? 'active' : ''}`}>{item.display}</Link>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="navRight d-flex align-items-center gap-3" role="search">
                      {token && user ? (
                          <Link className='d-flex align-items-center gap-2' to={`${role === "doctor" ? '/doctors/profile/me' : '/users/profile/me'}`}>
                              <img src={user?.photo} alt="user" className='rounded-circle' />
                              <h5>{user?.name}</h5>
                          </Link>
                      ) : (
                          <Link to='/login'>
                              <button className="btn btn-primary text-white" onClick={() => setActive('')}>Login</button>
                          </Link>
                      )}
                      <button className="navbar-toggler" onClick={() => setMenuOpen(menuOpen === 'open' ? 'close' : 'open')} style={{ padding: "0.5rem 0.75rem !important" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                  </div>
              </div>
          </nav>

          <aside className={`${menuOpen === 'open' && 'toggle-sidebar'}`} onClick={() => setMenuOpen('close')}>
              <div className='closeIcon d-flex justify-content-end mb-3'>
                  <FontAwesomeIcon icon={faXmark} />
              </div>
              <ul>
                  {NavLinks.map((item, index) => (
                      <li key={index} onClick={() => setActive(item.display)}>
                          <Link to={item.path} className={`${active === item.display ? 'active' : ''}`}>{item.display}</Link>
                      </li>
                  ))}
              </ul>
          </aside>

          <div className={`black_bg d-lg-none d-block ${menuOpen === 'open' && 'toggle-sidebar'}`} onClick={() => setMenuOpen('close')}></div>
      </header>
  )
}

export default Header
