import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default AppRouter
