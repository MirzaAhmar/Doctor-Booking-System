import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../../context/AuthContext';

const Tabs = ({ tab, setTab }) => {

    const {dispatch} = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }
    return (
        <div className='dr_Tabs'>
            <div className='d-flex flex-column gap-2'>
                <button
                    onClick={() => setTab("overview")}
                    className={tab === "overview" ? "drTabsStyle" : "drTabsStyle2"}
                >
                    Overview
                </button>
                <button
                    onClick={() => setTab("appointments")}
                    className={tab === "appointments" ? "drTabsStyle" : "drTabsStyle2"}
                >
                    Appointments
                </button>
                <button
                    onClick={() => setTab("settings")}
                    className={tab === "settings" ? "drTabsStyle" : "drTabsStyle2"}
                >
                    Settings
                </button>
            </div>
            <div className='profileBtn d-flex flex-column gap-3 mt-md-5 mt-2 w-100'>
                <button onClick={handleLogout} className='logout'>Logout</button>
                <button className='deleteAcc'>Delete account</button>
            </div>
        </div>
    );
}

export default Tabs;
