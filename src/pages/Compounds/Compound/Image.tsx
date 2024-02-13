import { styled } from "@mui/material"
import { useGetCompoundImage } from "../../../data/hooks/useGetCompoundImage";
import { motion } from "framer-motion"
import { PropsWithChildren } from "react";

const CompoundImage: React.FC<Props> = ({
	picNum,
	picInfo,
	...defaultProps
}) => {
	const imgUrl = useGetCompoundImage(picNum)
	return <ImageContainer>
    <MotionImageWrapper>
        <Image {...defaultProps} src={imgUrl} alt={picInfo} />
    </MotionImageWrapper>
  </ImageContainer>
}
 
export default CompoundImage

/* ======================== */
/* Partial Components */

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  picNum: number
  picInfo: string
}

const ImageContainer = styled("div")(({theme})=>({
    height: 320,
    width: 320,
    borderRadius: 9999,
    overflow: "hidden",
    margin: "64px auto",
    [theme.breakpoints.down("md")]:{
      height: 160,
      width: 160,
      marginTop: "32px",
      marginBottom: "32px"
    }
}))
ImageContainer.defaultProps = {
  "aria-label": "img-container"
}

const Image = styled("img")(({})=>({
    height: "100%",
    width: "100%",
}))
Image.defaultProps = {
  "aria-label": "compound-image"
}

const MotionImageWrapper:React.FC<PropsWithChildren> = ({children})=>{
  return (
		<motion.div
			aria-label="img-motion-wrapper"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1, cursor: "pointer"}}
      style={{
        height: "100%",
        width: "100%",
      }}
		>
			{children}
		</motion.div>
  )
}