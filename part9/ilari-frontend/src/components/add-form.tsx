import { type SyntheticEvent, useState } from "react"
import { VISIBILITY, WEATHER } from "../enums"
import { addNewDiary } from "../lib/api"
import { DiaryI } from "../types"
import axios from "axios"

function getObjectValues (object: object): string[] {
  return Object.values(object)
}

export default function AddForm () {
  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState<string>()

  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault()

    console.log({
      date,
      visibility,
      weather,
      comment
    })

    
    try {
      const diary = await addNewDiary({
        date,
        visibility: visibility as DiaryI['visibility'],
        weather: weather as DiaryI['weather'],
        comment
      })

      console.log(diary)

      setDate('')
      setVisibility('')
      setWeather('')
      setComment('')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new entry</h2>

      {error && <p className="error">{error}</p>}

      <label>
        <span>Date</span>
        <input
          value={date}
          onChange={({target}) => {
            setDate(target.value) 
            if (error) setError(undefined)
          }}
          type="text"
          required
        />
      </label>
      <label>
        <span>Visibility</span>
        <select
          value={visibility}
          onChange={({target}) => {
            setVisibility(target.value) 
            if (error) setError(undefined)
          }}
          required
        >
          {getObjectValues(VISIBILITY).map(v => <option key={v} value={v}>
            {v}
          </option>)}
        </select>
      </label>
      <label>
        <span>Weather</span>
        <select
          value={weather}
          onChange={({target}) => {
            setWeather(target.value) 
            if (error) setError(undefined)
          }}
          required
        >
          {getObjectValues(WEATHER).map(w => <option key={w} value={w}>
            {w}
          </option>)}
        </select>
      </label>
      <label>
        <span>Comment</span>
        <input
          type="text"
          value={comment}
          onChange={({target}) => {
            setComment(target.value) 
            if (error) setError(undefined)
          }}
          required
        />
      </label>

      <button>Add</button>
    </form>
  )
}