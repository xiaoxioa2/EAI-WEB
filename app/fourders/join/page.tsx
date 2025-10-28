"use client";

import React, { useState } from 'react';
import { ArrowLeft, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JoinFoundersNetwork() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    focus: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Join the Founder's Network</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Connect with visionary entrepreneurs building AI solutions that create meaningful impact
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600 text-sm">Access to industry leaders and experienced founders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Community</h3>
                <p className="text-gray-600 text-sm">Network with founders from around the world</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Resources & Funding</h3>
                <p className="text-gray-600 text-sm">Access to capital and growth resources</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Startup Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    required
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <option value="">Select stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="mvp">MVP/Prototype</option>
                    <option value="early">Early Stage</option>
                    <option value="growth">Growth Stage</option>
                    <option value="scale">Scale Stage</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="focus" className="block text-sm font-medium text-gray-700 mb-2">
                  AI Focus Area *
                </label>
                <select
                  id="focus"
                  name="focus"
                  required
                  value={formData.focus}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                >
                  <option value="">Select focus area</option>
                  <option value="healthcare">Healthcare AI</option>
                  <option value="education">Education AI</option>
                  <option value="climate">Climate Tech AI</option>
                  <option value="fintech">FinTech AI</option>
                  <option value="enterprise">Enterprise AI</option>
                  <option value="consumer">Consumer AI</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your experience and goals
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Share your background, current projects, and what you hope to achieve through the network..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Back to Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
