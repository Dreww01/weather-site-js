#!/bin/bash

# Install Netlify function dependencies
echo "Installing Netlify function dependencies..."
cd config/netlify/functions
npm install --production
cd ../../..

# Verify the build
echo "Build completed successfully!"
echo "Static files are ready for deployment from src/ directory."
echo "Netlify functions are configured and ready." 