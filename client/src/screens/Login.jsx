import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../services/user'
import { useEffect } from "react";
import { useForm } from 'react-hook-form'

const Login = () => {
  const { loading, userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    if (userInfo) {
      navigate('/', { replace: true })
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(signIn(data))
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          className='form-input'
          {...register('username')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button' disabled={loading}>
        {loading ? <h1>Loading...</h1>  : 'Login'}
      </button>
      </form>
  )
}

export default Login

