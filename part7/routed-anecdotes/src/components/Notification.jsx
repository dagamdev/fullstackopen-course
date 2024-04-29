export default function Notification ({ notification }) {
  return (
    <div className="notification">
      <span>🔔 Notification</span>
      <p>{notification}</p>
    </div>
  )
}