
export default function page({params}) {
  return (
    <div>
      <h1>Day : {params.lecture[0]}</h1>
      <h1>Lecture No. : {params.lecture[1]}</h1>
    </div>
  )
}
