interface EmailTemplateProps {
  email: string
}

export function EmailTemplate({ email }: EmailTemplateProps) {
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to GitDox - Your AI Documentation Companion</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        color: white;
        text-align: center;
        padding: 20px;
        border-radius: 8px 8px 0 0;
      }
      .content {
        padding: 20px;
      }
      .cta-button {
        display: inline-block;
        background-color: #2575fc;
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 6px;
        margin: 20px 0;
      }
      .footer {
        text-align: center;
        color: #777;
        font-size: 12px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to GitDox 🚀</h1>
        <p>Automated Documentation, Simplified</p>
      </div>
      
      <div class="content">
        <p>Hello Developer,</p>
        
        <p>Thank you for joining the GitDox waitlist! You're about to experience a revolution in software documentation.</p>
        
        <p><strong>What Makes GitDox Unique?</strong></p>
        <ul>
          <li>🤖 AI-Powered Documentation Generation</li>
          <li>🔍 Contextual Code Analysis</li>
          <li>🔄 Continuous Documentation Sync</li>
          <li>🛡️ Intelligent Context Preservation</li>
        </ul>
        
        <p>We're building a tool that transforms documentation from a tedious task to an intelligent, automated process. No more outdated docs or manual updates!</p>
        <p>Your email (${email}) has been added to our early access list. We'll notify you as soon as we're ready to onboard your team.</p>
        <p>Stay curious, stay innovative!</p>
        <p>Best regards,<br>The GitDox Team</p>
      </div>
      <div class="footer">
        <p>© 2025 GitDox. Revolutionizing Software Documentation.</p>
        <p>If you didn't sign up for our waitlist, please ignore this email.</p>
      </div>
    </div>
  </body>
</html>
  `
}

