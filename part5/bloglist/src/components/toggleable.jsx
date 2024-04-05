import { useState } from 'react'

/**
 * Toggleable component
 * @param {{visible: boolean, toggleVisible: () => void, buttonLabel: string, children: import('react').ReactNode}} param0 props
 * @returns JSX
 */
export default function Toggleable ({ visible: defaultVisible, buttonLabel, children }) {
  const [visible, setVisible] = useState(defaultVisible)

  const toggleVisible = () => {
    setVisible(v => !v)
  }

  return (
    <div>
      {visible && children}
      <button onClick={toggleVisible}>{visible ? 'Cancel' : buttonLabel}</button>
    </div>
  )
}
