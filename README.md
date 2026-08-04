# Revival Fire

A modern church event website for Revival Fire 2026 with online registration, contact forms, an admin dashboard, and QR-based guest check-in.

## Features

- Online registration workflow
- Contact form submission
- Admin dashboard for registrations and messages
- QR check-in flow for guests
- Supabase-ready data layer for event records
- Resend-ready email confirmation flow

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy the environment template and fill in your secrets
   ```bash
   cp .env.example .env.local
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

## Environment variables

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- RESEND_API_KEY
- RESEND_FROM_EMAIL

## Deployment on Vercel

1. Connect the repository to Vercel.
2. Add the environment variables above in the Vercel project settings.
3. Deploy the project.

> If Supabase is not configured yet, the app will still render and allow local preview submissions without breaking the UI.
