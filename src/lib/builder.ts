import { builder } from '@builder.io/react'

import { builder } from '@builder.io/react'

// Initialize Builder.io with your API key (only if provided)
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY)
}

export { builder }
