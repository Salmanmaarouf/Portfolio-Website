# Portfolio Website - React Version

This is the React version of the personal portfolio website. The original HTML/CSS/JavaScript project has been converted to a modern React application while maintaining the exact same functionality and appearance.

## Features

- **Modern React Architecture**: Built with React 18, React Router, and modern hooks
- **Responsive Design**: Maintains the original responsive layout and animations
- **Contact Form**: Fully functional contact form with backend integration
- **Blog System**: Individual blog post pages with proper routing
- **Smooth Animations**: All original CSS animations and transitions preserved
- **Social Links**: LinkedIn and GitHub integration
- **Mobile Optimized**: Responsive design for all screen sizes

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components (Home, About, Projects, etc.)
├── hooks/              # Custom React hooks
├── styles/             # CSS files
├── App.js              # Main App component with routing
└── index.js            # React entry point

server/                 # Node.js/Express backend
├── server.js           # Express server with API endpoints
└── package.json        # Server dependencies

public/
└── images/             # Static images and assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install server dependencies:
```bash
cd server && npm install && cd ..
```

### Running the Application

#### Development Mode (React + Server)

Run both the React development server and the backend server:

```bash
npm run dev
```

This will start:
- React development server on http://localhost:3000
- Express server on http://localhost:3001

#### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the production server:
```bash
npm run server
```

The application will be available at http://localhost:3000

#### Alternative: Build and Serve in One Command

```bash
npm run build-and-serve
```

## Environment Variables

Create a `.env` file in the `server/` directory for email functionality:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Available Scripts

- `npm start` - Start React development server
- `npm run build` - Build React app for production
- `npm run server` - Start Express server
- `npm run dev` - Start both React and server in development
- `npm run build-and-serve` - Build React app and start server

## Routes

- `/` - Home page
- `/about` - About page
- `/projects` - Projects page
- `/blogs` - Blogs & Commentaries page
- `/contact` - Contact page
- `/blogs/blog1.html` - Individual blog post

## Key Features Converted

### 1. Navigation
- React Router for client-side routing
- Smooth page transitions maintained
- All original button styles and hover effects preserved

### 2. Contact Form
- React state management for form handling
- Async/await for API calls
- Original validation and error handling
- Success/error message display

### 3. Animations
- CSS animations converted to React-compatible format
- Ripple effect recreated as React hook
- Page transition effects maintained
- Image drop-in and content slide-in animations

### 4. Responsive Design
- All original CSS media queries preserved
- Mobile-first responsive layout
- Touch-friendly button interactions

### 5. Blog System
- Individual blog post routing
- Blog-specific styling maintained
- Source links and formatting preserved

## Backend Integration

The Express server handles:
- Static file serving for the React build
- Contact form submissions via `/send` endpoint
- Image serving from `/images` route
- React Router fallback for SPA routing

## Deployment

The application can be deployed to any platform that supports Node.js:

1. Build the React app: `npm run build`
2. Deploy the entire project (including `server/` directory)
3. Set environment variables for email functionality
4. Start the server: `npm run server`

## Differences from Original

While maintaining 100% visual and functional compatibility, the React version offers:

- **Better Performance**: React's virtual DOM and optimization
- **Maintainability**: Component-based architecture
- **Scalability**: Easy to add new features and pages
- **Modern Development**: Hot reloading, better debugging tools
- **SEO Ready**: Can be enhanced with SSR if needed

The user experience remains identical to the original HTML version.


