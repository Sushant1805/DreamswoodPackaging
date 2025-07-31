// EmailJS Configuration
// To use this, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key from the Integration page

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_dreamswood',
  TEMPLATE_ID: 'template_contact',
  QUOTE_TEMPLATE_ID: 'template_quote',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  
  // Email template should include these variables:
  // {{to_email}} - The recipient email (202302040002@mitaoe.ac.in)
  // {{from_name}} - Sender's name
  // {{from_email}} - Sender's email
  // {{phone}} - Sender's phone
  // {{company}} - Sender's company
  // {{service}} - Selected service
  // {{message}} - Message content
  // {{reply_to}} - Reply-to email
  
  // Quote template variables:
  // {{product_type}} - Type of product
  // {{packaging_material}} - Material type
  // {{dimensions}} - Package dimensions
  // {{quantity}} - Order quantity
  // {{timeline}} - Project timeline
  // {{budget}} - Budget range
  // {{additional_requirements}} - Additional notes
};

// Alternative: Simple form handler (for testing without EmailJS)
export const sendTestEmail = (formData) => {
  console.log('📧 Email would be sent to: 202302040002@mitaoe.ac.in');
  console.log('📋 Form data:', formData);
  
  // Create email content
  const emailContent = `
    New Contact Form Submission
    ===========================
    
    From: ${formData.fullName}
    Email: ${formData.email}
    Phone: ${formData.phone || 'Not provided'}
    Company: ${formData.company || 'Not provided'}
    Service: ${formData.service}
    
    Message:
    ${formData.message}
    
    ---
    Sent from Dreamswood Packaging website
  `;
  
  console.log('📄 Email content:', emailContent);
  
  // Return a promise to simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

// Quote email test function
export const sendTestQuoteEmail = (formData) => {
  console.log('📧 Quote email would be sent to: 202302040002@mitaoe.ac.in');
  console.log('📋 Quote form data:', formData);
  
  // Create quote email content
  const emailContent = `
    New Quote Request - Dreamswood Packaging
    =======================================
    
    CONTACT INFORMATION:
    -------------------
    Name: ${formData.fullName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Company: ${formData.company || 'Not provided'}
    
    PRODUCT DETAILS:
    ---------------
    Product Type: ${formData.productType}
    Packaging Material: ${formData.packagingMaterial}
    Dimensions: ${formData.dimensions || 'Not specified'}
    Quantity: ${formData.quantity}
    
    PROJECT REQUIREMENTS:
    --------------------
    Timeline: ${formData.timeline}
    Budget Range: ${formData.budget || 'Not specified'}
    
    ADDITIONAL REQUIREMENTS:
    -----------------------
    ${formData.additionalRequirements || 'None specified'}
    
    ---
    Quote requested from Dreamswood Packaging website
    Timestamp: ${new Date().toLocaleString()}
  `;
  
  console.log('📄 Quote email content:', emailContent);
  
  // Return a promise to simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
};
