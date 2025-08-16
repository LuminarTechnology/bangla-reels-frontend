import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="my-12">
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-6">
            <li>Account information (username, email, phone number)</li>
            <li>Profile information (bio, profile picture, preferences)</li>
            <li>Content you create and share on our platform</li>
            <li>Communications with other users and our support team</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">
            Automatically Collected Information
          </h3>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            <li>Device information (device type, operating system, unique identifiers)</li>
            <li>Usage data (videos watched, time spent, interactions)</li>
            <li>Location information (if you enable location services)</li>
            <li>Log data (IP address, browser type, access times)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            <li>Provide and improve our services</li>
            <li>Personalize your experience and content recommendations</li>
            <li>Communicate with you about updates and promotions</li>
            <li>Ensure platform safety and security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
          <p className="text-gray-200 mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            <li>Other users (as part of the social features of our platform)</li>
            <li>Service providers who help us operate our platform</li>
            <li>Law enforcement when required by law</li>
            <li>Third parties in case of merger or acquisition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Control privacy settings and who can see your content</li>
            <li>Opt out of promotional communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
          <p className="text-gray-200 mb-4">
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-200">
            If you have questions about this Privacy Policy, please contact us at
            privacy@reelshort.com
          </p>
        </section>
      </div>
    </div>
  );
}
