"use client";

import React, { useState } from "react";
import { ArrowLeft, Users, CheckCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function NetworkFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    type: "founder" as "founder" | "investor" | "expert",
    email: "",
    url: "",
    company_info: "",
    job_role: "",
    company_segment: "",
    company_segment_other: "",
    purpose: "",
    other: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: submitError } = await supabase
        .from("founders_network_submissions")
        .insert([formData]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        name: "",
        type: "founder",
        email: "",
        url: "",
        company_info: "",
        job_role: "",
        company_segment: "",
        company_segment_other: "",
        purpose: "",
        other: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your submission has been received. We'll review your information and get back to you soon.
            </p>
            <div className="space-y-3">
              <Link
                href="/"
                className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Return Home
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="block w-full rounded-xl border-2 border-gray-300 text-gray-700 px-6 py-3 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <h1 className="text-4xl font-bold mb-4">Join Our Network</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Connect with visionary founders, investors, and experts building AI solutions that create meaningful impact
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <option value="founder">Founder</option>
                    <option value="investor">Investor</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                    Website / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company_info" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Information
                </label>
                <textarea
                  id="company_info"
                  name="company_info"
                  value={formData.company_info}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Tell us about your company or organization..."
                />
              </div>

              <div>
                <label htmlFor="job_role" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Role / Title
                </label>
                <input
                  type="text"
                  id="job_role"
                  name="job_role"
                  value={formData.job_role}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="e.g., CEO, CTO, Product Manager"
                />
              </div>

              <div>
                <label htmlFor="company_segment" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Segment / Industry Focus
                </label>
                <select
                  id="company_segment"
                  name="company_segment"
                  value={formData.company_segment}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                >
                  <option value="">Select a segment...</option>
                  <option value="AI in Health and Wellness">AI in Health and Wellness</option>
                  <option value="AI in Education">AI in Education</option>
                  <option value="AI in Agriculture and Manufacture">AI in Agriculture and Manufacture</option>
                  <option value="AI in Energy">AI in Energy</option>
                  <option value="AI in Environment">AI in Environment</option>
                  <option value="AI in Cybersecurity">AI in Cybersecurity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.company_segment === "Other" && (
                <div>
                  <label htmlFor="company_segment_other" className="block text-sm font-medium text-gray-700 mb-2">
                    Please specify your company segment
                  </label>
                  <input
                    type="text"
                    id="company_segment_other"
                    name="company_segment_other"
                    value={formData.company_segment_other}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Brief description of your industry focus"
                  />
                </div>
              )}

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose for Joining *
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="What do you hope to gain from joining the network? Share your goals and aspirations..."
                />
              </div>

              <div>
                <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="other"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Anything else you'd like us to know?"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
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
