# qpay-dashboard

# QPay Dashboard - Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 16.0 or higher recommended)
- **npm** (usually comes with Node.js)

You can check your Node.js and npm versions by running:
```bash
node --version
npm --version
```

## Installation Steps

1. **Clone or download the project** to your local machine
- git clone <link>

2. **Navigate to the project directory**:
```bash
cd qpay-dashboard
```

3. **Install all dependencies**:
```bash
npm install
```

This command will install all the required packages listed in `package.json`, including:
- React 19.1.1
- TypeScript
- Vite (build tool)
- Bootstrap 5.3.7
- React Bootstrap
- Axios for API calls
- QR Code generation libraries
- Material Design Icons

## Development

4. **Start the development server**:
```bash
npm run dev
```

This will:
- Start the Vite development server
- Compile TypeScript files
- Enable hot module replacement (HMR) for instant updates
- Open the application in your default browser (usually at `http://localhost:5173`)

## Additional Useful Commands

**Build for production**:
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

**Preview the production build**:
```bash
npm run preview
```
Serves the production build locally for testing.

**Run linting**:
```bash
npm run lint
```
Runs ESLint to check code quality and style.

## Project Structure

The project is organized as follows:
```
qpay-dashboard/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── Pages/       # Page components
│   ├── Context/     # React context providers
│   ├── service/     # API services
│   └── assets/      # Images and other assets
├── package.json     # Dependencies and scripts
├── vite.config.ts  # Vite configuration
└── tsconfig.json   # TypeScript configuration
```

## Technologies Used

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Bootstrap 5** and **React Bootstrap** for styling
- **React Router DOM** for navigation
- **Axios** for HTTP requests
- **QR Code React** for QR code generation
- **Material Design Icons** for icons

## Troubleshooting

If you encounter issues:

1. **Clear npm cache**:
```bash
npm cache clean --force
```

2. **Delete node_modules and reinstall**:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Check Node.js version compatibility** - ensure you're using Node.js 16+


## QPay Dashboard - Architecture & Approach Documentation
## Project Overview
The QPay Dashboard is a React TypeScript application built with Vite that provides a comprehensive interface for managing QR code payments, user profiles, and transaction history.

## Technology Stack
Frontend Framework: React 19.1.1 with TypeScript
Build Tool: Vite 7.1.2
Routing: React Router DOM 7.8.2
HTTP Client: Axios 1.11.0
UI Framework: Bootstrap 5.3.7 + React Bootstrap 2.10.10
QR Generation: qrcode.react 4.2.0
Icons: @mdi/font, @mdi/js, @mdi/react, react-icons

## Architecture Pattern
The project follows a Component-Based Architecture with clear separation of concerns:
1. Application Structure
src/
├── components/          # Reusable UI components
├── Pages/              # Route-level page components
├── Context/            # Global state management
├── service/            # API service layer
├── assets/             # Static assets
└── App.tsx            # Main application component
2. State Management
Context API: Uses React Context for global state (user data)
Local State: Individual components manage their own state using useState hooks
No external state management library (Redux, Zustand, etc.)
3. Routing Architecture
Single Page Application with client-side routing

## Route structure:
/ - Home dashboard
/qr - QR code management
/profile - User profile
/history - Transaction history
4. API Service Layer
Axios-based HTTP client with pre-configured base URL
Bearer token authentication (currently hardcoded - needs improvement)
Modular service functions (currently only fetchTransactions)
5. Component Architecture
Presentational Components: Focus on UI rendering (ProfileCard, QRPreview, etc.)
Container Components: Handle business logic and data fetching (Pages)
Layout Components: Provide structural layout (Sidebar, Topbar)

## Key Design Decisions
1. Modular Component Design
Components are designed to be reusable and focused on single responsibilities:
ProfileCard: Displays user information
QRPreview: Handles QR code generation and display
StatusSection: Shows transaction status information
2. Responsive Design
Uses Bootstrap grid system for responsive layouts
Flexbox-based main layout structure
Mobile-friendly navigation with sidebar
3. Type Safety
Full TypeScript implementation
Type definitions for components and API responses
Enhanced development experience with type checking

## Development Workflow
Development: npm run dev (Vite dev server)
Build: npm run build (TypeScript compilation + Vite build)
Linting: ESLint with React-specific rules
Preview: npm run preview (production build preview)

## Areas for Improvement
Authentication: Move the hardcoded token to environment variables or the auth service
State Management: Consider more robust state management for complex states
Error Handling: Add comprehensive error handling for API calls
Testing: Implement unit and integration tests
API Service: Expand service layer with more endpoints and better error handling
Scalability Considerations
Component-based architecture supports easy feature addition
Context API can be extended for more global state needs
The service layer is modular and can be expanded
Vite provides excellent build performance for a growing codebase
