"use client"
import { useRouter } from 'next/navigation'
import './about.css'

export default function layout({children}) {

  const router = useRouter()

  return (
    <div className="about-box">
      <div className="about-buttons">
        <button onClick={() => router.push('/about/aboutcollege')}>College</button>
        <button onClick={() => router.push('/about/aboutstudent')}>Student</button>
      </div>
      <div className="about-content">{children}</div>
    </div>
  )
}
