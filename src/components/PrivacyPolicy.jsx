import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-20 px-60 pr-80 bg-white text-gray-700">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">1.</span>Introduction
        </h2>
        <p className="mb-4 font-sm">
          <strong>DTSS</strong> is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital products.
        </p>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">2.</span>Information We Collect
        </h2>
        <p className="mb-4 font-sm">We collect two main types of information:</p>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Personal Information:</strong> This is information that can be used to identify you as an individual. We may collect personal information such as your name, email address, username, password, and demographic information (e.g., country, language).</li>
          <li><strong>Non-Personal Information:</strong> This is information that cannot be used to identify you as an individual. We may collect non-personal information such as your device information (e.g., IP address, operating system, browser type), usage data (e.g., how you use our Products), and browsing history within our Products.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">3.</span>How We Collect Information
        </h2>
        <p className="mb-4 font-sm">We collect information through various means when you use our Products, including:</p>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Directly from you:</strong> You may provide us with personal information when you create an account, contact us for support, or participate in other activities on our Products.</li>
          <li><strong>Automatically:</strong> We may collect non-personal information automatically when you use our Products. This information may be collected using cookies and other tracking technologies.</li>
          <li><strong>From Third Parties:</strong> We may collect information from third-party sources, such as social media platforms, if you choose to connect your account to our Products.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">4.</span>How We Use Your Information
        </h2>
        <p className="mb-4 font-sm">We use your information for a variety of purposes, including:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>To provide and operate the Products;</li>
          <li>To create and manage your account;</li>
          <li>To improve and personalize the Products;</li>
          <li>To send you marketing communications (with your consent);</li>
          <li>To analyze how you use the Products;</li>
          <li>To comply with legal and regulatory obligations.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">5.</span>Your Choices
        </h2>
        <p className="mb-4 font-sm">You have choices regarding your information. You can:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Access and update your information in your account settings.</li>
          <li>Opt-out of receiving marketing communications from us.</li>
          <li>Request to delete your information (subject to certain limitations).</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">6.</span>Data Security
        </h2>
        <p className="mb-4 font-sm">We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is completely secure.</p>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">7.</span>Children's Privacy
        </h2>
        <p className="mb-4 font-sm">Our Products are not directed to children under the age of [Age Requirement in your Jurisdiction] (e.g., 16 in India). We do not knowingly collect personal information from children under [Age Requirement]. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under [Age Requirement], we will take steps to delete that information.</p>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">8.</span>Changes to this Privacy Policy
        </h2>
        <p className="mb-4 font-sm">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">9.</span>Contact Us
        </h2>
        <p>If you have any questions about this Privacy Policy, please contact us at admincontact@tsstechnologies.in.</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
