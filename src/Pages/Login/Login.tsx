import './login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'
import netflix_loading from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState('Sign Up')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)


  const user_auth = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)
    if(signState==='Sign In'){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }


  return (
    loading?<div className="login-spinner">
      <img src={netflix_loading} alt="" />
    </div>:
    
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          
          {signState==='Sign Up'?<input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>:
          <></>}

          <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

          <button type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Sign Up'?<p>Already have an account?<span onClick={()=>{setSignState('Sign In')}}>Login here</span></p>:
          <p>New to Netflix?<span onClick={()=>{setSignState('Sign Up')}}>Sign up here</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
