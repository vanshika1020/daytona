#!/bin/bash
# CRUD Web App Launch Script

echo "Starting CRUD Web Application..."
echo "================================="

# Add .NET to PATH
export PATH="$PATH:/home/ubuntu/.dotnet"

# Set environment variables
export DOTNET_CLI_TELEMETRY_OPTOUT=1
export ASPNETCORE_ENVIRONMENT=Development

# Run the application
echo "Running dotnet run..."
echo "Access the application at:"
echo "  - https://localhost:5001"
echo "  - http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the application"
echo "======================================"

dotnet run