interface Part {
  name: string
  exercises: number
}

export default function App () {
  console.log('Hello from APP component')
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

function Header ({ name }: {
  name: string
}) {
  return <h1>{name}</h1>
}

function Content ({ parts }: {
  parts: Part[]
}) {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

function Total ({ parts }: {
  parts: Part[]
}) {
  const [part1, part2, part3] = parts

  return <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
}

function Part ({ part }: {
  part: Part
}) {
  return <p>
    {part.name} {part.exercises}
  </p>
}
