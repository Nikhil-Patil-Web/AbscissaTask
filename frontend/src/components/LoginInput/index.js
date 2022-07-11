import './index.css'
export default function LoginInput({ type, name, placeholder }) {
  return (
    <div className='login_input'>
      <input type={type} name={name} placeholder={placeholder}></input>
    </div>
  )
}
