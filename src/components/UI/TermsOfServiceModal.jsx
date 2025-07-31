import React from 'react';
import Modal from './Modal';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="policy-content">
        <div className="policy-section">
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing and using the services of Dreamswood Packaging Private Limited, 
            you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </div>

        <div className="policy-section">
          <h3>Services Description</h3>
          <p>
            Dreamswood Packaging provides custom packaging solutions including:
          </p>
          <ul>
            <li>Custom box manufacturing and design</li>
            <li>Volume production services</li>
            <li>Sustainable packaging materials</li>
            <li>Bulk order fulfillment</li>
            <li>Packaging consultation and support</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Order Process and Payment</h3>
          <ul>
            <li>All orders are subject to acceptance by Dreamswood Packaging</li>
            <li>Prices are quoted based on specifications provided by the customer</li>
            <li>Payment terms will be specified in individual contracts</li>
            <li>Orders may require advance payment or deposit</li>
            <li>Delivery timelines are estimates and may vary based on order complexity</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Quality Assurance</h3>
          <p>
            We are committed to providing high-quality packaging solutions. Our quality assurance includes:
          </p>
          <ul>
            <li>Material testing and verification</li>
            <li>Production quality checks</li>
            <li>Final product inspection before delivery</li>
            <li>Compliance with industry standards</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Customer Responsibilities</h3>
          <p>Customers are responsible for:</p>
          <ul>
            <li>Providing accurate specifications and requirements</li>
            <li>Timely approval of designs and samples</li>
            <li>Payment according to agreed terms</li>
            <li>Proper inspection of delivered goods</li>
            <li>Reporting any issues within the specified timeframe</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Intellectual Property</h3>
          <p>
            Custom designs created specifically for customers remain the property of the customer. 
            However, general manufacturing processes and techniques remain proprietary to 
            Dreamswood Packaging.
          </p>
        </div>

        <div className="policy-section">
          <h3>Limitation of Liability</h3>
          <p>
            Dreamswood Packaging's liability is limited to the value of the goods supplied. 
            We are not liable for consequential damages, lost profits, or indirect damages 
            arising from the use of our products.
          </p>
        </div>

        <div className="policy-section">
          <h3>Force Majeure</h3>
          <p>
            We shall not be liable for any failure or delay in performance due to circumstances 
            beyond our reasonable control, including but not limited to natural disasters, 
            government actions, or supply chain disruptions.
          </p>
        </div>

        <div className="policy-section">
          <h3>Modifications</h3>
          <p>
            Dreamswood Packaging reserves the right to modify these terms at any time. 
            Continued use of our services constitutes acceptance of any modifications.
          </p>
        </div>

        <div className="policy-section">
          <h3>Contact Information</h3>
          <p>
            For questions regarding these terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> legal@dreamswoodpackaging.com<br/>
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

export default TermsOfServiceModal;
