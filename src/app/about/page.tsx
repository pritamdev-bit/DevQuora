"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">About DevQuora</h1>
        <p className="text-lg text-gray-300">
          DevQuora is a modern Q&A platform built for developers, inspired by
          curious tech community. Whether you're a beginner or an expert, DevQuora helps
          you ask questions, share knowledge, and grow together as a tech
          community.
        </p>
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400">
          Built with ❤️ by <span className="text-orange-400">Pritam</span>
          <div className="my-2">Check out my <a href="https://github.com/pritamdev-bit" target="_blank"><span className="text-orange-400">Github</span></a> Profile</div>
          <div className="mb-2">Contact me on <a href="https://x.com/rick_jsx" target="_blank"><span className="text-orange-400">X(Twitter)</span></a></div>
        </div>
      </div>
    </main>
  );
}
