import React, { useContext, useState } from 'react'
import { UserContext } from '@hooks/index'

const Login = () => {
  const { state, UserCreate } = useContext(UserContext)

  const [inputVal, setInputs] = useState({
    username: '',
    email: '',
  })

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onClickHandler = () => {
    return UserCreate(inputVal)
  }

  console.log(state)
  return (
    <>
      <input
        type='text'
        value={inputVal.username}
        name='username'
        onChange={userHandler}
      />
      <input
        type='text'
        value={inputVal.email}
        name='email'
        onChange={userHandler}
      />
      <button onClick={onClickHandler}>Create User</button>
    </>
  )
}

export default Login
