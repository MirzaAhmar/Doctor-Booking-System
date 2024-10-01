import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../../uploadCloudinary'
import { BASE_URL, token } from '../../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // confirmPassword: '',  // Add confirm password to state
    gender: 'male',
    bloodType: '',
    photo: null
  });

  const navigate = useNavigate()

  useEffect(() => {
    setFormData({ name: user.name, email:user.email, photo:user.photo, gender:user.gender, bloodType:user.bloodType });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFieldInputChange = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate if password matches confirm password
    // if (formData.password !== formData.confirmPassword) {
    //   toast.error("Passwords do not match")
    //   setLoading(false)
    //   return
    // }

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          "Content-Type": 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData)
      })

      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }
  return (
    <div className='login_Form mx-0 mt-3'>
      <form onSubmit={submitHandler}>
        <div className='d-flex align-items-center gap-4'>
          <div className='w-100'>
            <input type="text" name='name' placeholder='Enter your full name' value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className='w-100'>
            <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} aria-readonly readOnly />
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
              autoComplete='off'
            />
          </div>
          {/* <div className='w-100'>
            <input
              type="password"
              name='confirmPassword'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div> */}
        </div>
        <div className='w-100'>
          <input
            type="text"
            name='bloodType'
            placeholder='Blood Type'
            value={formData.bloodType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-sm-5 gap-4 mt-4'>

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
          {formData.photo && <div className='uploadImg'>
            <img src={formData.photo} alt="DoctorImg1" />
          </div>}
          <div className='chooseFile'>
            <input type="file" name="photo" id="customeFile" accept='.jpg, .png' onChange={handleFieldInputChange} />
            <label htmlFor="customeFile">{selectedFile ? selectedFile.name : "Upload Photo"}</label>
          </div>
        </div>
        <button type='submit' className='btn btn-primary w-100 mt-4' disabled={loading && true}>{loading ? <HashLoader size={25} color='#ffffff' /> : 'Update'}</button>
      </form>
    </div>
  )
}

export default Profile