#!/bin/bash
# ============================================================
# Render.com Startup Script
# Handles: DB creation, schema push, seeding, and server start
# ============================================================

set -e

echo "============================================"
echo "  OSGU Library Website - Starting Up..."
echo "============================================"

# Ensure persistent data directory exists
mkdir -p /data

# Set DATABASE_URL to use persistent disk
export DATABASE_URL="file:/data/library.db"

# Check if database already exists
DB_EXISTS=false
if [ -f /data/library.db ]; then
  echo "[DB] Existing database found at /data/library.db"
  DB_EXISTS=true
else
  echo "[DB] No existing database found. Creating new one..."
fi

# Push schema to database (creates tables if not exist, safe to run on existing DB)
echo "[PRISMA] Running prisma db push..."
bunx prisma db push --skip-generate 2>&1 || {
  echo "[ERROR] Prisma db push failed!"
  exit 1
}
echo "[PRISMA] Schema push complete."

# Only seed if database is new (no admin user yet)
if [ "$DB_EXISTS" = false ]; then
  echo "[SEED] Seeding database with initial data..."
  bun run prisma/seed.ts 2>&1 || {
    echo "[WARNING] Seeding encountered issues (may be non-fatal)"
  }
  echo "[SEED] Database seeding complete."
else
  echo "[SEED] Skipping seed — database already has data."
fi

echo ""
echo "============================================"
echo "  Starting Next.js server on port ${PORT:-10000}"
echo "============================================"

# Start the Next.js server
# The standalone server.js respects HOST and PORT env vars
exec bun server.js
