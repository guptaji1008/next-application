"use client"
import { usePathname, useRouter } from 'next/navigation'
import './login.css'
import Link from 'next/link'

export default function layout({children}) {

  const router = useRouter()

  const pathName = usePathname()

  return (
    <div>
      {
        pathName !== "/login/loginchildren" ? <div className="login-box">
        <div className="login-buttons">
          <button onClick={() => router.push('/login/loginstudent')}>Student</button>
          <button onClick={() => router.push('/login/loginteacher')}>Teacher</button>
          <button onClick={() => router.push('/login/loginchildren')}>Children</button>
        </div>
        <div className="login-content">{children}</div>
      </div> : <div>
        <Link href="/login">Go to login</Link>
      <div className="login-content">{children}</div>
      </div>
      }
    </div>
  )
}
