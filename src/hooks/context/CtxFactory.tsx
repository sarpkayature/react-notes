import {
  createContext,
  useReducer,
  ReactNode,
  Context as ContextType,
} from 'react'

type ActionsType<S, P> = {
  [key: string]: (state: S, payload: P) => any
}

type ReducerType<S, A> = {
  (state: S, action: A): S
}

type InitialStateType<S> = {
  [key: string]: S
}

type BoundActionsType<P, D> = {
  [key: string]: (...args: P[]) => void | Promise<D>
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
  initialState: InitialStateType<any>
): {
  Context: ContextType<{
    state?: InitialStateType<any>
    boundActions?: BoundActionsType<any, any>
  }>
  Provider: ({ children }: { children: ReactNode }) => JSX.Element
} => {
  const Context = createContext({})

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions: BoundActionsType<any, any> = {}

    for (let key in actions) {
      // @ts-ignore
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}

export default CtxFactory
