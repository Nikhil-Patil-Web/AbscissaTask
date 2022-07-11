import './index.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='header_icons'>
        <img
          className='header_icon'
          src='logos/athletics.png'
          alt='athletics'
        ></img>
        <img
          className='header_icon'
          src='logos/badminton.png'
          alt='athletics'
        ></img>
        <img
          className='header_icon'
          src='logos/cricket.png'
          alt='athletics'
        ></img>
        <img className='header_icon' src='logos/gym.png' alt='athletics'></img>
        <img
          className='header_icon'
          src='logos/swimming.png'
          alt='athletics'
        ></img>
      </div>
      <div className='header_login'>
        <button>Login</button>
      </div>
      <div className='sections'>
        <span className='section1'>About Us</span>
        <span className='section1'>Contact Us</span>
      </div>
    </div>
  )
}
