"use client"
import { useRouter } from 'next/navigation'
import './login.css'

export default function layout({children}) {

  const router = useRouter()

  return (
    <div className="login-box">
      <div className="login-buttons">
        <button onClick={() => router.push('/login/loginstudent')}>Student</button>
        <button onClick={() => router.push('/login/loginteacher')}>Teacher</button>
      </div>
      <div className="login-content">{children}</div>
    </div>
  )
}
