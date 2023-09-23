"use client"
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  const [name, setName] = useState("Aman")

  return (
    <main className={styles.main}>
      <h1>Basic Routing | Make New Page </h1>
      <h2>My name is {name}</h2>
      <button onClick={() => setName(name==="Aman" ? "Umang" : "Aman")}>CLICK ME</button>
      {/* we cant use events in next component directly, because in ssr, events don't work. firstly we have to make the component client side page, which is done using "use client" at the top of th codes. */}
    </main>
  )
}
