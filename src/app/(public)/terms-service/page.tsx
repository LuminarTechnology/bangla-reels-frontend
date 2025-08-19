import React from "react";

export default function TermsAndServicePage() {
  return (
    <div className="my-10">
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          <p className="mb-4 text-gray-200">
            Welcome to ReelShort! By accessing or using our platform, you agree to be bound by these
            Terms of Service. If you disagree with any part of these terms, you may not access the
            service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">2. Description of Service</h2>
          <p className="mb-4 text-gray-200">
            ReelShort is a short-form video sharing platform that allows users to create, upload,
            and share video content. Our service includes features for video editing, social
            interaction, and content discovery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">3. User Accounts</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>You must be at least 13 years old to create an account</li>
            <li>You are responsible for safeguarding your account credentials</li>
            <li>You must provide accurate and complete registration information</li>
            <li>One person or legal entity may maintain only one account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">4. Content Guidelines</h2>
          <p className="mb-4 text-gray-200">
            You agree not to upload, post, or transmit content that:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-gray-200">
            <li>Violates any laws or regulations</li>
            <li>Infringes on intellectual property rights</li>
            <li>Contains harmful, threatening, or harassing material</li>
            <li>Promotes violence, discrimination, or illegal activities</li>
            <li>Contains explicit or inappropriate content involving minors</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">5. Intellectual Property</h2>
          <p className="mb-4 text-gray-200">
            You retain ownership of content you create and upload. By posting content, you grant
            ReelShort a worldwide, non-exclusive license to use, reproduce, and distribute your
            content on our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">6. Termination</h2>
          <p className="mb-4 text-gray-200">
            We reserve the right to terminate or suspend accounts that violate these terms. You may
            also delete your account at any time through your account settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-white">7. Contact Information</h2>
          <p className="text-gray-200">
            For questions about these Terms of Service, please contact us at legal@reelshort.com
          </p>
        </section>
      </div>
    </div>
  );
}
