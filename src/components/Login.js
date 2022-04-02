import React /*{ useState }*/ from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import * as Yup from 'yup'
// import { message } from 'antd'
// import { isEmpty } from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


import { useDocumentTitle } from '../utils'

const ValidateSchemaForm = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })

const Login = ({ title }) => {
    useDocumentTitle(title)


    const handleOnSubmit = (values) => {
        console.log('handleOnSubmit--->', values)
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <Formik 
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={ValidateSchemaForm}
                        onSubmit={handleOnSubmit}
                    >
                        <Form className="login">
                            <Form.Item className="login__field" name='username'>
                                <FontAwesomeIcon className="login__icon" icon={faUser} />
                                <Input className="login__input" name='username' placeholder="Username" />
                            </Form.Item>
                            <Form.Item className="login__field" name='password'>
                                <FontAwesomeIcon className="login__icon" icon={faLock} />
                                <Input className="login__input" name='password' placeholder="Password" />
                                </Form.Item>
                            <SubmitButton className="button login__submit" loading={false}>
                                <span className="button__text">Log In Now</span>
                                <FontAwesomeIcon className="button__icon" icon={faChevronCircleRight} />
                            </SubmitButton>		
                        </Form>
                    </Formik>
                    <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">
                        <div href="#" className="social-login__icon fab fa-instagram"></div>
                        <div href="#" className="social-login__icon fab fa-facebook"></div>
                        <div href="#" className="social-login__icon fab fa-twitter"></div>
                    </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
      </div>
    )
}

export default Login