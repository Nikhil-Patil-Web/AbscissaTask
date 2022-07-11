import './index.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import LoginInput from '../LoginInput/index'

export default function LoginForm() {
  return (
    <div className='login_form'>
      <Formik>
        {(formik) => (
          <Form>
            <LoginInput
              type='text'
              name='email'
              placeholder='Email address or phone number'
            ></LoginInput>
            <LoginInput
              type='password'
              name='password'
              placeholder='Password'
              bottom
            ></LoginInput>
            <button type='submit' className='button'>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
