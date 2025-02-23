import React from 'react'
import Button from '../components/Button'
import { Box } from '@mui/material'

const Contact:React.FC = () => {
  return (
    <Box  sx={{display:"flex",gap:"4px"}}>
      <Button label='hello' bgcolor='green' color='white'/>
      <Button label='usman' bgcolor='blue'  color='white'/>
      <Button label='helfflo' bgcolor='yellow' color='white'/>
    </Box>
  )
}

export default Contact
