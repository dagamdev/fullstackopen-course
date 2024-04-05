import { useEffect } from 'react'

/**
 * Notification component
 * @param {{ notification: NotifiState, setNotification: SetState<NotifiState> }} param0 props
 * @returns JSX
 */
export default function Notification ({ notification, setNotification }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(null)
    }, 6_000)

    return () => {
      clearTimeout(timeout)
    }
  }, [notification])

  return (
    <div className={'notification ' + notification.type}>
      <p>{notification.message}</p>
    </div>
  )
}
