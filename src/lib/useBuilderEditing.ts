'use client'

import { useEffect, useState } from 'react'

/**
 * Detect whether the current session is inside the Builder visual editor.
 * Uses heuristics: URL search params or document.referrer containing builder.io or "builder".
 * This is intentionally a best-effort client-side check to enable interactivity in the editor.
 */
export default function useBuilderEditing(): boolean {
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    try {
      const search = typeof window !== 'undefined' ? window.location.search : ''
      const ref = typeof document !== 'undefined' ? document.referrer : ''

      const checks = [
        search.includes('builder'),
        search.includes('editor'),
        search.includes('_builder'),
        ref.includes('builder.io'),
        ref.includes('builder-preview'),
      ]

      setIsEditing(checks.some(Boolean))
    } catch (e) {
      setIsEditing(false)
    }
  }, [])

  return isEditing
}
