# Simplilearn Dallas Round Table - Event Landing Page

A pixel-perfect Next.js landing page for the Simplilearn Dallas Round Table event, featuring an integrated Airtable RSVP system.

## 🎯 Project Overview

This is an invite-only executive roundtable event landing page focused on "The Skills That Matter Next: Preparing Your Workforce & Leaders for the AI Era." The event will be held on **February 20, 2026** at Chamberlain's Steak & Fish House in Dallas, TX.

## ✨ Features

- **Pixel-Perfect Design**: 100% match with Figma design specifications
- **Airtable Integration**: Automatic RSVP submissions stored in Airtable database
- **Server Actions**: Modern Next.js 14 server actions for form handling
- **Responsive Design**: Fully optimized for all devices
- **Modern UI/UX**: Built with Tailwind CSS, featuring smooth animations with Framer Motion
- **Email Notifications**: Automated email confirmations via Airtable

## 🗄️ Airtable RSVP System

The application integrates with **Airtable** to manage event registrations:

### Database Structure
- **Table Name**: `Simplilearn RSVP`
- **Columns**:
  - `Name` (Single line text)
  - `Email` (Email)
  - `Company` (Single line text)
  - `Status` (Single select)
  - `Attachments` (Attachments)
  - `Date` (Date)

### How It Works
1. Users fill out the RSVP form on the landing page
2. Form data is submitted via Next.js Server Actions
3. Data is automatically stored in the Airtable database
4. Admins can view and manage RSVPs through the Airtable interface

![Airtable RSVP Database](https://github.com/captflag/Simplilearn-assesment/blob/main/public/airtable-screenshot.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun
- Airtable account and API credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/captflag/Simplilearn-assesment.git
   cd Simplilearn-assesment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key_here
   AIRTABLE_BASE_ID=your_airtable_base_id_here
   AIRTABLE_TABLE_NAME=Simplilearn RSVP
   ```

   **How to get your Airtable credentials:**
   - **API Key**: Go to [Airtable Account](https://airtable.com/account) → Generate API key
   - **Base ID**: Found in your Airtable base URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
   - **Table Name**: The name of your table (default: "Simplilearn RSVP")

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📁 Project Structure

```
assesment/
├── app/
│   ├── actions.ts          # Server actions for RSVP form submission
│   ├── globals.css         # Global styles and Tailwind configuration
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main landing page
├── components/
│   ├── AgendaSection.tsx   # Event agenda section
│   ├── FeaturesGrid.tsx    # "What We'll Explore" features
│   ├── Footer.tsx          # Page footer
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero banner with event details
│   ├── RSVPForm.tsx        # RSVP form component
│   └── SpeakersSection.tsx # Featured speakers section
├── public/
│   ├── hero-bg.png         # Hero background image
│   ├── rob.png             # Speaker photo
│   ├── krishna.png         # Speaker photo
│   └── sudipto.png         # Speaker photo
├── env.template            # Environment variables template
└── README.md
```

## 🎨 Design & Styling

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Typography**: Custom font configuration with Next.js Font optimization
- **Color Palette**:
  - Primary Orange: `#F5AB40`
  - Primary Blue: `#1D4DF4`
  - Cyan Accent: `#00FFFF`
  - Deep Navy: `#000B1C`

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## 📝 Key Sections

1. **Hero Section**: Event title, date, location, and CTA
2. **RSVP Banner**: Email contact information and button
3. **Quote Section**: Key question and event context
4. **What We'll Explore**: 6 feature cards highlighting topics
5. **Featured Speakers**: Profiles of Rob Lauber, Krishna Kumar, and Sudipto Mitra
6. **Go Behind the Curtain**: Event takeaways and benefits
7. **Event Agenda**: Session breakdown with timing
8. **RSVP Form**: Integrated Airtable submission form
9. **Footer**: Contact information and venue details

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Airtable](https://airtable.com/) - Database and CRM
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Lucide React](https://lucide.dev/) - Icon library

## 📧 RSVP Form Handling

The RSVP form uses Next.js Server Actions for seamless form submission:

```typescript
// app/actions.ts
export async function submitRSVP(formData: FormData) {
  // Extracts form data
  // Sends to Airtable API
  // Returns success/error response
}
```

All RSVP submissions are automatically stored in your Airtable base with:
- Full Name
- Corporate Email
- Company Name
- Submission Date
- Status (defaults to "Pending")

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

**Environment Variables to add in Vercel:**
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📸 Screenshots

### Airtable RSVP Management
The backend RSVP management system showing registered attendees:

![Airtable Database View](./docs/airtable-screenshot.png)

## 🤝 Contributing

This is a private event landing page project. For any questions or issues, please contact the development team.

## 📄 License

This project is proprietary and confidential. © 2026 Simplilearn Solutions. All Rights Reserved.

## 📞 Contact

For event inquiries, please contact:
- **Email**: siham.aba@simplilearn.net
- **Venue**: Chamberlain's Steak & Fish House, 5330 Belt Line Rd, Dallas, TX 75254
- **Date**: February 20, 2026

---

**Built with ❤️ for Simplilearn's Dallas Executive Round Table**
