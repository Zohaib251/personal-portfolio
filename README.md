# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Contact form with email functionality
- Smooth animations with Framer Motion
- Modern UI/UX design

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Gmail App Password Setup

To enable the contact form email functionality, you need to set up a Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to your [Google Account settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification**
4. Scroll down to **App passwords**
5. Generate a new app password for "Mail"
6. Copy the 16-character password

### 3. Environment Configuration

1. Open the `.env` file in the root directory
2. Replace `your_gmail_app_password_here` with your actual Gmail app password:
   ```
   GMAIL_APP_PASSWORD=your_actual_16_character_password
   ```

### 4. Running the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```

This will start both:
- Frontend (Vite) on http://localhost:5173
- Backend (Express) on http://localhost:3001

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run dev:server
```

### 5. Testing the Contact Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox for the email notification

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   └── ...
├── server/
│   └── index.js        # Express server with Nodemailer
├── .env                # Environment variables
└── package.json
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, Nodemailer
- **Build Tool**: Vite
- **Email Service**: Gmail SMTP

## Deployment Notes

When deploying to production:
1. Update CORS origins in `server/index.js`
2. Set environment variables on your hosting platform
3. Ensure your Gmail app password is securely stored