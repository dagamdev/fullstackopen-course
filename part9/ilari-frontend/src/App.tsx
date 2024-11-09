import { useEffect, useState } from 'react'
import type { DiaryI } from './types'
import Diary from './components/diary'
import AddForm from './components/add-form'
import { getAllDiaries } from './lib/api'

function App() {
  const [diaries, setDiaries] = useState<DiaryI[]>([])

  useEffect(() => {
    getAllDiaries().then(data => {
      console.log(data)
      setDiaries(data)
    }).catch(console.error)
  }, [])

  return (
    <main>
      <AddForm />
      <section>
        <h2>Diary entries</h2>

        {diaries.map(diary => <Diary key={diary.id} diary={diary}/>)}
      </section>
    </main>
  )
}

export default App
