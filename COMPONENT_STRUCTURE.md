# Dreamswood Packaging - Component Structure

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Layout/          # Layout components (Navigation, Footer)
│   ├── Sections/        # Main page sections (Hero, About, Services, etc.)
│   ├── UI/              # Reusable UI components (Cards, Forms, etc.)
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   ├── useScrollHandler.js
│   └── index.js
├── styles/              # CSS files
│   ├── App.css
│   └── index.css
├── utils/               # Utility functions and constants
│   ├── constants.js
│   └── index.js
├── assets/              # Static assets
│   └── react.svg
├── App.jsx              # Main App component
└── main.jsx             # Application entry point
```

## Component Breakdown

### Layout Components
- **Navigation**: Top navigation bar with mobile menu functionality
- **Footer**: Site footer with links and social media

### Section Components
- **Hero**: Main landing section with statistics and CTA
- **About**: Company information and features
- **Services**: Service offerings with cards
- **Portfolio**: Project showcase
- **Contact**: Contact information and form

### UI Components
- **ServiceCard**: Reusable service display card
- **PortfolioItem**: Portfolio project item
- **ContactForm**: Contact form with validation
- **ContactMethod**: Contact method display
- **SocialLink**: Social media link component

### Custom Hooks
- **useScrollHandler**: Manages scroll state for navigation

### Constants & Utilities
- **constants.js**: Centralized constants for company info, navigation, etc.

## Usage

All components are exported from `src/components/index.js` for easy importing:

```jsx
import { Navigation, Hero, About } from './components';
```

Custom hooks are available from `src/hooks/index.js`:

```jsx
import { useScrollHandler } from './hooks';
```

## Development Guidelines

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **Reusability**: Extract common patterns into reusable UI components
3. **Props Interface**: Ensure components accept props for customization
4. **Styling**: Keep component-specific styles close to components
5. **Data Management**: Use constants file for static data that might change

## Future Enhancements

- Add PropTypes or TypeScript for type safety
- Implement React Router for multi-page navigation
- Add state management (Context API or Redux) if needed
- Create component stories for Storybook
- Add unit tests for components
