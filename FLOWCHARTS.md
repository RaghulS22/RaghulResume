# Application Flow Diagrams

## 1. Overall Application Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      User Opens Website                     │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   index.html Loads                           │
│  • Loads root div                                            │
│  • Imports main.tsx script                                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   main.tsx Executes                          │
│  • Imports React                                             │
│  • Imports App component                                     │
│  • Renders App to root div                                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│               App.tsx Initializes                            │
│  • Sets up BrowserRouter                                     │
│  • Renders Header (always visible)                           │
│  • Renders Routes (main content area)                        │
│  • Renders Footer (always visible)                           │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│            Router Determines Current Page                    │
│                                                              │
│  URL: /          → Home Page                                 │
│  URL: /about     → About Page                                │
│  URL: /experience → Experience Page                          │
│  URL: /projects   → Projects Page                            │
│  URL: /skills     → Skills Page                              │
│  URL: /contact    → Contact Page                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                 Page Component Renders                       │
│  • Imports data from resumeData.ts                           │
│  • Maps over arrays to create UI elements                    │
│  • Applies Tailwind CSS classes                              │
│  • Displays content to user                                  │
└─────────────────────────────────────────────────────────────┘
```

## 2. Navigation Flow

```
┌─────────────────┐
│  User on Home   │
│     Page        │
└────────┬────────┘
         │
         │ Clicks "Projects" link
         ▼
┌─────────────────────────────────┐
│  Header Component               │
│  • Detects click event          │
│  • React Router intercepts      │
└────────┬────────────────────────┘
         │
         │ Prevents default browser navigation
         ▼
┌─────────────────────────────────┐
│  React Router                   │
│  • Updates browser URL          │
│  • Updates internal state       │
│  • NO page reload!              │
└────────┬────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│  Routes Component               │
│  • Matches URL to route         │
│  • Unmounts old component       │
│  • Mounts new component         │
└────────┬────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│  Projects Page Renders          │
│  • Fetches project data         │
│  • Displays project cards       │
└─────────────────────────────────┘
```

## 3. Data Flow Architecture

```
┌──────────────────────────────────────────────────────────┐
│              resumeData.ts (Data Source)                  │
│  ┌────────────────────────────────────────────────┐      │
│  │  • personalInfo: PersonalInfo                  │      │
│  │  • experiences: Experience[]                   │      │
│  │  • projects: Project[]                         │      │
│  │  • skills: Skill[]                             │      │
│  │  • education: Education[]                      │      │
│  └────────────────────────────────────────────────┘      │
└──────────────────────┬───────────────────────────────────┘
                       │
         ┌─────────────┼─────────────┬─────────────┐
         │             │             │             │
         ▼             ▼             ▼             ▼
    ┌────────┐   ┌──────────┐  ┌──────────┐  ┌─────────┐
    │  Home  │   │  About   │  │Experience│  │Projects │
    │  Page  │   │   Page   │  │   Page   │  │  Page   │
    └───┬────┘   └────┬─────┘  └────┬─────┘  └────┬────┘
        │             │              │             │
        │ Displays    │ Displays     │ Displays    │ Displays
        │ bio         │ education    │ work        │ portfolio
        │             │              │ history     │
        ▼             ▼              ▼             ▼
    ┌──────────────────────────────────────────────────┐
    │           TypeScript Type Checking               │
    │  Ensures data matches interface definitions      │
    └──────────────────────────────────────────────────┘
```

## 4. Component Rendering Flow

```
                      ┌──────────┐
                      │   App    │
                      └────┬─────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
      ┌────────┐      ┌────────┐     ┌────────┐
      │ Header │      │ Routes │     │ Footer │
      └────────┘      └───┬────┘     └────────┘
                          │
                          │ Based on URL path
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
   ┌────────┐        ┌─────────┐      ┌──────────┐
   │  Home  │        │ About   │      │ Projects │
   │  Page  │        │  Page   │      │   Page   │
   └────────┘        └─────────┘      └──────────┘
        │
        │ Renders child components
        │
        ▼
   ┌────────────────────────────────┐
   │  • Hero Section                │
   │  • Features Section            │
   │  • CTA Section                 │
   └────────────────────────────────┘
```

## 5. Form Submission Flow (Contact Page)

```
┌─────────────────┐
│  User fills     │
│  contact form   │
└────────┬────────┘
         │
         │ Types in input field
         ▼
