import { Button as B, styled, ButtonProps } from "@mui/material"

const Button = styled(B)<ButtonProps>(({ theme }) => ({
   borderRadius: theme.spacing(2),
   transition: "all ease-in-out 300ms",
   "&:hover":{
    transform: "scale(1.03)"
   }
}))

export const ButtonPrimary = styled(Button)<ButtonProps>(({ theme, variant }) => {
   if (variant === "contained")
      return {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.primary.contrastText,
         "&:hover": {
            backgroundColor: theme.palette.primary.light,
         },
      }
   if (variant === "outlined")
      return {
         backgroundColor: "transparent",
         border: `${theme.palette.primary.main} 1px solid`,
         color: theme.palette.primary.main,
         "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
         },
      }
  if(variant==="text")
    return {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.primary.light,
         },
    }
})


export const ButtonError = styled(Button)<ButtonProps>(({ theme, variant }) => {
   if (variant === "contained")
      return {
         backgroundColor: theme.palette.error.main,
         color: theme.palette.error.contrastText,
         "&:hover": {
            backgroundColor: theme.palette.error.light,
         },
      }
   if (variant === "outlined")
      return {
         backgroundColor: "transparent",
         border: `${theme.palette.error.main} 1px solid`,
         color: theme.palette.error.main,
         "&:hover": {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
         },
      }
  if(variant==="text")
    return {
        backgroundColor: "transparent",
        color: theme.palette.error.main,
        "&:hover": {
            color: theme.palette.error.light,
         },
    }
})