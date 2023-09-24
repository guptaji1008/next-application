import { Quicksand } from "next/font/google"
import { Pacifico } from "next/font/google"

const quicksand = Quicksand({
  weight: "400",
  subsets: ["vietnamese"],
  display: "swap"
})

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap"
})

export default function Home() {

  return (
    <main>
      <h1>Font Optimization</h1>
      <h1 className={quicksand.className}>Using Quicksand font from next fonts.</h1>
      <h1 className={pacifico.className}>Using Pacifico font from next fonts.</h1>
      
    </main>
  )
}
