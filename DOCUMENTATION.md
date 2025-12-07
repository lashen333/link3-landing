# Link3 Landing Page Documentation

## Project Overview
This is a Next.js 14+ (App Router) project using TailwindCSS for styling and Framer Motion for animations.

## Getting Started
1.  **Install dependencies**: `npm install`
2.  **Run development server**: `npm run dev`
3.  **Build for production**: `npm run build`
4.  **Start production server**: `npm start`

## How to Edit Content

### Changing Copy
Most text content is directly in the component files in `src/components/`.
-   **Hero Headline/Subhead**: Edit `src/components/Hero.tsx`
-   **Features**: Edit the `features` array in `src/components/Features.tsx`
-   **FAQ**: Edit the `faqs` array in `src/components/FAQ.tsx`
-   **Testimonials**: Edit the `testimonials` array in `src/components/SocialProof.tsx`

### Updating Images & Assets
-   **Hero Device Mock**: The device mock is currently CSS/HTML based in `src/components/Hero.tsx`. To replace it with an image, remove the mock code and use the `<Image />` component.
-   **Video**: The demo video is a placeholder in `src/components/Demo.tsx`. Replace the placeholder div with a `<video>` tag or an `<iframe>` when you have the asset.

### Referral Logic
The referral logic is currently a stub in `src/components/WaitlistForm.tsx`.
-   **Current Behavior**: Generates a static link `https://link3.io/?ref=user_123`.
-   **To Implement**:
    1.  Integrate with your backend (Firebase/Supabase) to generate unique IDs for users.
    2.  Update `handleSubmit` in `WaitlistForm.tsx` to return the real unique link from the API response.
    3.  Update the `referralLink` state with the real link.

## Analytics & SEO
-   **SEO Tags**: Edit `src/app/layout.tsx` (Metadata object).
-   **Analytics**: Add your GTM or GA4 script in `src/app/layout.tsx` or use a third-party library like `@next/third-parties/google`.

## Deployment
This project is ready for deployment on Vercel or Firebase Hosting.
-   **Vercel**: Connect your GitHub repo and import the project. It will auto-detect Next.js.
-   **Firebase**: Run `firebase init hosting` and configure it to use `.next` (requires using `next export` or Firebase Cloud Functions for SSR). Recommended: Use Vercel for zero-config Next.js hosting.
