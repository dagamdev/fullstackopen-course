import axios from "axios"
import { DiaryI, type NewDiary } from "../types"

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export async function getAllDiaries () {
  return axiosInstance.get<DiaryI[]>('diaries').then(res => res.data)
}

export async function addNewDiary (data: NewDiary) {
  return axiosInstance.post<DiaryI>('diaries', data).then(res => res.data)
}