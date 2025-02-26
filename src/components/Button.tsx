import { ButtonBase } from '@mui/material'
import React from 'react'
interface ButtonProps{
    label:string
    bgcolor:string
    color:string
    onclick:()=>void
}
const CustomButton:React.FC<ButtonProps> = ({label,bgcolor,color,onclick}) => {
  return (
     <>
      <ButtonBase onClick={onclick} sx={{
        backgroundColor: bgcolor,
        color: color,
        padding: "12px 24px",
        borderRadius: "2px",
        width: "145px",
        height: "45px",
        fontSize: "13.5px",
        fontWeight: "bold",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
        },
      }}>  
        {label}
      </ButtonBase>
     </>
  )
}

export default CustomButton
