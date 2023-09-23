"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (
    <main>
      <h1>Basic Routing | Make New Page </h1>
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Go to login page</button>
      <br />
      <br />
      <button onClick={() => router.push("/about")}>Go to about page</button>
      {/* we cant use events in next component directly, because in ssr, events don't work. firstly we have to make the component client side page, which is done using "use client" at the top of th codes. */}
    </main>
  )
}
