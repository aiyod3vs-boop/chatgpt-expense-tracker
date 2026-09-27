# HomeLedger v2 — Production-oriented household finance app

## What is included
- Shared household model for husband/wife/other members
- Secure random session tokens stored hashed in PostgreSQL
- Expense + income create/edit/delete
- Household-safe category/member validation
- Search and activity timeline
- Monthly dashboard and cash-flow charts
- Budgets with actual spending
- Recurring expenses
- Savings goals
- Partner invitations
- Custom categories
- Audit log API
- CSV export
- Vercel Blob receipt upload API
- Email-ready password reset and partner invitation flows
- Mobile-first responsive navigation and polished UI
- Prisma/PostgreSQL and Vercel ready

## Environment
Copy `.env.example` to `.env`.
Required: DATABASE_URL, AUTH_SECRET.
Optional: NEXT_PUBLIC_APP_URL, BLOB_READ_WRITE_TOKEN, RESEND_API_KEY, EMAIL_FROM.

## Local
npm install
npx prisma db push
npm run dev

## Vercel
Add DATABASE_URL and AUTH_SECRET to Vercel Environment Variables. If you want receipt uploads, add BLOB_READ_WRITE_TOKEN. Deploy.

## Important production checklist
1. Use a managed PostgreSQL provider such as Neon with automated backups.
2. Use a strong AUTH_SECRET.
3. Keep the repository private if desired.
4. Configure Vercel environment variables separately for Production/Preview.
5. Add a custom domain and HTTPS.
6. Configure BLOB_READ_WRITE_TOKEN before enabling receipt uploads.
7. Before public launch, add an email provider for invitation/password-reset delivery, monitoring, rate limiting and formal Prisma migrations.
