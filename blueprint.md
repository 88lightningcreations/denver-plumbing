# Project Overview

This project is a modern, responsive website for a plumbing business. It is built with Next.js and React Bootstrap. The application features a home page with a hero section, a "Why Choose Us" section, and a list of services. It also includes dedicated pages for each service and a blog. The data for services and blogs is designed to be fetched from Supabase, with a fallback to local JSON files.

## Design and Features

### Style and Design:
*   **Frameworks:** Next.js, React Bootstrap
*   **Layout:** Responsive design with a focus on a clean and modern user experience.
*   **Components:**
    *   **Header:** A navigation bar with links to Home, About, and Services.
    *   **Hero Section:** A prominent hero section on the homepage to attract users.
    *   **Why Choose Us:** A section detailing the company's value proposition.
    *   **Services Section:** A card-based layout showcasing the various plumbing services offered.
    *   **Service Pages:** Dedicated pages for each service with detailed descriptions.

### Features Implemented:
*   Homepage with Hero, "Why Choose Us", and Services sections.
*   Dynamic routing for individual service pages.
*   Data fetching layer in `lib/data.ts` for services.
*   Supabase client setup in `lib/supabaseClient.ts`.
*   Asynchronous Server Components for data fetching.

## Current Plan: Add Blog Functionality

### Overview
The goal is to add a blog to the website. This will involve creating pages to list blog posts and view individual posts. The data will be managed similarly to the services data, with a Supabase-ready data layer that currently uses a local JSON file.

### Steps:
1.  Create a `lib/blogs.json` file with static blog data.
2.  Update `lib/data.ts` to include `getBlogs` and `getBlog` functions with Supabase and JSON fallback logic.
3.  Create `app/blogs/page.tsx` to display the list of blog posts.
4.  Create `app/blogs/[id]/page.tsx` to display a single blog post.
5.  Update `app/components/Header.tsx` to add a "Blog" link to the navigation bar.
6.  Run `npm run lint` to check for errors.
