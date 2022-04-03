
import { Layout, Menu } from 'antd'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRoutes, Link } from 'react-router-dom'
import { isNull } from 'lodash'

import routes from './routes'
// import LayoutApp from './components/dashborad/Layout'
import { logoutAction } from './actions'

const { Header, Content, Footer } = Layout

  
const App = () => {
  
  const dispatch = useDispatch()

  const { isAuth } = useSelector((state) => state.login)
  const routing = useRoutes(routes(isAuth))
  // console.log('App--->', isAuth, routing)
  // useDocumentTitle('tst')
  if(isNull(routing)) return <h1>Not Found URL</h1>
  if(isAuth===false)  return <>{routing}</>

  const handleOnClickLogout = () => {
    dispatch(logoutAction())
  }
  
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="3"><Link to={'/catlist'}>Cats</Link></Menu.Item>
        <Menu.Item key="2"><Link to={'/add-cat'}>Add Cat</Link></Menu.Item>
        <Menu.Item key="1" style={{ float: 'right' }} onClick={handleOnClickLogout}>Logout</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: '100vh' }}>
        {routing}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Google form clone project</Footer>
  </Layout>
  )
}

export default App