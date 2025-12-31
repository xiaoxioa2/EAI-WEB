"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, X, Menu, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="inline-flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-bold"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-0 mt-2 w-64 rounded-xl border bg-white shadow-xl p-2 transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ApplyToAccelerator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    foundersNetworkMemberId: "",
    statementOfWork: "",
    technology: "",
    product: "",
    mvpStage: "",
    fundingStage: "",
    helpNeeded: "",
    pitchDeckUrl: "",
    teamLinkedInLinks: "",
    mediaLinks: "",
    testimonials: "",
    contactMethod: "",
    termsAgreed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!formData.termsAgreed) {
      setSubmitError("Please agree to the terms and conditions");
      setIsSubmitting(false);
      return;
    }

    if (formData.statementOfWork.split(/\s+/).length > 500) {
      setSubmitError("Statement of Work must be 500 words or less");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from("accelerator_applications")
        .insert([
          {
            founders_network_member_id: formData.foundersNetworkMemberId,
            statement_of_work: formData.statementOfWork,
            technology: formData.technology,
            product: formData.product,
            mvp_stage: formData.mvpStage,
            funding_stage: formData.fundingStage,
            help_needed: formData.helpNeeded,
            pitch_deck_url: formData.pitchDeckUrl,
            team_linkedin_links: formData.teamLinkedInLinks,
            media_links: formData.mediaLinks,
            testimonials: formData.testimonials,
            contact_method: formData.contactMethod,
            terms_agreed: formData.termsAgreed,
          },
        ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        foundersNetworkMemberId: "",
        statementOfWork: "",
        technology: "",
        product: "",
        mvpStage: "",
        fundingStage: "",
        helpNeeded: "",
        pitchDeckUrl: "",
        teamLinkedInLinks: "",
        mediaLinks: "",
        testimonials: "",
        contactMethod: "",
        termsAgreed: false,
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitError("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const wordCount = formData.statementOfWork.split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <img src="/eai_logo.png" alt="EverythingAI" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-gray-900">EverythingAI</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-bold">
                Home
              </a>
              <Dropdown
                label="Programs"
                items={[
                  { label: "Overview", href: "/programs" },
                  { label: "Accelerators", href: "/accelerators" },
                ]}
              />
              <Dropdown
                label="Founders Network"
                items={[
                  { label: "Join Network", href: "/founders/join" },
                  { label: "Network Form", href: "/founders/network-form" },
                ]}
              />
              <a href="/partners" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-bold">
                Partners
              </a>
              <a href="/donate" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-bold">
                Donate
              </a>
              <a
                href="/accelerators/apply"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Apply Now
              </a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
              <a href="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Home
              </a>
              <a href="/programs" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Programs
              </a>
              <a href="/accelerators" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Accelerators
              </a>
              <a href="/founders/join" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Join Founders Network
              </a>
              <a href="/partners" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Partners
              </a>
              <a href="/donate" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
                Donate
              </a>
              <a
                href="/accelerators/apply"
                className="block py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                Apply Now
              </a>
            </div>
          )}
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apply to the Accelerator
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Take the next step in your AI journey. Join our accelerator program and transform your vision into reality.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {submitSuccess ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Thank you for applying to our accelerator program. We'll review your application and get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Form</h2>

                  {submitError && (
                    <div className="mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Founder's Network Member ID */}
                  <div className="mb-8">
                    <label htmlFor="foundersNetworkMemberId" className="block text-lg font-semibold text-gray-900 mb-3">
                      Founder's Network Member ID <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Note: If you don't have an ID, please{" "}
                      <a href="/founders/join" className="text-blue-600 hover:underline font-semibold">
                        Join Founders Network
                      </a>
                    </p>
                    <input
                      type="text"
                      id="foundersNetworkMemberId"
                      name="foundersNetworkMemberId"
                      value={formData.foundersNetworkMemberId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your Member ID"
                    />
                  </div>

                  {/* Statement of Work */}
                  <div className="mb-8">
                    <label htmlFor="statementOfWork" className="block text-lg font-semibold text-gray-900 mb-3">
                      Statement of Work or Why Join <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Maximum 500 words. Current count: {wordCount}/500 {wordCount > 500 && <span className="text-red-500 font-semibold">(Exceeds limit)</span>}
                    </p>
                    <textarea
                      id="statementOfWork"
                      name="statementOfWork"
                      value={formData.statementOfWork}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                      placeholder="Tell us about your work and why you want to join the accelerator..."
                    />
                  </div>

                  {/* Fact Sheets */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Fact Sheets</h3>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="technology" className="block text-lg font-semibold text-gray-900 mb-3">
                          Technology <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="technology"
                          name="technology"
                          value={formData.technology}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                          placeholder="Describe your technology stack and approach..."
                        />
                      </div>

                      <div>
                        <label htmlFor="product" className="block text-lg font-semibold text-gray-900 mb-3">
                          Product <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                          placeholder="Describe your product and its features..."
                        />
                      </div>

                      <div>
                        <label htmlFor="mvpStage" className="block text-lg font-semibold text-gray-900 mb-3">
                          MVP Stage <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="mvpStage"
                          name="mvpStage"
                          value={formData.mvpStage}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        >
                          <option value="">Select MVP Stage</option>
                          <option value="Idea">Idea</option>
                          <option value="Prototype">Prototype</option>
                          <option value="MVP">MVP</option>
                          <option value="Beta">Beta</option>
                          <option value="Launched">Launched</option>
                          <option value="Growth">Growth</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="fundingStage" className="block text-lg font-semibold text-gray-900 mb-3">
                          Funding Stage <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="fundingStage"
                          name="fundingStage"
                          value={formData.fundingStage}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        >
                          <option value="">Select Funding Stage</option>
                          <option value="Bootstrapped">Bootstrapped</option>
                          <option value="Pre-seed">Pre-seed</option>
                          <option value="Seed">Seed</option>
                          <option value="Series A">Series A</option>
                          <option value="Series B+">Series B+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="helpNeeded" className="block text-lg font-semibold text-gray-900 mb-3">
                          Help Needed <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="helpNeeded"
                          name="helpNeeded"
                          value={formData.helpNeeded}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                          placeholder="What areas do you need help with?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pitch Deck */}
                  <div className="mb-8">
                    <label htmlFor="pitchDeckUrl" className="block text-lg font-semibold text-gray-900 mb-3">
                      Pitch Deck (if available)
                    </label>
                    <input
                      type="url"
                      id="pitchDeckUrl"
                      name="pitchDeckUrl"
                      value={formData.pitchDeckUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="https://example.com/your-pitch-deck.pdf"
                    />
                  </div>

                  {/* Key Team Member LinkedIn Links */}
                  <div className="mb-8">
                    <label htmlFor="teamLinkedInLinks" className="block text-lg font-semibold text-gray-900 mb-3">
                      Key Team Member LinkedIn Links <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="teamLinkedInLinks"
                      name="teamLinkedInLinks"
                      value={formData.teamLinkedInLinks}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                      placeholder="Enter LinkedIn URLs for key team members, one per line..."
                    />
                  </div>

                  {/* Media Links */}
                  <div className="mb-8">
                    <label htmlFor="mediaLinks" className="block text-lg font-semibold text-gray-900 mb-3">
                      Media (if any)
                    </label>
                    <textarea
                      id="mediaLinks"
                      name="mediaLinks"
                      value={formData.mediaLinks}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                      placeholder="Enter any media coverage links..."
                    />
                  </div>

                  {/* Testimonials */}
                  <div className="mb-8">
                    <label htmlFor="testimonials" className="block text-lg font-semibold text-gray-900 mb-3">
                      Testimonials
                    </label>
                    <textarea
                      id="testimonials"
                      name="testimonials"
                      value={formData.testimonials}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                      placeholder="Any testimonials or references..."
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="mb-8">
                    <label htmlFor="contactMethod" className="block text-lg font-semibold text-gray-900 mb-3">
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    >
                      <option value="">Select Contact Method</option>
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="Zoom">Zoom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Terms and Agreement */}
                  <div className="mb-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Terms and Agreement</h3>
                    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-4 max-h-64 overflow-y-auto text-sm text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        <strong>Accelerator Program Terms and Conditions</strong>
                      </p>
                      <p className="mb-4">
                        By submitting this application, you acknowledge and agree to the following terms:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 mb-4">
                        <li>All information provided in this application is accurate and truthful to the best of your knowledge.</li>
                        <li>You understand that acceptance into the accelerator program is competitive and not guaranteed.</li>
                        <li>If accepted, you commit to actively participating in all required program activities and sessions.</li>
                        <li>You agree to maintain confidentiality regarding proprietary information shared during the program.</li>
                        <li>You grant permission for EverythingAI to contact you regarding your application and program updates.</li>
                        <li>You understand that intellectual property rights remain with the founding team, and no equity is transferred as part of program participation.</li>
                        <li>You agree to provide feedback and testimonials about your experience in the program.</li>
                        <li>You acknowledge that program structure, timeline, and benefits may be subject to change.</li>
                      </ol>
                      <p className="mb-4">
                        <strong>Privacy Policy</strong>
                      </p>
                      <p className="mb-4">
                        Your personal information will be used solely for evaluating your application and communicating about the accelerator program. We will not share your information with third parties without your consent, except as required by law.
                      </p>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="termsAgreed"
                        checked={formData.termsAgreed}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-200"
                      />
                      <span className="text-sm text-gray-900">
                        I have read and agree to the Terms and Conditions stated above. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAgreed}
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Container>
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 EverythingAI. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
