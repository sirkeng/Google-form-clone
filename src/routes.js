import Login from './components/login'
import CatList from './components/dashboard/CatList'
import GoogleForm from './components/dashboard/GoogleForm'

const routes = (isAuth) => [
    { path: "/", element: <Login title={'Login'} /> },
    { path: "/catlist", element: isAuth ? <CatList title={'Cats'} /> : <Login title={'Login'} /> },
    { path: "/add-cat", element: isAuth ? <GoogleForm title={'Add Cat'} /> : <Login title={'Login'} /> }
]

export default routes