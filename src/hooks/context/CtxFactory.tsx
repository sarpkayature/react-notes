import {
  createContext,
  useReducer,
  ReactNode,
  Context as ContextType,
  Dispatch,
} from 'react'

type ActionsType<S, P> = {
  [key: string]: (state: S, payload: P) => S
}

type ReducerType<S, A> = {
  (state: S, action: A): S
}

type InitialStateType<S> = {
  [key: string]: S
}

type BoundActionsType<S, P> = {
  [key: string]: (
    dispatch: Dispatch<ActionsType<S, P> | any>
  ) => (payload?: P) => void
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
  initialState?: InitialStateType<any>
): {
  Context: ContextType<{
    state?: InitialStateType<any>
    boundActions?: BoundActionsType<null, null>
  }>
  Provider: ({ children }: { children: ReactNode }) => JSX.Element
} => {
  const Context = createContext({})

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions: BoundActionsType<null, null> = {}

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch, undefined)
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
