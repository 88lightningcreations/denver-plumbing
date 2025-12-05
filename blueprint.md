# Peach Tree Plumbing Website Blueprint

## Overview

This document outlines the design, features, and development plan for the Peach Tree Plumbing website. The goal is to create a visually appealing, user-friendly, and trustworthy online presence that reflects the brand's friendly and professional image.

## Style and Design

The website's design is based on the provided hero image, which features a friendly plumber in a peach orchard. The aesthetic is warm, inviting, and slightly retro, emphasizing trustworthiness and quality service.

### Color Palette

*   **Primary:** `#3A506B` (Deep Blue - from overalls)
*   **Secondary:** `#FFCDB2` (Peach - from the fruit)
*   **Accent:** `#E07A5F` (Terracotta Red - from the wrench)
*   **Neutral (Light):** `#F4F1DE` (Off-white/Tan - from the image background)
*   **Neutral (Dark):** `#3D405B` (Dark Green/Brown - from the text in the image)
*   **Success:** `#81B29A` (Muted Green - from the grass)

### Typography

*   **Headings:** "Lilita One", a bold and friendly sans-serif font from Google Fonts.
*   **Body:** "Lato", a clean and readable sans-serif font from Google Fonts.

### Visual Elements

*   **Hero Image:** The main illustration will be prominently featured on the homepage.
*   **Rounded Corners:** Buttons, cards, and other UI elements will have rounded corners to match the soft, illustrative style of the hero image.
*   **Subtle Textures:** A subtle noise texture may be applied to backgrounds to add a premium, tactile feel, similar to the texture in the hero image.

## Features

*   **Homepage:**
    *   Hero section with the main illustration and a clear call-to-action.
    *   Services overview.
    *   Customer testimonials/FAQ.
    *   Blog post carousel.
*   **Services Page:** Detailed descriptions of the plumbing services offered.
*   **Blog:** A collection of articles with tips and information related to plumbing.
*   **Contact Page:** A simple form for customers to get in touch.

## Current Plan

*   **Task:** Redesign the website based on the provided hero image.
    1.  **Save Image:** Save the hero image to the `public` directory.
    2.  **Create `blueprint.md`:** Document the design plan.
    3.  **Update Global Styles:**
        *   Modify `app/globals.css` to import the new fonts from Google Fonts.
        *   Update `tailwind.config.ts` (or equivalent) with the new color palette.
    4.  **Restructure Homepage (`app/page.tsx`):**
        *   Create a new hero section with a split-screen layout.
        *   Restyle the `CallToAction`, `Services`, `FAQ`, and `ArticleCarousel` components.
    5.  **Update `NavigationBar.tsx`:** Adjust the navigation bar style to match the new design.
    6.  **Review and Refine:** Ensure a consistent and polished look across the entire site.
