"use client";

import React from "react";
import { Heart, Calendar, Target, Users, Lightbulb, ArrowRight, Download } from "lucide-react";

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Your donation fuels founder education, mentorship programs, and community impact initiatives. Together, we can accelerate the development of AI solutions that benefit humanity.
            </p>
            <a
              href="/Proposal - Sponsorship Package _Draft102725.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download Sponsorship Package
            </a>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="AI Impact"
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
              <p className="text-lg text-gray-600 leading-relaxed">
                At the EverythingAI Foundation, we believe in the <strong>transformative potential</strong> of artificial intelligence to address global challenges and enhance quality of life. Our initiatives focus on leveraging AI technology to create impactful solutions across various sectors, including education, healthcare, and environmental sustainability. By collaborating with donors, corporate partners, and innovators, we aim to advance research and development that drives social change. Together, we can empower communities and foster advancements that resonate far beyond our present. Join us in our mission to harness the power of AI for a brighter future, creating lasting benefits for all.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Donor Levels */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Donor Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a level that aligns with your vision for supporting AI innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Supporter */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Supporter Level</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a Supporter, you play a crucial role in our foundation's mission. Your contributions provide essential resources for our startups and outreach initiatives.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>Recognition on website and newsletters</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>Join community advancing AI for societal good</span>
                </li>
              </ul>
            </div>

            {/* Advocate */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl text-white transform scale-105">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Advocate Level</h3>
              <p className="text-blue-50 leading-relaxed mb-6">
                As an Advocate, your generosity amplifies our impact significantly. In addition to Supporter benefits, Advocates receive exclusive access.
              </p>
              <ul className="space-y-3 text-blue-50 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>All Supporter Level benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Exclusive donor appreciation events</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Mentorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Early access to events</span>
                </li>
              </ul>
            </div>

            {/* Visionary */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Visionary Level</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Visionary level embodies leadership in philanthropy. You will receive all previous benefits plus personalized recognition.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                  <span>All previous level benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                  <span>Personalized recognition at events</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                  <span>Social media shout-outs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                  <span>Branding visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Future Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The EverythingAI Foundation is dedicated to driving innovation through AI. Our future initiatives include meaningful events that will foster community engagement, showcase advancements, and support our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovibe Summit</h3>
              <p className="text-gray-600">
                A gathering of leaders, investors, founders, and ecosystem partners
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Founder, Funder, Innovators</h3>
              <p className="text-gray-600">
                An event showcasing local startups and investor meet quarterly
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Gala</h3>
              <p className="text-gray-600">
                A celebration of achievements and future goals with our donors circle
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Founder Workshop</h3>
              <p className="text-gray-600">
                An educational program for young aspiring innovators
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Partner with EverythingAI Foundation</h2>
            <p className="text-xl text-blue-100 mb-4">
              everythingaifoundation.org
            </p>
            <p className="text-lg text-blue-200 mb-2">
              2100 N Greenville Ave, Richardson, Texas 75082
            </p>
            <p className="text-lg text-blue-200 mb-8">
              123-456-7890
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/partners"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                View Partnership Options
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
