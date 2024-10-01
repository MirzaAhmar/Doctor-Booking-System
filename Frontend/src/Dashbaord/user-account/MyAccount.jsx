import React, { useContext, useState } from 'react'
import { authContext } from '../../../context/AuthContext'
import MyBookings from './MyBookings'
import Profile from './Profile'
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from '../../../config'
import { token } from '../../../config'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate(); // For redirection

  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
  console.log(userData, "userdata")
  
  if (error === 'Token is expired') {
    // Redirect to login page
    navigate('/login');
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/login'); // Redirect to login on logout
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section id='myAccount'>
      <div className="container">
        {loading && !error && <Loading/>}
        {error && !loading && <Error erressage={error}/>}
        {
          !loading && !error && <div className="row gap-md-3 gap-5">
          <div className="col-md-4">
            <div className='d-flex flex-column align-items-center gap-2'>
              <figure><img src={userData.photo} alt="profileImg" /></figure>
              <h4>{userData.name}</h4>
              <h6>{userData.email}</h6>
              <h6>Blood Type: <span>{userData.bloodType}</span></h6>
              <div className='profileBtn d-flex flex-column gap-3 mt-md-5 mt-2 w-100'>
                <button onClick={handleLogout} className='logout'>Logout</button>
                <button className='deleteAcc'>Delete account</button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className='bookingBtn d-flex align-items-center justify-content-center gap-2'>
              <button onClick={() => setTab("bookings")} className={`${tab == "bookings" && "profileTab text-white"}`}>My Bookings</button>
              <button onClick={() => setTab("settings")} className={`${tab === "settings" && "profileTab text-white"}`}>Profile Settings</button>
            </div>

            {
              tab == "bookings" && <MyBookings />
            }
            {
              tab == "settings" && <Profile user={userData} />
            }
          </div>
        </div>
        }
      </div>
    </section>
  )
}

export default MyAccount