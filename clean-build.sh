#!/bin/bash

# Remove build artifacts and caches
rm -rf .next
rm -rf node_modules
rm -rf .vercel

# Reinstall dependencies
yarn install

# Build the project
yarn build 