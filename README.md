# AmberStudent Clone

A high-fidelity replication of the [AmberStudent](https://amberstudent.com/) student accommodation platform.

## 🚀 Technologies Used

- **React.js**: Core frontend framework.
- **Tailwind CSS**: Utility-first CSS for styling and responsive design.
- **React Router**: For seamless navigation between pages.
- **Lucide React**: For consistent and beautiful iconography.
- **Motion (Framer Motion)**: For smooth animations and transitions.
- **Local Storage**: Used for persistent user authentication and session management.

## 🛠️ Approach & Implementation

### 1. Design Analysis & Replication
- **Layout**: Analyzed the original site's structure, focusing on the sticky navbar, hero section with search, and grid-based city listings.
- **Typography & Colors**: Used "Inter" as the primary font and implemented the signature Amber reddish-orange (`#ff5a5f`) as the primary theme color.
- **Responsiveness**: Implemented a mobile-first approach using Tailwind's responsive utilities (`sm:`, `md:`, `lg:`).

### 2. Authentication & Authorization
- **AuthContext**: Created a custom React Context to manage authentication state globally.
- **Local Storage**: Implemented logic to store user data and credentials in `localStorage` to simulate a persistent backend.
- **Protected Routes**: (Optional) Can be added to restrict access to certain pages like "My Bookings".

### 3. Performance Optimization
- **Lazy Loading**: Used `React.lazy` and `Suspense` for code-splitting, ensuring that page-specific code is only loaded when needed.
- **Asset Optimization**: Used high-quality external images from Unsplash to ensure fast loading and visual appeal.

### 4. Components
- **Navbar**: Features dynamic styling based on scroll position and user auth state.
- **Hero**: A high-impact section with a prominent search bar and value propositions.
- **FeaturedCities**: A responsive grid showcasing popular locations with hover effects.
- **WhyChooseUs**: Highlights the platform's key benefits with clean iconography.
- **Footer**: A comprehensive multi-column footer with links and app download options.

## 📦 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
