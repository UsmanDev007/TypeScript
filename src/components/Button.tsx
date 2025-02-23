import { ButtonBase } from '@mui/material'
import React from 'react'
interface ButtonProps{
    label:string
    bgcolor:string
    color:string
}
const Button:React.FC<ButtonProps> = ({label,bgcolor,color}) => {
  return (
     <>
      <ButtonBase sx={{
        backgroundColor: bgcolor,
        color: color,
        padding: "12px 24px",
        borderRadius: "2px",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "#0056b3",
          transform: "scale(1.05)",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
        },
      }}>  
        {label}
      </ButtonBase>
     </>
  )
}

export default Button
