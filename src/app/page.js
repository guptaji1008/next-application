import Image from "next/image";
import picture from '../../public/moneyImage.jpg'

export default function Home() {

  return (
    <main>
      <h1>Image Optimization</h1>
      <Image 
      src={picture}
      width={500}
      height={400}
      />
    </main>
  )
}
