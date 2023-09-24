
export default function page() {
  return (
    <div>
      <h1>Dynamic Metadata</h1>
    </div>
  )
}

export function generateMetadata() {
    return {
        title: "Dynamic Metadata",
        description: "Generating Dynamic Metadata"
    }
}
