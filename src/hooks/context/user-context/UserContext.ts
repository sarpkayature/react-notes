import { Dispatch } from 'react'
import CtxFactory from '../CtxFactory'

/**
 * @name StateType
 * @description This is the state type for the UserContext
 * */
type StateType = {
  email: string
  username: string
}

/**
 * @name ActionType
 * @description This is the action type for the UserContext
 */
type ActionType = {
  type: string
  payload: {
    email: string
    username: string
  }
}

const initialState = {
  email: 'slm',
  username: 'smd',
}

/**
 *  @name UserReducer
 *  @description Reducer for the user context
 *  @param {StateType} state
 *  @param {ActionType} action
 *  @returns {StateType} state
 */

const UserReducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action
  switch (type) {
    case 'add_user':
      return [
        ...[state],
        {
          email: payload?.email,
          username: payload?.username,
        },
      ]
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

const UserCreate = (dispatch: Dispatch<ActionType>) => {
  return (email: string, username: string) => {
    dispatch({ type: 'add_user', payload: { email, username } })
  }
}

/**
 * @function UserContext
 * @description This function is used to create a user context
 * @param {StateType} initialState
 * @param {UserReducer} reducer
 * @param {UserCreate} createUser
 * @returns {Context<StateType, UserReducer>} UserContext
 **/

export const { Context, Provider } = CtxFactory(
  UserReducer,
  { UserCreate },
  initialState
)
