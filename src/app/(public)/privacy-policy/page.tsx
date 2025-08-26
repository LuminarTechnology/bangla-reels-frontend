import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="my-4 md:my-8">
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Information We Collect</h2>

          <h3 className="mb-3 text-xl font-semibold text-white">Personal Information</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-200">
            <li>Account information (username, email, phone number)</li>
            <li>Profile information (bio, profile picture, preferences)</li>
            <li>Content you create and share on our platform</li>
            <li>Communications with other users and our support team</li>
          </ul>

          <h3 className="mb-3 text-xl font-semibold text-white">
            Automatically Collected Information
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>Device information (device type, operating system, unique identifiers)</li>
            <li>Usage data (videos watched, time spent, interactions)</li>
            <li>Location information (if you enable location services)</li>
            <li>Log data (IP address, browser type, access times)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>Provide and improve our services</li>
            <li>Personalize your experience and content recommendations</li>
            <li>Communicate with you about updates and promotions</li>
            <li>Ensure platform safety and security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Information Sharing</h2>
          <p className="mb-4 text-gray-200">We may share your information with:</p>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>Other users (as part of the social features of our platform)</li>
            <li>Service providers who help us operate our platform</li>
            <li>Law enforcement when required by law</li>
            <li>Third parties in case of merger or acquisition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Your Rights and Choices</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Control privacy settings and who can see your content</li>
            <li>Opt out of promotional communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Data Security</h2>
          <p className="mb-4 text-gray-200">
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Contact Us</h2>
          <p className="text-gray-200">
            If you have questions about this Privacy Policy, please contact us at
            privacy@reelshort.com
          </p>
        </section>
      </div>
    </div>
  );
}
