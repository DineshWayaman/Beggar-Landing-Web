#!/bin/bash
set -e
echo "Cleaning old landing page clone..."
rm -rf Beggar-Landing-Web
echo "Cloning Next.js landing page..."
git clone --single-branch --branch main https://github.com/DineshWayaman/Beggar-Landing-Web.git
echo "Creating .env.local for Next.js app..."
cat << EOF > Beggar-Landing-Web/.env.local
EMAIL_USER=globeviksoftware@gmail.com
EMAIL_PASS=euhibaxhnxpbtgii
EOF
echo "Building and starting Docker containers..."
docker compose down
docker compose build --no-cache
docker compose up -d
echo "Landing page updated and all services are up and running."
