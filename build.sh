#!/bin/bash
# Print current directory for debugging
echo "Starting build process in directory:"
pwd
echo "Listing current directory:"
ls -la

# Change directory to the Next.js project
cd portfolio_nextjs
echo "Changed to portfolio_nextjs directory:"
pwd
echo "Listing portfolio_nextjs directory:"
ls -la

# List app directory to see if it exists
echo "Checking app directory:"
ls -la app || echo "App directory does not exist yet"

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the build script
echo "Running build script..."
npm run build 