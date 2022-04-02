import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { isNull } from 'lodash'

import routes from './routes'

  
const App = () => {
  const { isAuth } = useSelector((state) => state.login)

  const routing = useRoutes(routes(isAuth))
  if(isNull(routing)) return <h1>Not Found URL</h1>
  console.log('App--->', isAuth, routing)
  return (
    <>
      {routing}
    </>
  )
}

export default App