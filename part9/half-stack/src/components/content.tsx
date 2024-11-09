import Part from "./part"
import type { CoursePart } from "../types"

export default function Content ({parts}: {parts: CoursePart[]}) {
  return (
    <section>
      {parts.map(part => <Part part={part}/>)}
    </section>
  )
}