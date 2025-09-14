import React from 'react'

interface RawImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string
}

export function RawImg({ image, alt, style, ...rest }: RawImgProps) {
  return (
    // use a plain img to match 'raw' behavior
    <img src={image} alt={alt} style={style} {...rest} />
  )
}

export default RawImg
