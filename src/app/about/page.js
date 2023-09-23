"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">To go home page</Link>
      <br />
      <br />
      <button onClick={() => router.push('/')}>To go home page</button>
      <br />
      <br />
      <button onClick={() => router.push('/about/aboutstudent')}>To go about student</button>
      <br />
      <br />
      <button onClick={() => router.push('/about/aboutcollege')}>To go about college</button>
    </div>
  )
}
