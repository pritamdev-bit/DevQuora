"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 my-15 flex justify-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-orange-500">Terms of Service</h1>

        <p className="text-gray-300">
          By accessing or using DevQuora, you agree to be bound by these Terms
          of Service. Please read them carefully.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            1. Use of the Platform
          </h2>
          <p className="text-gray-300">
            DevQuora is a platform for developers to ask and answer technical
            questions. You agree to use it responsibly and follow all community
            guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            2. User Content
          </h2>
          <p className="text-gray-300">
            You retain ownership of the content you post but grant DevQuora a
            non-exclusive license to use, display, and distribute your content
            for the purpose of operating the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            3. Prohibited Conduct
          </h2>
          <p className="text-gray-300">
            Do not post spam, abusive content, or violate intellectual property
            rights. Any such activity may lead to account suspension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            4. Termination
          </h2>
          <p className="text-gray-300">
            We reserve the right to suspend or terminate your access to DevQuora
            at our sole discretion, with or without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            5. Changes to the Terms
          </h2>
          <p className="text-gray-300">
            DevQuora may modify these Terms at any time. Continued use of the
            platform after changes means you accept the new terms.
          </p>
        </section>

        <footer className="pt-6 border-t border-gray-700 text-sm text-gray-500">
          Last updated: July 27, 2025
        </footer>
      </div>
    </main>
  );
}
