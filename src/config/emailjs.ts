/**
 * EmailJS Configuration
 * 
 * This file contains all EmailJS settings for sending contact form emails.
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Sign up at https://www.emailjs.com/ (free tier available)
 * 
 * 2. Add an Email Service:
 *    - Go to "Email Services" → "Add New Service"
 *    - Connect Gmail, Outlook, or another email provider
 *    - Copy the Service ID and paste it below
 * 
 * 3. Create an Email Template:
 *    - Go to "Email Templates" → "Create New Template"
 *    - Set "To Email" to: contact@vyanaglobal.com
 *    - Set "From Name" to: {{firstName}} {{lastName}}
 *    - Set "Reply To" to: {{email}}
 *    - Use these variables in your template:
 *      * {{firstName}} - User's first name
 *      * {{lastName}} - User's last name
 *      * {{email}} - User's email address
 *      * {{company}} - User's company name (or "Not provided")
 *      * {{message}} - User's message
 *      * {{to_email}} - Recipient email (contact@vyanaglobal.com)
 *      * {{bcc_email}} - BCC email address
 * 
 *    Example Template Content:
 *    ---
 *    Subject: New Contact Form Submission from {{firstName}} {{lastName}}
 *    
 *    You have received a new message from your website contact form.
 *    
 *    Name: {{firstName}} {{lastName}}
 *    Email: {{email}}
 *    Company: {{company}}
 *    
 *    Message:
 *    {{message}}
 *    ---
 * 
 * 4. Get your credentials:
 *    - Public Key: Account → General → API Keys → Public Key
 *    - Service ID: Email Services → your service → Service ID
 *    - Template ID: Email Templates → your template → Template ID
 * 
 * 5. Replace the placeholder values below with your actual credentials
 */

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account → General → API Keys)
  publicKey: "YOUR_PUBLIC_KEY",
  
  // Your EmailJS Service ID (found in Email Services → your service)
  serviceId: "YOUR_SERVICE_ID",
  
  // Your EmailJS Template ID (found in Email Templates → your template)
  templateId: "YOUR_TEMPLATE_ID",
  
  // Recipient email address (where form submissions will be sent)
  recipientEmail: "contact@vyanaglobal.com",
  
  // Optional: BCC email address (for backup/copy of emails)
  bccEmail: "mohitdetwani83@gmail.com",
};

/**
 * Template variables that will be sent to EmailJS
 * These match the variables used in your EmailJS template
 */
export type EmailJSTemplateParams = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  to_email: string;
  bcc_email: string;
};

/**
 * Helper function to create template parameters for EmailJS
 */
export function createEmailJSParams(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}): EmailJSTemplateParams {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    company: data.company || "Not provided",
    message: data.message,
    to_email: EMAILJS_CONFIG.recipientEmail,
    bcc_email: EMAILJS_CONFIG.bccEmail,
  };
}