┌──────────────────────────────┐
│  onChange Event Handler      │
│  • Captures input value      │
│  • Updates formData state    │
└────────┬─────────────────────┘
         │
         │ React re-renders with new state
         ▼
┌──────────────────────────────┐
│  Form displays updated value │
└────────┬─────────────────────┘
         │
         │ User clicks "Send"
         ▼
┌──────────────────────────────┐
│  onSubmit Event Handler      │
│  • Prevents default          │
│  • Validates form data       │
│  • Calls handleSubmit()      │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Handle Submit Function      │
│  • Logs form data            │
│  • Sets isSubmitted = true   │
│  • Shows success message     │
└────────┬─────────────────────┘
         │
         │ After 3 seconds
         ▼
┌──────────────────────────────┐
│  Reset Form                  │
│  • Clear form fields         │
│  • Hide success message      │
└──────────────────────────────┘
```

## 6. State Management Flow

```
┌────────────────────────────────────────┐
│         Component State                │
│                                        │
│  const [state, setState] = useState()  │
└──────────────┬─────────────────────────┘
               │
               │ Initial state set
               ▼
┌────────────────────────────────────────┐
│     Component First Render             │
│  • Uses initial state value            │
└──────────────┬─────────────────────────┘
               │
               │ User interaction triggers state update
               ▼
┌────────────────────────────────────────┐
│     setState() Called                  │
│  • New state value provided            │
│  • React schedules re-render           │
└──────────────┬─────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│     Component Re-renders               │
│  • Uses new state value                │
│  • UI updates automatically            │
└────────────────────────────────────────┘
```

## 7. Build & Deployment Flow

```
┌────────────────┐
│  Source Code   │
│  (TypeScript)  │
└───────┬────────┘
        │
        │ npm run build
        ▼
┌────────────────────────────┐
│  TypeScript Compiler       │
│  • Checks types            │
│  • Compiles to JavaScript  │
└───────┬────────────────────┘
        │
        ▼
┌────────────────────────────┐
│  Tailwind CSS              │
│  • Processes utilities     │
│  • Removes unused styles   │
│  • Minifies CSS            │
└───────┬────────────────────┘
        │
        ▼
┌────────────────────────────┐
│  Vite Bundler              │
│  • Bundles modules         │
│  • Optimizes assets        │
│  • Code splitting          │
│  • Minifies code           │
└───────┬────────────────────┘
        │
        ▼
┌────────────────────────────┐
│  /dist Folder              │
│  • index.html              │
│  • bundled.js              │
│  • styles.css              │
│  • assets/                 │
└───────┬────────────────────┘
        │
        │ Deploy
        ▼
┌────────────────────────────┐
│  Hosting Service           │
│  (Netlify/Vercel/GitHub)   │
│  • Serves static files     │
│  • HTTPS enabled           │
│  • CDN distribution        │
└────────────────────────────┘
```

## 8. Responsive Design Flow

```
┌──────────────────┐
│  Screen Size     │
│  Detection       │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌──────────┐
│ Mobile │ │ Desktop  │
│ <768px │ │ ≥768px   │
└───┬────┘ └────┬─────┘
    │           │
    │           │ Tailwind applies appropriate classes
    │           │
    ▼           ▼
┌────────────────────────┐
│  Tailwind Responsive   │
│  Classes Applied       │
│                        │
│  md:grid-cols-2        │
│  • Mobile: 1 column    │
│  • Desktop: 2 columns  │
└────────────────────────┘
```

## 9. React Component Lifecycle

```
┌────────────────────┐
│  Component Created │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Component Mounts  │
│  • First render    │
│  • useEffect runs  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Component Active  │
│  • Handles events  │
│  • State updates   │
│  • Re-renders      │
└─────────┬──────────┘
          │
          │ User navigates away
          ▼
┌────────────────────┐
│ Component Unmounts │
│  • Cleanup runs    │
│  • Memory freed    │
└────────────────────┘
```

## 10. Type Safety Flow

```
┌───────────────────────┐
│  Define Interface     │
│  types/index.ts       │
│                       │
│  interface Project {  │
│    id: number;        │
│    title: string;     │
│  }                    │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│  Use in Data          │
│  resumeData.ts        │
│                       │
│  const projects:      │
│    Project[] = [...] │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│  TypeScript Compiler  │
│  • Checks types       │
│  • Shows errors       │
│  • Provides hints     │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│  Compile Success ✓    │
│  or                   │
│  Type Error ✗         │
└───────────────────────┘
```

These flowcharts illustrate the key processes and data flows in the application!
