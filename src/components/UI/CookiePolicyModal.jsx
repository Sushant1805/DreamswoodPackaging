import React from 'react';
import Modal from './Modal';

const CookiePolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cookie Policy">
      <div className="policy-content">
        <div className="policy-section">
          <h3>What Are Cookies</h3>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our site.
          </p>
        </div>

        <div className="policy-section">
          <h3>Types of Cookies We Use</h3>
          
          <h4>Essential Cookies</h4>
          <p>
            These cookies are necessary for the website to function properly. They enable basic 
            features like page navigation and access to secure areas of the website.
          </p>

          <h4>Performance Cookies</h4>
          <p>
            These cookies collect information about how visitors use our website, such as which 
            pages are most visited. This helps us improve our website performance.
          </p>

          <h4>Functional Cookies</h4>
          <p>
            These cookies remember your preferences and choices to provide you with a more 
            personalized experience, such as language settings or form data.
          </p>

          <h4>Analytics Cookies</h4>
          <p>
            We use analytics cookies to understand how our website is being used and to 
            improve our services. These may include Google Analytics or similar services.
          </p>
        </div>

        <div className="policy-section">
          <h3>How We Use Cookies</h3>
          <p>We use cookies to:</p>
          <ul>
            <li>Ensure our website functions properly</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve our website performance and user experience</li>
            <li>Provide relevant content and services</li>
            <li>Remember items in your quote requests</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Third-Party Cookies</h3>
          <p>
            We may use third-party services that set cookies on our website, including:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> To analyze website usage</li>
            <li><strong>Social Media Plugins:</strong> For social sharing functionality</li>
            <li><strong>Contact Forms:</strong> To process inquiries and quotes</li>
          </ul>
          <p>
            These third parties have their own cookie policies, and we encourage you to 
            review them.
          </p>
        </div>

        <div className="policy-section">
          <h3>Managing Cookies</h3>
          <p>
            You can control and manage cookies in several ways:
          </p>
          
          <h4>Browser Settings</h4>
          <p>
            Most browsers allow you to view, delete, and block cookies. You can usually 
            find these options in your browser's privacy or security settings.
          </p>

          <h4>Opt-Out Tools</h4>
          <p>
            Some third-party analytics providers offer opt-out tools:
          </p>
          <ul>
            <li>Google Analytics Opt-out Browser Add-on</li>
            <li>Industry opt-out pages for advertising cookies</li>
          </ul>

          <h4>Note About Disabling Cookies</h4>
          <p>
            Please note that disabling cookies may affect the functionality of our website 
            and your user experience.
          </p>
        </div>

        <div className="policy-section">
          <h3>Cookie Consent</h3>
          <p>
            By continuing to use our website, you consent to our use of cookies as described 
            in this policy. You can withdraw your consent at any time by adjusting your 
            browser settings.
          </p>
        </div>

        <div className="policy-section">
          <h3>Updates to This Policy</h3>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our 
            practices or applicable laws. We encourage you to review this policy periodically.
          </p>
        </div>

        <div className="policy-section">
          <h3>Contact Us</h3>
          <p>
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@dreamswoodpackaging.com<br/>
            <strong>Phone:</strong> +91-XXXX-XXXXXX<br/>
            <strong>Address:</strong> Dreamswood Packaging Private Limited, [Your Address]
          </p>
        </div>

        <div className="policy-section">
          <p className="policy-updated">
            <strong>Last updated:</strong> January 2025
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CookiePolicyModal;
