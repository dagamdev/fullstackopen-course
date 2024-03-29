import Content from './content'
import Header from './header'
import Total from './total'
import type { Course } from '@/types'

export default function Course ({ course }: {
  course: Course
}) {
  return (
    <section>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </section>
  )
}