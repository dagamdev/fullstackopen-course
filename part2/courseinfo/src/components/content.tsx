import Part from './part'
import type { Part as PartData } from '@/types'

export default function Content ({ parts }: {
  parts: PartData[]
}) {
  return parts.map(part => <Part key={part.id} part={part} />)
}