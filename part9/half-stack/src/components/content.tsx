interface Part {
  name: string
  exerciseCount: number
}

export default function Content ({parts}: {parts: Part[]}) {
  return (parts.map(part => <p key={part.name}>
      {part.name} {part.exerciseCount}
    </p>)
  )
}