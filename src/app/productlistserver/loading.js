import Image from 'next/image'
import loader from '../../../public/loader.gif'

export default function loading() {
  return (
    <div>
      <Image
      src={loader}
      />
    </div>
  )
}
