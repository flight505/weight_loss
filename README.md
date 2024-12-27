# Slanklet - Medical Weight Loss Clinic Website

A modern, responsive website for Dr. Peyman's medical weight loss clinic built with Next.js 14 and TypeScript.

## Technology Stack

### Core Technologies
- **Next.js 14**: React framework with App Router for server-side rendering and routing
- **TypeScript**: For type-safe code and better developer experience
- **React 18**: For building user interfaces with server components
- **Node.js**: Runtime environment

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: High-quality UI components built on Radix UI
- **Radix UI**: Unstyled, accessible UI components
- **Lucide Icons**: Beautiful, consistent icon set

### State Management & Forms
- **React Hook Form**: Form validation and handling
- **Zod**: TypeScript-first schema validation
- **NUQS**: URL search params state management

### Performance & Optimization
- **Next.js Image**: Automatic image optimization
- **Turbopack**: Fast development builds
- **CSS Modules**: Scoped styling solution

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for code quality
- **Vercel**: Deployment platform

## Key Features

### User Interface
- Responsive design with mobile-first approach
- Modern, feminine aesthetic with carefully chosen color palette
- Smooth animations and transitions
- Accessible components following WCAG guidelines

### Components
- Dynamic before/after image slider
- Interactive booking system
- Contact form with validation
- Responsive navigation
- Treatment information pages
- Testimonials showcase

### Performance
- Server-side rendering for fast initial load
- Image optimization and lazy loading
- Route prefetching
- Optimized Core Web Vitals

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (routes)/       # Route groups
│   ├── api/            # API routes
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── ui/            # UI components
│   ├── layout/        # Layout components
│   └── forms/         # Form components
├── lib/               # Utility functions
├── styles/           # Global styles
└── types/            # TypeScript types
```

## Image Guidelines

For the before/after slider component, use the following image specifications:
- **Width**: 1792px (3584px for 2x)
- **Height**: 784px (1568px for 2x)
- **Format**: WebP or PNG
- **Location**: `/public/images/`

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/flight505/weight_loss.git
\`\`\`

2. Install dependencies:
\`\`\`bash
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site is deployed on Vercel. Each push to the main branch triggers an automatic deployment.

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is private and proprietary. All rights reserved.
