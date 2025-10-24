# WarmPaws - Pet Care in Winter

[Live Demo](#https://warmpaws-pet-care-in-win-a8d38.web.app/)

## Project Overview

**WarmPaws** is a responsive and interactive web application designed for pet
owners to explore winter-specific pet care services, expert veterinarians, and
recommended products. Users can log in, manage their profile, book appointments
with veterinarians, and browse pet care products.

This project leverages React, Firebase Authentication, and modern frontend
libraries for animations and interactivity.

---

## Features

### User Authentication

- Sign up, log in, and log out functionality.
- Google login integration using Firebase Authentication.
- Forgot password and password reset via email.

### Expert Veterinarians

- View a list of experienced vets with images, specialization, education, and
  location.
- Modal-based appointment booking with form submission.
- Ratings displayed with star visualization.

### Services Slider

- Interactive image slider showcasing top services.
- "Book Now" functionality navigates to service detail pages.
- Autoplay and looped slides with smooth transitions.

### Products Section

- Grid display of pet care products with image, description, and price.
- Animated hover effects using AOS and Framer Motion.
- "Buy Now" button triggers a toast notification.

### User Profile

- Update profile with name and photo.
- Display user information (name, email, avatar).
- Loading indicators for authentication state.

### Navigation

- Responsive navbar with mobile menu toggle.
- Conditional rendering based on authentication status.
- User avatar dropdown with email and display name.

### Footer

- Contact information and social media links.
- Legal links (Privacy Policy and Terms of Service).
- Fully responsive with hover effects on links and icons.

---

## Technologies & NPM Packages Used

- **React**: Component-based UI library.
- **React Router DOM**: Routing for multi-page navigation.
- **Firebase**: Authentication services.
- **react-icons**: Icons library (Fa, Fc, Hi series).
- **react-hot-toast**: Toast notifications.
- **react-toastify**: Optional toast notifications (used in some components).
- **Swiper**: Responsive sliders/carousels.
- **Framer Motion**: Animations for interactive UI.
- **AOS (Animate On Scroll)**: Scroll-based animations.
- **Tailwind CSS**: Utility-first styling framework.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alaminislam3203/WarmPaws-Pet-Care-in-Winter.git
   cd warmpaws
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) to view it in the
   browser.

---

## Project Structure (Key Files)

```
src/
├─ assets/                # Images & icons
├─ components/            # Reusable components (Navbar, Footer, SwipeSlider)
├─ pages/                 # Page-level components (Home, Login, Profile, ExpertVets)
├─ provider/              # Auth context provider
├─ firebase.config.js     # Firebase initialization
└─ App.jsx
```

---
