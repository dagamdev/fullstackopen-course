import { VISIBILITY, WEATHER } from "./enums"

export interface DiaryI {
  id: number
  date: string
  weather: `${WEATHER}`
  visibility: `${VISIBILITY}`
}

export interface NewDiary extends Omit<DiaryI, 'id'> {
  comment: string
}