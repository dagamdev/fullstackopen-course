import { CoursePart } from "../types";

export default function Part ({part}: {part: CoursePart}) {
  switch (part.kind) {
    case 'basic':
      return (
        <article>
          <strong>{part.name} {part.exerciseCount}</strong>
          <p>{part.description}</p>
        </article>
      )

    case 'group':
      return (
        <article>
          <strong>{part.name} {part.exerciseCount}</strong>
          <p>project exercises {part.groupProjectCount}</p>
        </article>
      )
    case 'background': 
      return (
        <article>
          <strong>{part.name} {part.exerciseCount}</strong>
          <p>{part.description}</p>
          <p>Submit to <a href={part.backgroundMaterial}>{part.backgroundMaterial}</a></p>
        </article>
      )
    case 'special':
      return (
        <article>
          <strong>{part.name} {part.exerciseCount}</strong>
          <p>{part.description}</p>
          <p>Required skills: {part.requirements.join(', ')}</p>
        </article>
      )
  }
}