# Vruddhi Capital Website

A modern, professional website for Vruddhi Capital — built with Next.js, Tailwind CSS, and Resend for email.

---

## TECH STACK

- Next.js 15 — Framework
- Tailwind CSS — Styling
- TypeScript — Type safety
- Resend — Contact form emails
- Vercel — Hosting (free)

---

## FOLDER STRUCTURE (understand every file)

```
vruddhi-capital/
│
├── app/                          ← All pages live here
│   ├── layout.tsx                ← Main layout (navbar + footer wrap all pages)
│   ├── page.tsx                  ← Home page (/)
│   ├── globals.css               ← Global styles and colors
│   ├── sitemap.ts                ← SEO sitemap for Google
│   ├── robots.ts                 ← Tells Google what to crawl
│   ├── not-found.tsx             ← 404 error page
│   │
│   ├── about/
│   │   └── page.tsx              ← About page (/about)
│   │
│   ├── portfolio/
│   │   └── page.tsx              ← Portfolio page (/portfolio)
│   │
│   ├── team/
│   │   └── page.tsx              ← Team page (/team)
│   │
│   ├── contact/
│   │   └── page.tsx              ← Contact page (/contact)
│   │
│   └── api/
│       └── contact/
│           └── route.ts          ← Backend API that sends emails via Resend
│
├── components/                   ← Reusable UI pieces
│   ├── Navbar.tsx                ← Top navigation bar
│   ├── Footer.tsx                ← Bottom footer
│   └── ContactForm.tsx           ← Contact form with validation
│
├── public/                       ← Static files (images, logo, favicon)
│   ├── logo.png                  ← PUT YOUR LOGO HERE
│   ├── favicon.ico               ← Browser tab icon
│   └── og-image.jpg              ← Social share image (1200x630px)
│
├── .env.example                  ← Template for environment variables
├── .env.local                    ← YOUR ACTUAL KEYS (never commit this!)
├── .gitignore                    ← Files Git should ignore
├── package.json                  ← Project dependencies list
├── tailwind.config.js            ← Tailwind color and font settings
├── tsconfig.json                 ← TypeScript settings
├── postcss.config.js             ← Required for Tailwind to work
└── next.config.js                ← Next.js settings
```

---

## STEP 1 — INSTALL REQUIRED TOOLS

### Install Node.js
Node.js is the engine that runs Next.js on your computer.

1. Go to https://nodejs.org
2. Download the LTS version (Long Term Support)
3. Install it (just click Next, Next, Finish)
4. Verify it installed — open Terminal (Mac) or Command Prompt (Windows):

```bash
node --version
# Should show something like: v20.11.0

npm --version
# Should show something like: 10.2.4
```

### Install VS Code (code editor)
1. Go to https://code.visualstudio.com
2. Download and install
3. Open VS Code

### Install Git
1. Go to https://git-scm.com
2. Download and install
3. Verify:

```bash
git --version
# Should show: git version 2.x.x
```

---

## STEP 2 — SET UP THE PROJECT

### Option A — Use this downloaded project
If you downloaded this project folder, open Terminal inside the folder:

```bash
# Navigate to the project folder
cd vruddhi-capital

# Install all dependencies (this downloads everything needed)
npm install
```

### Option B — Create fresh Next.js project
If starting from scratch:

```bash
npx create-next-app@latest vruddhi-capital
```

