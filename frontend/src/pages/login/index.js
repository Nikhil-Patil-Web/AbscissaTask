import './index.css'
import Header from '../../components/Header'
import Animation from '../../components/Animation'
import LoginForm from '../../components/LoginForm'
import Footer from '../../components/Footer'
export default function Login() {
  return (
    <div className='login'>
      <Header></Header>
      <div className='login_middle'>
        <Animation></Animation>
        <LoginForm></LoginForm>
      </div>
      <Footer></Footer>
    </div>
  )
}
