import type { Notification } from '@/types'

export default function Notification ({ notification, close }: {
  notification: Notification | null
  close: () => void
}) {
  if (notification === null) return null
  
  setTimeout(close, 5_000)

  return (
    <div className={`notification ${notification.type}`}>
      <p>{notification.message}</p>
    </div>
  )
}