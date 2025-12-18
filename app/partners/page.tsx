"use client";

import React from "react";
import { ArrowRight, Users, TrendingUp, Award, CheckCircle, Download } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>
        <Container className="relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Collaborating for AI Advancement and Impact
            </p>
            <a
              href="/Proposal - Sponsorship Package _Draft102725.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download Full Package
            </a>
          </div>
        </Container>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Innovation Partners
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At EverythingAI Foundation, we believe that collaboration is key to advancing the field of artificial intelligence. By partnering with us, organizations can engage in impactful startups that not only push the boundaries of technology but also create significant social benefits. Our innovation partners will gain access to exclusive resources, mentorship opportunities, and the chance to be part of a vibrant community dedicated to shaping the future of ethical AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Joint funding opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Networking events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Research grants for tech development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Brand visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Event sponsorships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Promotional materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Knowledge sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Workshop access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mentorship programs</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate Sponsorship Tiers */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Corporate Sponsorship Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlocking Opportunities for Engagement and Growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Community Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Partner</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a Community Partner, your organization will play a pivotal role in supporting the EverythingAI Foundation's mission. Enjoy recognition at events, access to exclusive networking opportunities, and the chance to engage with our vibrant community. Your brand will be displayed prominently, reinforcing your commitment to social impact and innovation.
              </p>
            </div>

            {/* Growth Partner */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl text-white transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth Partner</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-6">
                Becoming a Growth Partner elevates your support with enhanced visibility and engagement opportunities. Your sponsorship includes event branding, mentorship chances for emerging leaders, and access to exclusive thought leadership forums. This tier is specifically designed for companies looking to expand their reach while contributing to meaningful AI advancements.
              </p>
            </div>

            {/* Innovation Leader */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation Leader</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                As an Innovation Leader, your company will be at the forefront of AI progress. This tier offers unparalleled branding visibility and bespoke opportunities tailored to your organizational goals. Engage with AI thought leaders, participate in exclusive innovation workshops, and gain recognition as a driving force behind the foundation's initiatives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Individual Donor Opportunities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Individual Donor Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in shaping the future
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Supporter Level */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Supporter Level</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As a Supporter, you play a crucial role in our foundation's mission. Your contributions provide essential resources for our startups and outreach initiatives. Enjoy recognition on our website and newsletters, featuring your name and support level, and become part of a community dedicated to advancing AI for societal good.
                  </p>
                </div>
              </div>
            </div>

            {/* Advocate Level */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Advocate Level</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As an Advocate, your generosity amplifies our impact significantly. In addition to the benefits of the Supporter Level, Advocates receive exclusive invitations to donor appreciation events, mentorship opportunities, and early access to our events allowing you to engage deeply with the community and our mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Visionary Level */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-green-600"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Visionary Level</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Visionary level embodies leadership in philanthropy. You will receive all previous benefits and personalized recognition during our events, including social media shout-outs and branding visibility. Your support directly influences our innovative programs, ensuring that together, we cultivate a transformative future in AI technology and education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Together, we can empower communities and foster advancements that resonate far beyond our present. Join us in our mission to harness the power of AI for a brighter future, creating lasting benefits for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/Proposal - Sponsorship Package _Draft102725.pdf"
                download
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Download Package
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
