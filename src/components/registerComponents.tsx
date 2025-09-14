'use client'

import { builder } from '@builder.io/react'
import { MainNav } from '@/components'
import RawImg from './RawImg'

// Register MainNav for Builder visual editor
if (typeof builder?.registerComponent === 'function') {
  builder.registerComponent(MainNav, {
    name: 'MainNav',
    canHaveChildren: true,
    inputs: [
      { name: 'className', type: 'string', defaultValue: '' },
    ],
  })

  // Register RawImg so editors can drop images that use the RawImg wrapper
  builder.registerComponent(RawImg, {
    name: 'RawImg',
    inputs: [
      { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'] },
      { name: 'alt', type: 'string', defaultValue: '' },
      { name: 'width', type: 'number' },
      { name: 'height', type: 'number' },
    ],
  })
}

export {}
