import { VISIBILITY, WEATHER } from "./enums"

export interface DiaryI {
  id: number
  date: string
  weather: `${WEATHER}`
  visibility: `${VISIBILITY}`
  comment: string
}

export type NewDiary = Omit<DiaryI, 'id'>