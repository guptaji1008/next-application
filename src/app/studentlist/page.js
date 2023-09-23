import Link from "next/link"

export default function page() {

    const studentArr = [
        "Aman",
        "Anuj",
        "Akshay",
        "Prashant",
        "Peeyush",
        "Raju",
        "Kaju"
    ]

  return (
    <div>
        <h1>Students List : </h1>
      <ul>
        {
            studentArr.map((elem) => {
                return <li>
                    <Link href={`studentlist/${elem}`}>{elem}</Link>
                </li>
            })
        }
      </ul>
    </div>
  )
}
