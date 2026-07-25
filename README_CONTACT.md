Contact form email setup
=========================

This project includes a Netlify Function at `/api/contact` (backed by `netlify/functions/contact.js`, redirected via `netlify.toml`) that sends form submissions using Resend.

Required environment variables (set in Netlify: Site settings → Environment variables):

- `RESEND_API_KEY` — your Resend API key
- `CONTACT_TO_EMAIL` — the email address that will receive contact form messages
- `RESEND_FROM_EMAIL` — the verified Resend sender address

Deployment / local testing

- On Netlify: add the three environment variables, then deploy. Netlify runs `netlify/functions/contact.js` for requests to `/api/contact` (see the redirect rule in `netlify.toml`).
- Locally: install the Netlify CLI (`npm install -g netlify-cli`) and run `netlify dev`, which serves the Vite app and proxies `/api/contact` to the local function.

Notes
- Resend requires the `from` address to be a verified sender/domain on your Resend account.
- If you prefer another provider (SendGrid, Mailgun, SES, SMTP), `netlify/functions/contact.js` can be adapted to use their SDK instead.
