
import { Layout, Menu } from 'antd'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { isNull } from 'lodash'

import routes from './routes'
// import LayoutApp from './components/dashborad/Layout'
import { logoutAction } from './actions'

const { Header, Content, Footer } = Layout

  
const App = () => {
  const dispatch = useDispatch()

  const { isAuth } = useSelector((state) => state.login)
  const routing = useRoutes(routes(isAuth))

  console.log('App--->', isAuth, routing)

  if(isNull(routing)) return <h1>Not Found URL</h1>
  if(isAuth===false) return <>{routing}</>

  const handleOnClickLogout = () => {
    console.log('handleOnClickLogout--->')
    dispatch(logoutAction())
  }
  
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" onClick={handleOnClickLogout}>Logout</Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {routing}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Google form clone project</Footer>
  </Layout>
  )
}

export default App