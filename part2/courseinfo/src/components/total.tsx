import type { Part } from '@/types'

export default function Total ({ parts }: {
  parts: Part[] 
}) {
  const sum = parts.reduce((ac, { exercises: v }) => ac + v, 0)

  return <strong>Total of {sum} exercises</strong>
}