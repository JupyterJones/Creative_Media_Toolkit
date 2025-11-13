# Creative Media Toolkit

This is a powerful, client-side web application for creative image processing. Built with React, TypeScript, and Tailwind CSS, this toolkit provides an interactive interface for blending and compositing images using masks, all directly within your browser.

The application is designed for speed and interactivity, performing all image manipulations on the client-side using the HTML Canvas API. This means no backend server or API keys are required for the core image blending functionality.

## Core Features

-   **Interactive Image Compositor:** A three-panel user interface designed for an intuitive image blending workflow.
-   **Layer-Based Blending:** Easily assign images to **Top**, **Mask**, and **Bottom** layers.
-   **Client-Side Processing:** All image blending is done in the browser using the Canvas API, providing instant results without server-side processing.
-   **Asset Browser:** A built-in gallery allows you to browse and select from a predefined set of source images and masks.
-   **Real-time Preview:** Selected images for each layer are instantly displayed in their respective slots.
-   **Responsive Design:** The interface is fully responsive and works seamlessly on various screen sizes, from desktops to tablets.
-   **Modern Tech Stack:** Built with React, TypeScript, and styled with Tailwind CSS for a clean, maintainable, and modern codebase.

## Installation and Setup

To run this application locally, you'll need [Node.js](https://nodejs.org/) (v16 or later) and a package manager like `npm` or `yarn`.

**Step 1: Clone the repository**

First, clone the project to your local machine.

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

**Step 2: Install dependencies**

Install the required Node.js packages.

```bash
npm install
```
*(or `yarn install` if you use Yarn)*

**Step 3: Run the development server**

Start the local development server.

```bash
npm run dev
```
*(or `yarn dev`)*

The application should now be running and accessible at `http://localhost:5173` (or another port if specified in the terminal).

## How to Use the Application

The user interface is divided into three main columns to streamline the image blending process.

**1. The Asset Browser (Right Panel)**

-   This panel contains two tabs: **Images** and **Masks**.
-   Click on a tab to view the available assets.
-   Click on any image in the browser to select it. A modal will pop up.

**2. Assigning Images to Layers**

-   After selecting an asset, the modal will prompt you to assign it to a layer.
-   Click **Top**, **Mask**, or **Bottom** to assign the selected image to the corresponding slot in the Image Compositor.

**3. The Image Compositor (Left Panel)**

-   This panel contains three "slots" representing the layers of your composition.
-   As you assign images, they will appear as previews in these slots.
-   You can clear an image from a slot by clicking the **"✕"** button on its preview.
-   Use the **"Clear All"** button to reset all three slots.

**4. Blending Images**

-   Once all three slots (Top, Mask, and Bottom) have an image assigned, the **"Blend Images"** button will become active.
-   Click this button to start the blending process. A loading indicator will appear in the center panel.

**5. Viewing the Result (Center Panel)**

-   The center panel is the main display area.
-   Initially, it shows a placeholder text.
-   During processing, it shows a loading spinner.
-   Once the blending is complete, the final composited image will be displayed here.
-   If an error occurs, an error message will be shown instead.

## Project Structure

The project follows a standard React application structure.

```
/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── AssetBrowser.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ImageBlender.tsx
│   │   ├── ImageDisplay.tsx
│   │   └── ImageSlot.tsx
│   ├── services/          # Business logic and external APIs
│   │   └── imageService.ts  # Client-side image blending logic
│   ├── App.tsx            # Main application component
│   ├── constants.ts       # Hardcoded data (image URLs)
│   ├── index.css          # Global styles
│   ├── index.tsx          # Application entry point
│   └── types.ts           # TypeScript type definitions
├── index.html             # Main HTML file
└── README.md              # This file
```
