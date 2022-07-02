import React, { useContext } from 'react'
import { ContextBundler } from '@utils/index'
import { Login } from '@components/index'

const App = () => {
  return (
    <ContextBundler>
      <div className='App'>
        <Login />
      </div>
    </ContextBundler>
  )
}

export default App
