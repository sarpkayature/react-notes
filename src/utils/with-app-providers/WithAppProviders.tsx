import AppRouter from '@routes/AppRouter'
import { ContextBundler } from '@utils/index'

const WithAppProviders = () => {
  return (
    <ContextBundler>
      <AppRouter />
    </ContextBundler>
  )
}

export default WithAppProviders
