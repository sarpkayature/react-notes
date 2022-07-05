import { RouteObject, useRoutes } from 'react-router'
import { lazy } from 'react'

const Login = lazy(() => import('@components/login-form/Login'))

const AppRoutes = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Login />,
    },
    { path: '*', element: <div>404</div> },
  ]

  return useRoutes(routes)
}

export default AppRoutes