When it asks questions, answer:
- TypeScript? → Yes
- ESLint? → Yes
- Tailwind CSS? → Yes
- src/ directory? → No
- App Router? → Yes
- Import alias? → Yes (press Enter for default @/*)

Then navigate in:
```bash
cd vruddhi-capital
npm install resend framer-motion
```

---

## STEP 3 — ADD YOUR LOGO

1. Copy your logo file (PNG with transparent background is best)
2. Rename it to exactly: `logo.png`
3. Put it inside the `public/` folder

```
public/
└── logo.png   ← your logo goes here
```

Also add:
- `public/favicon.ico` — small icon for browser tab (can use same logo, convert at favicon.io)
- `public/og-image.jpg` — 1200x630px banner for WhatsApp/LinkedIn sharing (make on Canva)

---

## STEP 4 — SET UP EMAIL (Resend)

The contact form sends emails using a service called Resend.

### 4a — Create Resend account
1. Go to https://resend.com
2. Click "Sign Up" — it's free
3. Verify your email

### 4b — Get your API key
1. Log in to Resend dashboard
2. Click "API Keys" in left sidebar
3. Click "Create API Key"
4. Give it a name: "vruddhi-capital-website"
5. Click "Create"
6. COPY the key that appears (you only see it once!)

### 4c — Create your .env.local file
In your project root folder, create a new file called `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=pavan@vruddhicapital.com
```

Replace:
- `re_xxxxxxxxxxxxxxxxxxxx` with your actual Resend API key
- `pavan@vruddhicapital.com` with the email where you want to receive pitches

IMPORTANT: This file is in .gitignore — it will NEVER be uploaded to GitHub. Keep it safe.

### 4d — Verify your domain on Resend (for production)
When the site goes live, verify vruddhicapital.com on Resend:
1. Go to Resend → Domains → Add Domain
2. Type: vruddhicapital.com
3. Add the DNS records they show you (similar to how you added Vercel records)
4. Once verified, change the "from" email in route.ts from onboarding@resend.dev to hello@vruddhicapital.com

---

## STEP 5 — RUN LOCALLY

Start the development server:

```bash
npm run dev
```

Open your browser and go to:
```
http://localhost:3000
```

You will see the website running on your computer!

Other pages:
- http://localhost:3000/about
- http://localhost:3000/portfolio
- http://localhost:3000/team
- http://localhost:3000/contact

To stop the server: press Ctrl + C in terminal

---

## STEP 6 — CUSTOMIZE CONTENT

### Update team members
Open `app/team/page.tsx` and find this section:

```typescript
const teamMembers = [
  {
    name: "Team Member Name",      ← Change to real name
    role: "Founder & Managing Partner",  ← Change to real role
    bio: "Brief background...",    ← Change to real bio
    focus: ["Consumer", "Fintech"], ← Change to real focus areas
    initials: "TM",               ← Change to real initials
  },
```

### Update portfolio companies
Open `app/portfolio/page.tsx` and update `portfolioCompanies` array with real startup names.

### Update contact email
Open `.env.local` and change `CONTACT_EMAIL` to your real email.

### Update colors
Open `tailwind.config.js` — all brand colors are here:

```javascript
brand: {
  black: "#0A0A0A",        ← Main background
  orange: "#C4621D",       ← Primary accent (from your logo)
  "orange-light": "#D97B3A",
  "orange-dark": "#A34F15",
  gray: "#4A4A4A",
  "off-white": "#F5F0EB",  ← Main text color
}
```

---

## STEP 7 — DEPLOY TO VERCEL (make it live)

### 7a — Create GitHub account
1. Go to https://github.com
2. Create a free account
3. Create a new repository named: `vruddhi-capital`
4. Make it Private

### 7b — Push code to GitHub
Open terminal in your project folder:

```bash
git init
git add .
git commit -m "Initial commit — Vruddhi Capital website"
git remote add origin https://github.com/YOUR_USERNAME/vruddhi-capital.git
git branch -M main
git push -u origin main
```

Replace YOUR_USERNAME with your GitHub username.

### 7c — Deploy on Vercel
1. Go to https://vercel.com
2. Sign up with GitHub account
3. Click "Add New Project"
4. Select your `vruddhi-capital` repository
5. Click "Deploy" — Vercel auto-detects Next.js

### 7d — Add environment variables on Vercel
IMPORTANT — your .env.local is not on GitHub (it's in .gitignore).
You must add the keys manually on Vercel:

1. Go to your Vercel project
2. Click Settings → Environment Variables
3. Add:
   - Name: `RESEND_API_KEY` → Value: your key
   - Name: `CONTACT_EMAIL` → Value: your email
4. Click Save
5. Redeploy the project

### 7e — Add your custom domain
1. Vercel dashboard → your project → Settings → Domains
2. Type: vruddhicapital.com
3. Vercel shows you two DNS records (A record and CNAME)
4. Log in to wherever vruddhicapital.com is registered (GoDaddy, Namecheap etc.)
5. Go to DNS settings → add those two records
6. Wait 10–30 minutes
7. Site is live at https://vruddhicapital.com

---

## STEP 8 — SUBMIT TO GOOGLE (SEO)

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: https://vruddhicapital.com
4. Verify ownership (Google gives you options — easiest is HTML tag in Vercel)
5. Click "Sitemaps" in left menu
6. Submit: https://vruddhicapital.com/sitemap.xml
7. Google starts indexing in 2–3 days

---

## HOW EMAIL WORKS (simple explanation)

```
Founder fills form on website
        ↓
ContactForm.tsx sends data to /api/contact
        ↓
route.ts receives the data
        ↓
Resend API sends two emails:
  1. To you (pavan@vruddhicapital.com) — full pitch details
  2. To founder — confirmation "we received your pitch"
        ↓
Done! You reply directly from your inbox.
```

No database. No server. Just email. Simple and free.

---

## UPDATING THE SITE AFTER DEPLOYMENT

Every time you make changes:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel automatically rebuilds and updates the live site in ~30 seconds.

---

## COMMON ERRORS AND FIXES

**npm install fails**
- Make sure Node.js is installed: `node --version`
- Try: `npm install --legacy-peer-deps`

**Logo not showing**
- Check file is named exactly `logo.png` (lowercase)
- Check it is inside the `public/` folder
- Restart dev server: Ctrl+C then `npm run dev`

**Form not sending email**
- Check `.env.local` file exists in root folder
- Check RESEND_API_KEY is correct (no extra spaces)
- Check Resend dashboard for error logs

**Page shows error on Vercel but works locally**
- Most likely missing environment variables on Vercel
- Go to Vercel → Settings → Environment Variables and add them

**Fonts not loading**
- Check your internet connection (fonts load from Google Fonts)
- This is fine in production — just might look different offline

---

## QUICK COMMANDS REFERENCE

```bash
npm run dev      ← Start local development server
npm run build    ← Build for production (test before deploy)
npm run start    ← Run production build locally
npm run lint     ← Check for code errors
git add .        ← Stage all changes
git commit -m "" ← Save changes with a message
git push         ← Upload to GitHub (Vercel auto-deploys)
```

---

## CONTACT & HANDOVER

When handing this project to another developer, share:
- GitHub repository access
- Vercel account access (or transfer ownership)
- Resend account access
- The `.env.local` file contents (share securely, not over email)
- This README

---

Built with Next.js 15 · Tailwind CSS · Resend · Deployed on Vercel
