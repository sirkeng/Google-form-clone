import Login from './components/Login'
import GoogleForm from './components/dashborad/GoogleForm'

const routes = (isAuth) => [
    { path: "/", element: <Login title={'Login'} /> },
    { path: "/google-form", element: isAuth ? <GoogleForm /> : <Login title={'Login'} /> },
]

export default routes