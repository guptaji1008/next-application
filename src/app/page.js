
import custom from './custom.module.css'
import page from './page.module.css'
import style from '@/style/style.module.css'

export default function Home() {

  return (
    <main>
      <h1 className={custom.main1}>Modular css and its properties</h1>
      <h1 className={page.main1}>Modular css</h1>
      <h1 className={style.main1}>Modular css</h1>
    </main>
  )
}
