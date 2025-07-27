"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 my-15 flex justify-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-orange-400">Privacy Policy</h1>

        <p className="text-gray-300">
          At DevQuora, your privacy is very important to us. This privacy
          policy outlines what information we collect, how we use it, and how
          we protect it.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-300">
            We collect basic user information such as your name, email address,
            and any data you voluntarily provide while posting questions,
            answers, or comments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300">
            We use your information to provide and improve our services,
            personalize your experience, and communicate important updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">
            3. Data Security
          </h2>
          <p className="text-gray-300">
            We implement appropriate security measures to protect your data.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-gray-300">
            We may use third-party services (like analytics or authentication
            tools) that collect and process your information under their own
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-300">
            We may update this policy from time to time. You will be notified of
            significant changes via our platform.
          </p>
        </section>

        <footer className="pt-6 border-t border-gray-700 text-sm text-gray-500">
          Last updated: July 27, 2025
        </footer>
      </div>
    </main>
  );
}
