import Login from './components/login'
import CatList from './components/dashboard/CatList'
import GoogleForm from './components/dashboard/GoogleForm'

const routes = (isAuth) => [
    { path: "/", element: <Login title={'Login'} /> },
    { path: "/catlist", element: isAuth ? <CatList title={'Cats'} /> : <Login title={'Login'} /> },
    { path: "/google-form", element: isAuth ? <GoogleForm title={'Google form'} /> : <Login title={'Login'} /> }
]

export default routes