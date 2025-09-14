# Overhear Builder.io Project - AI Development Guidelines

## Project Overview
This is a Next.js website with dual Builder.io integration:
1. **Traditional Builder.io (Publish)** - For content management and visual editing
2. **Builder.io Projects** - For visual code development and AI-assisted programming

## Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **CMS**: Builder.io (dual integration)
- **Future**: Firebase integration planned

## Development Workflows

### Traditional Builder.io (Content Management)
- Colleagues edit content at builder.io
- Custom components built in Cursor appear in visual editor
- Content changes published instantly to website
- Use for: Content updates, page layouts, marketing materials

### Builder.io Projects (Code Development)
- Visual code editing through Builder's interface
- AI-assisted component generation
- Direct codebase editing capabilities
- Use for: Component development, prototyping, rapid iteration

## Component Development Guidelines

### For Traditional Builder.io Components
```typescript
// Example: Hero component pattern
export function Hero({ title, subtitle, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Component implementation */}
    </section>
  )
}

// Register with Builder.io
builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Welcome' },
    // ... other inputs
  ],
})
```

### For Builder.io Projects Components
- Follow the same TypeScript patterns
- Ensure components work in both contexts
- Use Tailwind CSS for styling
- Include proper TypeScript interfaces

## File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage with Builder.io
│   └── [...slug]/         # Dynamic Builder.io pages
├── components/            # Reusable components
│   ├── BuilderPage.tsx    # Builder.io integration
│   └── Hero.tsx          # Custom Builder.io component
└── lib/
    └── builder.ts        # Builder.io configuration
```

## Styling Guidelines
- Use Tailwind CSS utility classes
- Mobile-first responsive design
- Follow existing component patterns
- Ensure accessibility compliance

## Integration Points
- Builder.io API key in .env.local
- Custom components registered in BuilderPage.tsx
- Dynamic routing for Builder.io content
- Future Firebase integration planned

## Best Practices
- Keep components focused and reusable
- Use proper TypeScript typing
- Follow React best practices
- Document component props and usage
- Test components in both Builder.io contexts
