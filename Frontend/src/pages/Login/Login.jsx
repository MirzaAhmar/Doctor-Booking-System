import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginImg } from '../../assets/images'
import { BASE_URL } from '../../../config'
import { toast } from 'react-toastify'
import { authContext } from '../../../context/AuthContext.jsx'
import HashLoader from 'react-spinners/HashLoader.js'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Read response body only once
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Login failed');
      }

      // Dispatch login success action with correct payload
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        }
      });

      console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate('/home');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }


  return (
    <section id='login'>
      {/* <div className="container d-flex justify-content-center">
        <div className='login_Form'>
          <h4>Hello! <span>Welcome</span> Back</h4>
          <form>
            <div>
              <input type="email" name='email' placeholder='Enter email' value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
              <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleInputChange} required />
            </div>
            <button className='btn btn-primary w-100 mt-4'>Login</button>
            <p>Don't have an account? <Link to='/register'> Register</Link> </p>
          </form>
        </div>
      </div> */}
      <div className="container">
        <div className="row align-items-center flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <figure>
              <img src={LoginImg} alt="LoginImg" />
            </figure>
          </div>
          <div className="col-md-6">
            <div>
              <div className='login_Form'>
                <h4>Hello! <span>Welcome</span> Back</h4>
                <form onSubmit={submitHandler}>
                  <div>
                    <input type="email" name='email' placeholder='Enter email' value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleInputChange} required />
                  </div>
                  <button className='btn btn-primary w-100 mt-4'>{loading ? <HashLoader size={25} color="#fff" /> : 'Login'}</button>
                  <p>Don't have an account? <Link to='/register'> Register</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
