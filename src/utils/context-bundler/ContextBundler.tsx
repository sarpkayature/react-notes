import React from 'react'
import { UserContextProvider } from '@hooks/index'

/**
 * @name ContextBundler
 * @description This is a wrapper component that provides Contexts to the wrapped component.
 * @param {React.ReactNode} children - The wrapped component.
 * @returns {React.ReactNode} - The wrapped component with the Context.
 * */

const ContextBundler = ({ children }: { children: React.ReactNode }) => {
  const providers = [UserContextProvider]
  return (
    <>
      {providers.map((ProviderComp, index) => {
        return <ProviderComp key={index}>{children}</ProviderComp>
      })}
    </>
  )
}

export default ContextBundler
