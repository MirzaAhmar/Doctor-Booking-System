import React, { useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL, token } from '../../../config';
import DoctorCard from '../../components/Doctor/DoctorCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

// JWT parsing function
const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

const MyBookings = () => {

  // Check token expiration inside useEffect
  useEffect(() => {
    const checkTokenExpiration = () => {
      const decodedToken = parseJwt(token);  // Use the parseJwt function
      if (decodedToken) {
        const currentTime = Date.now() / 1000;  // Current time in seconds
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');     // Clear token
          window.location.href = '/login';      // Redirect to login page
        }
      }
    };

    checkTokenExpiration();  // Call this function to check token expiration
  }, []);  // Empty dependency array to run it once when component mounts

  // Fetching appointments
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <>
      {loading && !error && <Loading />}
      {error && !loading && <Error message={error} />}
      {!loading && !error && (
        <div>
          {appointments.length > 0 ? (
            appointments.map((doctor) => <DoctorCard doctor={doctor} key={doctor._id} />)
          ) : (
            <h4>You did not book any doctor yet!</h4>
          )}
        </div>
      )}
    </>
  );
};

export default MyBookings;
