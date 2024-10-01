import React, { useState } from 'react'
import { DoctorImg1, SignUpImg, SignUpImg2 } from '../../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../../uploadCloudinary'
import { BASE_URL } from '../../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',  // Add confirm password to state
    gender: 'male',
    role: 'patient',
    photo: selectedFile
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFieldInputChange = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate if password matches confirm password
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return (
    <section id='signUp'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <figure><img src={SignUpImg} alt="SignUpImg" /></figure>
          </div>

          <div className="col-md-6 mt-3">
            <div>
              <div className='login_Form w-100'>
                <h4>Create an <span>account</span></h4>
                <form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-4'>
                    <div className='w-100'>
                      <input type="text" name='name' placeholder='Enter your full name' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className='w-100'>
                      <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-4'>
                    <div className='w-100'>
                      <input
                        type="password"
                        name='password'
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className='w-100'>
                      <input
                        type="password"
                        name='confirmPassword'
                        placeholder='Confirm your password'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-sm-5 gap-4 mt-4'>
                    <label>
                      Are you a:
                      <select name="role" value={formData.role} onChange={handleInputChange}>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                      </select>
                    </label>
                    <label>
                      Gender:
                      <select name="gender" value={formData.gender} onChange={handleInputChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                  <div className='d-flex align-items-center gap-3 mt-4'>
                    {selectedFile && <div className='uploadImg'>
                      <img src={previewURL} alt="DoctorImg1" />
                    </div>}
                    <div className='chooseFile'>
                      <input type="file" name="photo" id="customeFile" accept='.jpg, .png' onChange={handleFieldInputChange} />
                      <label htmlFor="customeFile">Upload Photo</label>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary w-100 mt-4' disabled={loading && true}>{loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign Up'}</button>
                  <p>Already have an account? <Link to='/login'> Login</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
