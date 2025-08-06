import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-6 py-8 prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              i-SHOT Inc. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h3>
            
            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Personal Information</h4>
            <p className="text-gray-600 mb-4">
              "Personal Information" refers to information that identifies you as an individual, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>Name</li>
              <li>Date of birth</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Payment information (credit card numbers, bank account information)</li>
              <li>Government-issued identification numbers</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Usage Information</h4>
            <p className="text-gray-600 mb-4">
              We also collect information about your use of our Service ("Usage Information"), including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>Service usage history</li>
              <li>Pages viewed</li>
              <li>Search queries</li>
              <li>Access times and dates</li>
              <li>IP addresses</li>
              <li>Cookie information</li>
              <li>Device identifiers</li>
              <li>Location data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How We Collect Information</h3>
            <p className="text-gray-600 mb-4">We collect information in the following ways:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>Directly from you when you register for an account or use our Service</li>
              <li>Automatically when you use our Service through cookies and similar tracking technologies</li>
              <li>From third parties, including our business partners and service providers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h3>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Personalize and improve your experience with our Service</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Disclosure of Your Information</h3>
            <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Legal Requirements</h4>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>To comply with applicable laws, regulations, or legal processes</li>
              <li>To protect the rights, property, or safety of i-SHOT Inc., our users, or others</li>
              <li>To detect, prevent, or address fraud, security, or technical issues</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Business Transfers</h4>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">With Your Consent</h4>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>We may share your personal information for other purposes with your explicit consent</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Service Providers</h4>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>We may share your information with third-party vendors and service providers that perform services on our behalf</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Your Rights and Choices</h3>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Access and Update</h4>
            <p className="text-gray-600 mb-4">
              You may access and update your personal information through your account settings or by contacting us directly.
            </p>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Data Deletion</h4>
            <p className="text-gray-600 mb-4">
              You may request deletion of your personal information by contacting us, subject to certain legal exceptions.
            </p>

            <h4 className="text-lg font-medium text-gray-700 mt-6 mb-3">Opt-Out</h4>
            <p className="text-gray-600 mb-4">
              You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Data Security</h3>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Children's Privacy</h3>
            <p className="text-gray-600 mb-4">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. International Data Transfers</h3>
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and maintained on servers located outside of your state, province, or country where privacy laws may differ. By using our Service, you consent to such transfers.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Changes to This Privacy Policy</h3>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Information</h3>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <p className="text-gray-700 font-medium">i-SHOT Inc.</p>
              <p className="text-gray-600">〒150-6139 Shibuya Scramble Square 39F</p>
              <p className="text-gray-600">2-24-12 Shibuya, Shibuya City</p>
              <p className="text-gray-600">Tokyo 150-6139 Japan</p>
              <p className="text-gray-600 mt-2">Email: contact@medifund.jp</p>
              <p className="text-gray-600">Phone: +81 52-990-1007</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">11. Additional Rights for California Residents</h3>
            <p className="text-gray-600 mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>The right to know what personal information we collect, use, disclose, and sell</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt-out of the sale of your personal information</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us using the information provided above.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">12. Additional Rights for Canadian Residents</h3>
            <p className="text-gray-600 mb-4">
              If you are a Canadian resident, you have rights under Canadian privacy laws, including PIPEDA. You may:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
              <li>Access your personal information</li>
              <li>Challenge the accuracy and completeness of your information</li>
              <li>Withdraw consent for certain uses of your information</li>
            </ul>
            <p className="text-gray-600 mb-4">
              For questions about our privacy practices or to exercise your rights, please contact our Privacy Officer at the contact information above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}