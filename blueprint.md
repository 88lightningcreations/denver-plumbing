
# Peach Tree Plumbing Website Blueprint

## Overview

This document outlines the design, features, and development plan for the Peach Tree Plumbing website. The goal is to create a visually appealing, user-friendly, and trustworthy online presence that reflects the brand's friendly and professional image.

## Style and Design

The website's design is based on the provided hero image, which features a friendly plumber in a peach orchard. The aesthetic is warm, inviting, and slightly retro, emphasizing trustworthiness and quality service. The entire site has been migrated to use Bootstrap for a consistent and responsive design.

### Color Palette

- **Primary**: `#3A506B` (Deep Blue - from overalls)
- **Secondary**: `#FFCDB2` (Peach - from the fruit)
- **Accent**: `#E07A5F` (Terracotta Red - from the wrench)
- **Neutral (Light)**: `#F4F1DE` (Off-white/Tan - from the image background)
- **Neutral (Dark)**: `#3D405B` (Dark Green/Brown - from the text in the image)
- **Success**: `#81B29A` (Muted Green - from the grass)

### Typography

- **Headings**: "Lilita One", a bold and friendly sans-serif font from Google Fonts.
- **Body**: "Lato", a clean and readable sans-serif font from Google Fonts.

## Features

### General

*   **Navbar**: A persistent navbar with the brand name and a clickable phone number that directs to a call on mobile or the Google Business Profile on desktop.
*   **Footer**: A consistent footer across all pages.
*   **Cookie Consent Banner**: A non-intrusive banner bar at the bottom of the screen to inform users about cookie usage and to link to relevant policies. It is implemented using `vanilla-cookieconsent`.

### Pages

*   **Homepage**: Includes a hero section, services overview, customer testimonials, FAQ, and a blog post carousel.
*   **Blog**: A collection of articles with tips and information. Individual blog posts are rendered from a Supabase backend.
*   **Contact Page**: A form for customer inquiries.
*   **Static Pages**: Disclaimer, Privacy Policy, Terms of Service, Copyright Notice, and a new Cookie Policy.
*   **Not Found (404) Page**: A custom, user-friendly page to handle invalid URLs.

## Technical Implementation

### Markdown Rendering

-   **Component**: `app/components/Markdown.tsx` is the single source of truth for rendering markdown content throughout the application.
-   **Styling**: Consistent styling for all markdown content is provided by `app/components/Markdown.module.css`.
-   **Usage**: The `Markdown` component should be used whenever content from a CMS or database needs to be rendered on a page.

## Development Plan

### Completed Tasks

- **Static Pages**: Created Disclaimer, Privacy Policy, and Terms of Service pages.
- **Layout**: Ensured the footer remains at the bottom of the viewport.
- **Markdown Refactor**: 
    - Created a reusable `Markdown` component to handle all markdown rendering.
    - Centralized all markdown styling into a single CSS module.
    - Refactored the blog post page to use the new `Markdown` component.
- **Blog Post Integration**:
    - Integrated the blog post carousel on the homepage to fetch and display real data from Supabase.
    - Ensured individual blog post pages correctly display the full post content.
- **Image Error Handling**:
    - Implemented a fallback to a placeholder image for blog posts that are missing an image URL.
    - Corrected the aspect ratio of images in the article carousel and blog post pages.
- **Article Carousel Overhaul**:
    - **New Implementation**: Replaced the Bootstrap carousel with a custom, CSS-driven infinite scrolling marquee for a more modern and fluid user experience.
    - **Continuous Motion**: The carousel now scrolls smoothly and continuously in a single direction.
    - **Pause on Hover**: The animation automatically pauses when the user hovers their mouse over the articles, allowing them to read and click.
    - **Seamless Loop**: The list of articles is duplicated to create an infinite, uninterrupted loop.
    - **Performance**: The first few images are prioritized to improve load times and the Largest Contentful Paint (LCP) score.
- **Cookie Consent Banner**:
    - **Policy Page**: Created a new static page at `/cookie-policy`.
    - **Library**: Installed and configured the `vanilla-cookieconsent` library.
    - **Component**: Created a client component (`CookieConsent.tsx`) to manage the banner's logic.
    - **Integration**: Added the component to the root layout to ensure it appears on all pages.
    - **Layout Update**: Changed the banner style from an intrusive "box" to a less obtrusive "bar" at the bottom of the screen to improve user experience.
- **Critical Error Handling & Bug Fixes**:
    - **404 Handling**: Created a custom `app/not-found.tsx` page to gracefully handle `NEXT_NOT_FOUND` errors, providing a user-friendly experience for invalid URLs.
    - **Parallel Routes Warning**: Created `app/default.tsx` to satisfy the Next.js App Router's expectation for a default component, silencing a console warning without affecting the UI.
    - **`TypeError: Illegal invocation` Fix**: Corrected the data fetching logic in `app/[slug]/page.tsx`, ensuring `notFound()` is called correctly to prevent critical rendering errors.
