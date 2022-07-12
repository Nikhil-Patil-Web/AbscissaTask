import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CreatePost from '../../components/createPost'
import Header from '../../components/header'
import LeftHome from '../../components/home/left'
import RightHome from '../../components/home/right'
import SendVerification from '../../components/home/sendVerification.js'
import Stories from '../../components/home/stories'
import useClickOutside from '../../helpers/clickOutside'
import Cookies from 'js-cookie'
import './style.css'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((user) => ({ ...user }))
  const logout = () => {
    Cookies.set('user', '')
    dispatch({
      type: 'LOGOUT',
    })
    navigate('/login')
  }
  return (
    <div>
      <div className='name'>{user.first_name}</div>
      {user.verified === false && (
        <SendVerification user={user}></SendVerification>
      )}
      <div
        className='menu_item hover3'
        onClick={() => {
          logout()
        }}
      >
        <div className='small_circle'>
          <i className='logout_filled_icon'></i>
        </div>
        <span>Log Out</span>
      </div>
    </div>
  )
  // const [visible, setVisible] = useState(true)
  // const { user } = useSelector((user) => ({ ...user }))
  // const el = useRef(null)
  // useClickOutside(el, () => {
  //   setVisible(false)
  // })

  // return (
  //   <div className='home'>
  //     <Header></Header>
  //     <LeftHome user={user}></LeftHome>
  //     <div className='home_middle'>
  //       <Stories></Stories>
  //       {user.verified === false && (
  //         <SendVerification user={user}></SendVerification>
  //       )}
  //       <CreatePost user={user}></CreatePost>
  //     </div>
  //     <RightHome user={user}></RightHome>
  //   </div>
  // )
}
