import { hexToRgb } from "@mui/material/styles"

export const utilsMUIHexToRgba = (color:string, opacity:string)=>{
  const rgb = hexToRgb(color)
  const value = rgb.slice(3).replace("(","").replace(")","")
  return `rgba(${value},${opacity})`
}