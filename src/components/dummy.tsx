import React, { useContext } from 'react'
import { UserContext } from '@hooks/index'

const Dummy = () => {
  const { state } = useContext(UserContext)
  console.log(state)
  return (
    <>
      <> {state.email}</>
    </>
  )
}

export default Dummy
