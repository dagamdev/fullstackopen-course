import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

export default function Notification () {
  const notification = useSelector(({notification}) => notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setNotification(null))
    }, 5_000)

    return () => {
      clearTimeout(timeout)
    }
  }, [dispatch])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return notification && (
    <div style={style}>
      <p>{notification}</p>
    </div>
  )
}