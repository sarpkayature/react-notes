import { Dispatch } from 'react'
import CtxFactory from '../CtxFactory'

/**
 * @name StateType
 * @description This is the state type for the UserContext
 * */
type StateType<S> = {
  email: S
  username: S
}

/**
 * @name ActionType
 * @description This is the action type for the UserContext
 */
type ActionType<T, A> = {
  type: T
  payload: {
    email: A
    username: A
  }
}

const initialState: StateType<string> = { email: '', username: '' }

/**
 *  @name UserReducer
 *  @description Reducer for the user context
 *  @param {StateType} state
 *  @param {ActionType} action
 *  @returns {StateType} state
 */

const UserReducer = (
  state: StateType<string>,
  action: ActionType<string, string>
) => {
  const {
    type,
    payload: { email, username },
  } = action
  switch (type) {
    case 'login_user':
      return {
        email,
        username,
      }
    case 'logout_user':
      return initialState
    default:
      return state
  }
}

/**
 * @function UserCreate
 * @description This function is used to create a user
 * @param {Dispatch<ActionType>} dispatch
 * @returns {Function} UserCreate
 * */

export const UserLogin = (
  dispatch: Dispatch<ActionType<string, string>>
): Function => {
  return ({ email, username }: { email: string; username: string }) => {
    dispatch({ type: 'login_user', payload: { email, username } })
  }
}

export const UserLogout = (
  dispatch: Dispatch<ActionType<string, string>>
): Function => {
  return () => {
    dispatch({ type: 'logout_user', payload: initialState })
  }
}

/**
 * @function UserContext
 * @description This function is used to create a user context
 * @param {StateType} initialState
 * @param {UserReducer} reducer
 * @function {UserLogin} LoginUser
 * @function {UserLogout} LogoutUser
 * @returns {Context<StateType, {UserLogin, UserLogout}>} UserContext
 **/

export const { Context, Provider } = CtxFactory(
  UserReducer,
  { UserLogin, UserLogout },
  initialState
)
