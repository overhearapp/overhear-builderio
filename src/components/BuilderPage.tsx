'use client'

import { BuilderComponent, builder } from '@builder.io/react'
import { builder as builderConfig } from '@/lib/builder'
import '@/components/Hero' // Register Hero component

interface BuilderPageProps {
  model: string
  content?: any
}

export default function BuilderPage({ model, content }: BuilderPageProps) {
  return (
    <BuilderComponent
      model={model}
      content={content}
      apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
    />
  )
}
