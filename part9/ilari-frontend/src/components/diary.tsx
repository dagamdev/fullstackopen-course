import { DiaryI } from "../types";

export default function Diary ({diary}: {diary: DiaryI}) {
  return (
    <article>
      <strong>{diary.date}</strong>
      <p>Visibility: {diary.visibility}</p>
      <p>Weather: {diary.weather}</p>
      <p>{diary.comment}</p>
    </article>
  )
}