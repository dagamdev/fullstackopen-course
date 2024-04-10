import { createContext, useReducer, useContext, useEffect } from "react"

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return action.payload
    case "DELETE":
      return null
    default:
      return state
  }
}

export const NotificationContext = createContext()

export default function NotificacionContextProvider ({children}) {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null)

  useEffect(() => {
    if (notification) {
      let timeout = setTimeout(() => {
        notificationDispatch({type: 'DELETE'})
      }, 5_000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [notification])

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}