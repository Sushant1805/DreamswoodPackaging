import React from 'react';
import Modal from './Modal';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="policy-content">
        <div className="policy-section">
          <h3>Information We Collect</h3>
          <p>
            At Dreamswood Packaging Private Limited, we collect information you provide directly to us when you:
          </p>
          <ul>
            <li>Request quotes for our packaging solutions</li>
            <li>Contact us through our website or email</li>
            <li>Subscribe to our newsletter or updates</li>
            <li>Participate in surveys or feedback forms</li>
          </ul>
          <p>
            This may include your name, email address, phone number, company information, 
            packaging requirements, and any other information you choose to provide.
          </p>
        </div>

        <div className="policy-section">
          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide quotes and respond to your packaging inquiries</li>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about our services</li>
            <li>Send you updates about new packaging solutions and industry trends</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Information Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our business</li>
            <li>Professional advisors such as lawyers and accountants</li>
            <li>Government authorities when required by law</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="policy-section">
          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us at:
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

export default PrivacyPolicyModal;
