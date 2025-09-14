'use client'

import Image from 'next/image'
import React from 'react'

/**
 * Props for RawImg component
 */
export interface RawImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string
  width?: number
  height?: number
  alt?: string
  fetchpriority?: 'high' | 'low' | 'auto'
  className?: string
  style?: React.CSSProperties
}

/**
 * RawImg - thin wrapper around next/image that preserves props used in Builder output
 */
export const RawImg: React.FC<RawImgProps> = ({ image, alt = '', width, height, fetchpriority, className, style, ...rest }) => {
  return (
    // next/image requires numeric width/height or fill; we prefer numeric here
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
      fetchPriority={fetchpriority as any}
      className={className}
      style={style}
      {...(rest as any)}
    />
  )
}

export default RawImg
