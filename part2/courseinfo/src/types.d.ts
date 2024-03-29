export interface Course {
  id: number
  name: string
  parts: Part[]
}

export interface Part {
  name: string
  exercises: number
  id: number
}