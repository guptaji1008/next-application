import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Aman"/>
      <User name="Anuj"/>
      <User name="Compounder"/>
      <h1>Home Page</h1>
    </main>
  )
}

const User = (props) => {
  return (
    <h2>My name is {props.name}</h2>
  )
}
