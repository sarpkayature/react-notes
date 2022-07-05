import { createContext, useReducer, ReactNode } from 'react'

type ActionsType<S, P> = {
  // object with all the actions
  [key in keyof P]: (state: S, payload?: P[key]) => S
}

type ReducerType<S, A> = {
  (state: S, action: A): S
}

type InitialStateType<S> = {
  [key: string]: S
}

type BoundActionsType<T> = {
  [key in keyof T]: (payload: T[key]) => void
}

/**
 * @name  CtxFactory
 * @description Creates a context and provider for the given reducer and actions.
 * @param {ReducerType} reducer - The reducer function.
 * @param {ActionsType<any, any>} actions - The actions object.
 * @param {InitialStateType} initialState - The initial state.
 * @returns {Object} - The context and provider.
 */

const CtxFactory = (
  reducer: ReducerType<any, any>,
  actions: ActionsType<any, any>,
  initialState?: InitialStateType<{}>
): object => {
  const Context = createContext<{} | any>({})

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions: BoundActionsType<typeof actions> = {}

    for (let key in actions)
      boundActions[key] = actions[key](dispatch, undefined)

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

export default CtxFactory
