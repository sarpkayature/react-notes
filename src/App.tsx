import React, { useContext } from 'react'
import { ContextBundler } from '@utils/index'
import Dummy from '@components/dummy'

const App = () => {
  return (
    <ContextBundler>
      <div className='App'>
        <Dummy />
      </div>
    </ContextBundler>
  )
}

export default App
