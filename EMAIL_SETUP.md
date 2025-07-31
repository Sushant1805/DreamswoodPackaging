# Email Setup Guide for Contact Form

## Overview
The contact form is configured to send emails to `202302040002@mitaoe.ac.in` using EmailJS service.

## Current Status
- ✅ Contact form with all required fields
- ✅ Form validation and error handling
- ✅ Test email function (logs to console)
- ⚠️ EmailJS integration ready but needs configuration

## Quick Test
1. Fill out the contact form on the website
2. Submit the form
3. Check browser console (F12) to see the email data that would be sent

## To Enable Real Email Sending

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note the Service ID (e.g., "service_dreamswood")

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Submission - Dreamswood Packaging

Dear Team,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested: {{service}}

Message:
{{message}}

---
This email was sent from the Dreamswood Packaging contact form.
Reply to: {{reply_to}}
```

4. Save the template and note the Template ID

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your "Public Key"
3. Copy this key

### Step 5: Update Configuration
1. Open `src/utils/emailConfig.js`
2. Replace the placeholder values:
   - SERVICE_ID: Your service ID from step 2
   - TEMPLATE_ID: Your template ID from step 3
   - PUBLIC_KEY: Your public key from step 4

### Step 6: Enable EmailJS in Contact Form
1. Open `src/components/UI/ContactForm.jsx`
2. Comment out the test function line:
   ```javascript
   // await sendTestEmail(formData);
   ```
3. Uncomment the EmailJS code block (lines marked with /* */)

## Form Fields Captured
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Company Name (optional)
- Service Selection (required)
- Message/Requirements (required)

## Email Destination
All form submissions will be sent to: `202302040002@mitaoe.ac.in`

## Testing
1. **Development**: Currently logs form data to console
2. **Production**: Will send actual emails once EmailJS is configured

## Security Notes
- EmailJS handles email sending securely
- No sensitive credentials are exposed in frontend code
- Form includes basic validation and spam protection

## Troubleshooting
- Check browser console for any error messages
- Verify EmailJS service is active
- Ensure email template variables match the code
- Test with a simple email first

## Cost
- EmailJS free tier: 200 emails/month
- Paid plans available for higher volume
