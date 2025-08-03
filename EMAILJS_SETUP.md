# EmailJS Setup Guide

To make the contact form functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{user_name}} Name: {{user_name}} Email:
{{user_email}} Subject: {{subject}} Message: {{message}}
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## 5. Update the Contact Component

Replace the placeholder values in `src/components/Contact.tsx`:

```javascript
const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // Replace with your service ID
const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // Replace with your template ID
const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"; // Replace with your public key
```

## 6. Test the Form

1. Start your development server
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Free Plan Limits

- EmailJS free plan allows 200 emails per month
- Perfect for portfolio websites

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure template variables match form field names

## Security Note

The public key is safe to use in frontend code, but keep your private keys secure.
