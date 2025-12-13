
Peach Tree Plumbing Website Blueprint
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

### Pages
*   **Homepage**: Includes a hero section, services overview, customer testimonials, FAQ, and a blog post carousel.
*   **Services Page**: Detailed descriptions of plumbing services.
*   **Blog**: A collection of articles with tips and information. Individual blog posts are rendered from a Supabase backend.
*   **Contact Page**: A form for customer inquiries.
*   **Static Pages**: Disclaimer, Privacy Policy, Terms of Service, Copyright Notice, and Cookie Consent.

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
    - Validated the changes with linting and a production build.
