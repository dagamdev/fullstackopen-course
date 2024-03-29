export default function Part ({ part }: {
  part: {
    name: string
    exercises: number
  }
}) {
  return <p>
    {part.name} {part.exercises}
  </p>
}