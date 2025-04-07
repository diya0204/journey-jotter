
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import '@fontsource/poppins';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const[name,setName]= useState()
  const[email,setEmail]= useState()
  const[password,setPassword]= useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState()
  const navigate =useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return;
    }
    setError('');
    axios.post('http://localhost:3001/register',{name, email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  }
    return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="video-background position-absolute w-100 h-100">
        <video autoPlay muted loop id="bg-video" className="w-100 h-100 object-fit-cover">
         <source src="/IMAGES/80872-573482019_tiny.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>

      <div className="card p-4 shadow-lg" style={{ width: '22rem', zIndex: 1 }}>
        <div className="card-header text-center bg-primary text-white">
          <h5 className="mb-0">Sign Up</h5>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bx bx-user"></i>
                </span>
                <input type="text" id="username" className="form-control" required  onChange={(e)=> setName(e.target.value)}/>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" id="email" className="form-control" required onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" >Create Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bx bx-lock-alt"></i>
                </span>
                <input type="password" id="password" className="form-control" required onChange={(e)=>setConfirmPassword(e.target.value)} />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bx bx-lock-alt"></i>
                </span>
                <input type="password" id="confirmPassword" className="form-control" required onChange={(e)=> setPassword(e.target.value)}/>
              </div>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" id="remember" className="form-check-input" />
              <label htmlFor="remember" className="form-check-label">Remember me</label>
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
