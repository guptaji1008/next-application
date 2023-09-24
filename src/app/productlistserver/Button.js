"use client"

export default function Button({price}) {
  return (
    <div>
      <button onClick={() => alert(price)}>CLICK ME</button>
    </div>
  )
}
