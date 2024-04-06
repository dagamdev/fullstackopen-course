import { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Toggleable component
 * @param {{buttonLabel: string, children: import('react').ReactNode}} param0 props
 * @returns JSX
 */
export default function Toggleable ({ buttonLabel, children }) {
  const [visible, setVisible] = useState(false)

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

Toggleable.propTypes = {
  buttonLabel: PropTypes.func.isRequired
}
