"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/">To go home page</Link>
      <br />
      <br />
      <button onClick={() => router.push('/')}>To go home page</button>
      <br />
      <br />
      <button onClick={() => router.push('/login/loginstudent')}>To go student login</button>
      <br />
      <br />
      <button onClick={() => router.push('/login/loginteacher')}>To go teacher login</button>
    </div>
  )
}
