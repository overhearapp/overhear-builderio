# Overhear Builder.io Project

A Next.js website with Builder.io integration, allowing your colleagues to edit content through a visual editor whilst you handle the technical implementation.

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

## 👥 For Your Colleagues (Visual Editing)

Your colleagues can edit the website remotely by:

1. **Going to Builder.io**: Visit [builder.io](https://builder.io) and log in
2. **Selecting your project**: Choose the project you created
3. **Using the Visual Editor**: 
   - Drag and drop components
   - Edit text and images
   - Resize and rearrange elements
   - Preview changes in real-time
   - Publish updates instantly

### Available Components
- **Hero Section**: Full-width hero with title, subtitle, button, and background image
- **Text Blocks**: Rich text editing
- **Images**: Upload and manage images
- **Buttons**: Customisable call-to-action buttons

## 🛠️ For You (Technical Development)

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
```

### Adding Custom Components
1. Create a new component in `src/components/`
2. Register it with Builder.io using `builder.registerComponent()`
3. Import it in `BuilderPage.tsx`
4. Your colleagues can now use it in the visual editor

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
```

## 📝 Next Steps

1. **Get your Builder.io API key** and update `.env.local`
2. **Test the visual editor** by creating a page in Builder.io
3. **Add more custom components** as needed
4. **Set up Firebase integration** for dynamic data
5. **Invite your colleagues** to the Builder.io project

## 🆘 Troubleshooting

- **API Key Issues**: Make sure your `NEXT_PUBLIC_BUILDER_API_KEY` is correct
- **Components Not Showing**: Ensure components are registered with `builder.registerComponent()`
- **Build Errors**: Check that all imports are correct and components are properly exported

## 📚 Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Builder.io Visual Editor Guide](https://www.builder.io/c/docs/visual-editor)