#!/bin/bash

echo "========================================"
echo "Creating Subscription Tracker Structure"
echo "========================================"

# Root folders
mkdir -p src
mkdir -p logs
mkdir -p public
mkdir -p tests

# Source folders
mkdir -p src/config
mkdir -p src/controllers
mkdir -p src/middlewares
mkdir -p src/models
mkdir -p src/routes
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/validations
mkdir -p src/cache
mkdir -p src/security

# Main files
touch src/app.js
touch src/server.js

# Config files
touch .env
touch .env.example
touch .gitignore
touch README.md

echo "========================================"
echo "Project Structure Created Successfully!"
echo "========================================"