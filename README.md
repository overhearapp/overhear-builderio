# Overhear Builder.io Project

A Next.js website with **dual Builder.io integration**, providing both content management and visual code development capabilities. Your colleagues can edit content through a visual editor whilst you handle technical implementation, and you can also use Builder.io Projects for AI-assisted visual code development.

## 🚀 Quick Start

### 1. Set up Builder.io Account
1. Go to [builder.io](https://builder.io) and create a free account
2. Create a new project and choose "Next.js" as your framework
3. Copy your API key from the project settings

### 2. Configure Environment Variables
1. Open `.env.local` in your project root
2. Replace `your-builder-api-key-here` with your actual Builder.io API key:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=your-actual-api-key-here
   ```

### 3. Install Dependencies & Run
```bash
npm install
npm run dev
```

Your site will be available at `http://localhost:3000`

## 🎯 Two Development Approaches

### **Approach 1: Traditional Builder.io (Content Management)**
Perfect for your colleagues who need to edit content without touching code.

**For Your Colleagues:**
1. **Go to Builder.io**: Visit [builder.io](https://builder.io) and log in
2. **Select your project**: Choose the project you created
3. **Use the Visual Editor**: 
   - Drag and drop components
   - Edit text and images
   - Resize and rearrange elements
   - Preview changes in real-time
   - Publish updates instantly

**Available Components:**
- **Hero Section**: Full-width hero with title, subtitle, button, and background image
- **Text Blocks**: Rich text editing
- **Images**: Upload and manage images
- **Buttons**: Customisable call-to-action buttons

### **Approach 2: Builder.io Projects (Visual Code Development)**
Perfect for you to develop components visually with AI assistance.

**For You (Visual Code Development):**
1. **Start your dev server**: `npm run dev`
2. **Launch Builder.io Projects**: `npx "@builder.io/dev-tools@latest" launch`
3. **Edit code visually**: 
   - Generate components with AI prompts
   - Edit your actual source code through Builder's interface
   - Use AI assistance for rapid prototyping
   - Make changes directly to your codebase

## 🛠️ Technical Development

### Project Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage with Builder.io integration
│   └── [...slug]/
│       └── page.tsx          # Dynamic pages from Builder.io
├── components/
│   ├── BuilderPage.tsx       # Main Builder.io component
│   └── Hero.tsx             # Custom Hero component
└── lib/
    └── builder.ts           # Builder.io configuration

# Builder.io Projects Configuration
builder.config.json          # Projects configuration
.builderrules               # AI development rules
AGENTS.md                   # AI context and guidelines
```

### Adding Custom Components (Both Approaches)

**For Traditional Builder.io:**
1. Create a new component in `src/components/`
2. Register it with Builder.io using `builder.registerComponent()`
3. Import it in `BuilderPage.tsx`
4. Your colleagues can now use it in the visual editor

**For Builder.io Projects:**
1. Use the visual editor to generate components with AI
2. Or create components in Cursor following the same patterns
3. Components work in both contexts automatically

### Configuration Files

- **`builder.config.json`**: Configures Builder.io Projects integration
- **`.builderrules`**: Defines AI coding standards and patterns
- **`AGENTS.md`**: Provides context for AI-assisted development

### Firebase Integration (Coming Soon)
The project is set up to easily integrate with Firebase for dynamic data.

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Builder.io Projects Commands
npx "@builder.io/dev-tools@latest" launch    # Launch Builder.io Projects
npx builder.io@latest launch                 # Alternative launch command
```

## 📝 Next Steps

1. **Get your Builder.io API key** and update `.env.local`
2. **Test Traditional Builder.io**: Create a page at [builder.io](https://builder.io)
3. **Test Builder.io Projects**: Run `npm run dev` then `npx "@builder.io/dev-tools@latest" launch`
4. **Add more custom components** using either approach
5. **Set up Firebase integration** for dynamic data
6. **Invite your colleagues** to the Builder.io project

## 🆘 Troubleshooting

- **API Key Issues**: Make sure your `NEXT_PUBLIC_BUILDER_API_KEY` is correct
- **Components Not Showing**: Ensure components are registered with `builder.registerComponent()`
- **Build Errors**: Check that all imports are correct and components are properly exported

## 📚 Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Builder.io Visual Editor Guide](https://www.builder.io/c/docs/visual-editor)