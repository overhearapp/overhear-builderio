'use client'

import { builder } from '@builder.io/react'

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage?: string
}

export function Hero({ title, subtitle, buttonText, buttonLink, backgroundImage }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {subtitle}
        </p>
        <a
          href={buttonLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}

// Register the component with Builder.io (only when supported)
if (typeof builder?.registerComponent === 'function') {
  builder.registerComponent(Hero, {
    name: 'Hero',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Welcome to Our Website',
      },
      {
        name: 'subtitle',
        type: 'string',
        defaultValue: 'Create amazing experiences with Builder.io',
      },
      {
        name: 'buttonText',
        type: 'string',
        defaultValue: 'Get Started',
      },
      {
        name: 'buttonLink',
        type: 'string',
        defaultValue: '/contact',
      },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      },
    ],
  })
}
