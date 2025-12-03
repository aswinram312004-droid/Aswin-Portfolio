# 🚀 Aswin Portfolio – Modern Animated Personal Website

A fully responsive, highly animated, business-focused portfolio website built with  
**React, TypeScript, Vite, Tailwind CSS, shadcn-ui, Framer Motion, Supabase & Resend.**

This portfolio is designed to:

- Showcase my **skills, projects, and experience**
- Provide a **smooth, modern, animated user experience**
- Allow visitors to **contact me directly** via a working email form

---

## ✨ Highlights

- 🎨 **Modern UI** – Clean, minimal, and professional design  
- 📱 **Fully Responsive** – Works perfectly on mobile, tablet, and desktop  
- 🎬 **Smooth Animations** – Framer Motion used for sections, buttons, cards & background elements  
- 🧠 **Data Vibes** – Floating data & analytics themed icons in the hero section  
- 📩 **Functional Contact Form** – Sends emails directly to my inbox using Supabase Edge Functions + Resend  
- ⚡ **Fast & Optimized** – Powered by Vite and TypeScript

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ React
- 🧩 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧱 shadcn-ui
- 🎥 Framer Motion

**Backend / Services**
- 🗄️ Supabase (Edge Function)
- ✉️ Resend (Email delivery)

---

## 🧱 Main Features in Detail

### 🎯 Hero Section
- Animated headline and subtext  
- Smooth, looping background animation  
- Floating **data / analytics icons** with subtle motion (always moving)  
- Call-to-action buttons (e.g., View Projects, Download Resume)

### 📚 Sections
- About  
- Skills  
- Projects  
- Experience  
- Contact  

Each section uses scroll-based animations and smooth transitions.

### ✉️ Contact Form (With Email Backend)
- Fields: **Name, Email, Subject, Message**
- Validation for required fields and email format
- On submit:
  - Data is sent to a **Supabase Edge Function**
  - Edge Function uses **Resend** to send an email to my inbox
- Shows:
  - ✅ Success toast/message when sent  
  - ❌ Error toast/message if something fails  

---

## 📂 Project Structure

```bash
.
├── src
│   ├── components      # Reusable UI components
│   ├── pages           # Main pages (Home, NotFound, etc.)
│   ├── lib             # Utility functions (helpers)
│   ├── main.tsx        # App entry point
│   └── styles          # Global styles (if any)
├── supabase
│   ├── config.toml
│   └── functions
│       └── send-contact-email
│           └── index.ts # Edge function for sending emails
├── public              # Static assets (icons, images)
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
