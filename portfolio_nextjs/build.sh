#!/bin/bash

# Print current directory for debugging
pwd
echo "Listing current directory:"
ls -la

# Remove the existing mjs config (since we now have a js one)
rm -f postcss.config.mjs

# Install dependencies including TailwindCSS
npm install tailwindcss@3.4.1 postcss autoprefixer --save-dev

# Initialize Tailwind if needed
npx tailwindcss init -p

# Verify the app directory structure
echo "Verifying app directory structure:"
ls -la app || mkdir -p app

# Fix the issue with the duplicate CSS files
echo "Checking for duplicate CSS files..."
if [ -d app/styles ] && [ -f app/styles/globals.css ]; then
  echo "Found app/styles/globals.css - fixing the issue"
  # Add Tailwind directives to the top of the styles/globals.css file
  sed -i '1i@tailwind base;\n@tailwind components;\n@tailwind utilities;' app/styles/globals.css
  # Alternatively, if we want to use only one globals.css file, uncomment the following line:
  # rm -f app/styles/globals.css
fi

# Check if app/globals.css exists, otherwise create it
if [ ! -f app/globals.css ]; then
  echo "Creating app/globals.css"
  cat > app/globals.css << EOL
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3b82f6;
    --secondary-color: #2563eb;
    --text-color: #ffffff;
    --light-text: #bfdbfe;
    --background: #0f172a;
    --card-bg: #1e293b;
    --transition: all 0.3s ease;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background);
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 50% 50%, rgba(191, 219, 254, 0.05) 0%, transparent 30%);
}
EOL
  echo "Content of app/globals.css:"
  cat app/globals.css
else
  echo "app/globals.css already exists with content:"
  cat app/globals.css
fi

# Create a copy of the CSS file in the expected locations (for redundancy)
echo "Creating redundant copies of CSS files for safety"
cp app/globals.css ./globals.css
mkdir -p .next/static/css
cp app/globals.css .next/static/css/globals.css

# List app directory again to verify
echo "App directory after setup:"
ls -la app

# Copy layout.tsx to ensure it's there and has the correct import
if [ -f app/layout.tsx ]; then
  echo "app/layout.tsx exists"
  cat app/layout.tsx
else
  echo "Creating app/layout.tsx"
  cat > app/layout.tsx << EOL
import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shane Fitzpatrick - Portfolio',
  description: 'Data Science Portfolio of Shane Fitzpatrick',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
EOL
fi

# Build the project
npm run build 