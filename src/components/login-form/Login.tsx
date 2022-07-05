import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { UserContext } from '@hooks/index'

const Login = () => {
  const { state, UserLogin } = useContext(UserContext)

  const [credentials, setCredentials] = useState({
    email: '',
    username: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    UserLogin(credentials)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='email' type='text' onChange={handleChange} />
        <input name='username' type='text' onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
