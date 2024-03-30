import type { Dispatch, SetStateAction } from 'react'

export interface Person {
  name: string
  number: string
  id: string
}

export type SetState<State> = Dispatch<SetStateAction<State>>

export interface Notification {
  type: 'success' | 'error'
  message: string
}
