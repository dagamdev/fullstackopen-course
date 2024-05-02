import { Box, Button } from '@chakra-ui/react'
import { useState, forwardRef, useImperativeHandle } from 'react'

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return visible
    ? <Box style={showWhenVisible}>
      {props.children}
      <Button colorScheme='red' onClick={toggleVisibility}>Cancel</Button>
    </Box>
    : <Button colorScheme='green' onClick={toggleVisibility}>{props.buttonLabel}</Button>
      
})

Togglable.displayName = 'Togglable'

export default Togglable