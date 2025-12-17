"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Users, Network, Lightbulb, Heart, Menu, X, ChevronDown, Target, TrendingUp, MessageCircle, Briefcase, UserCheck, Mail } from "lucide-react";

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
        className={`absolute left-0 mt-2 w-64 rounded-xl border bg-white shadow-xl p-2 transition-all duration-200 ${
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

function FeatureCard({ title, description, icon: Icon, gradient }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className={`h-3 ${gradient}`}></div>
      <div className="p-8">
        <div className={`w-16 h-16 rounded-full ${gradient} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function FoundersNetworkPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <Container className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200">
            <div className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src="/EAI logo.png"
                alt="EverythingAI Foundation Logo"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span>EverythingAI</span>
              <span>Foundation</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm ml-12">
            <Dropdown
              label="Founder's Network"
              items={[
                { label: "Overview", href: "/founders" },
                { label: "Join Network", href: "/founders/network-form" },
                { label: "Mentors", href: "#experts" },
                { label: "Investors", href: "#investors" },
                { label: "FAQs", href: "/programs/faq" },
              ]}
            />
            <Dropdown
              label="Startup Accelerators"
              items={[
                { label: "Overview", href: "/programs" },
                { label: "Application", href: "/accelerators/apply" },
                { label: "FAQs", href: "/programs/faq" },
              ]}
            />
            <Dropdown
              label="Venture Platforms"
              items={[
                { label: "Partners", href: "/partners" },
                { label: "Platform", href: "/platform" },
                { label: "Sponsor", href: "/donate" },
              ]}
            />
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="/#mission" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Mission</a>
              <a href="/login" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Login</a>
              <a href="/donate" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Give</a>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <Container className="py-4 space-y-4">
              <a href="/founders" className="block py-2 text-gray-700 hover:text-blue-600">Founder's Network</a>
              <a href="/programs" className="block py-2 text-gray-700 hover:text-blue-600">Startup Accelerators</a>
              <a href="/partners" className="block py-2 text-gray-700 hover:text-blue-600">Venture Platforms</a>
              <a href="/#mission" className="block py-2 text-gray-700 hover:text-blue-600">Mission</a>
              <a href="/login" className="block py-2 text-gray-700 hover:text-blue-600">Login</a>
              <a href="/donate" className="block w-full text-center rounded-xl bg-blue-600 text-white px-6 py-3 font-medium mt-4">
                Donate
              </a>
            </Container>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg')] bg-cover bg-center opacity-10 blur-md"></div>
        <Container className="py-24 md:py-32 relative">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Welcome to the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Founder's Network</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
              Connect with fellow founders, experienced mentors, domain experts, and interested investors who share your passion for building impactful AI-driven solutions.
            </p>

            <div className="space-y-4 text-lg text-gray-600 mb-10">
              <p className="leading-relaxed">
                The Founder's Network is a vibrant community designed to support entrepreneurs at every stage of their journey. Whether you're validating an idea, building your MVP, or scaling your startup, you'll find the connections and resources you need here.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="/founders/network-form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-4 font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Join the Network
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 text-blue-600 px-6 py-4 font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Explore Accelerators
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/partners"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-600 text-purple-600 px-6 py-4 font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                View Partners
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* About Founders Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Founders in Our Network
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                Our founders are innovators, problem-solvers, and visionaries building the next generation of AI-powered solutions. They come from diverse backgrounds and are united by a common goal: to create meaningful impact through technology.
              </p>
              <p className="leading-relaxed">
                The network includes founders working across multiple domains including health and wellness, energy efficiency, environmental sustainability, and social innovation. Many are first-time entrepreneurs, while others are serial founders with multiple exits.
              </p>
              <p className="leading-relaxed">
                We welcome you to <a href="/founders/network-form" className="text-blue-600 underline hover:text-blue-700 transition-colors font-semibold">join the network</a> to address your need at every stage of your journey, to meet with your paired <a href="#experts" className="text-blue-600 underline hover:text-blue-700 transition-colors font-semibold">mentor</a> and <a href="#investors" className="text-blue-600 underline hover:text-blue-700 transition-colors font-semibold">investors</a> and group of cohorts.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-blue-600">
                <p className="text-xl font-bold text-gray-900 mb-2">
                  Founder Community Benefits
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Funding opportunities with passionate investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Technical, business and operational mentoring and consulting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Peer-to-peer learning and collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Access to exclusive events and workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority consideration for accelerator programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Direct connections to mentors and investors</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/pic1networking.png"
                alt="Founders networking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About Experts Section */}
      <section id="experts" className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/pic2eventpanel.png"
                  alt="Expert panel discussion"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Mentorship Programs</h3>
                    <p className="text-gray-700 text-sm">One-on-one guidance from experienced entrepreneurs and industry leaders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Office Hours</h3>
                    <p className="text-gray-700 text-sm">Regular sessions where founders can get advice on specific challenges</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Domain Expertise</h3>
                    <p className="text-gray-700 text-sm">Access to specialists in AI, healthcare, energy, and other critical sectors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Network of Experts
              </h2>

              <div className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                  We've assembled a diverse team of industry experts, successful entrepreneurs, and thought leaders who are passionate about helping the next generation of founders succeed.
                </p>
                <p className="leading-relaxed">
                  Our experts provide guidance in critical areas including product development, go-to-market strategy, fundraising, AI implementation, scaling operations, and more.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <p className="leading-relaxed font-semibold mb-4">
                    We welcome new experts to join the network if you are:
                  </p>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>A current or former start-up CEO/founder with at least one successful exit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>A domain specific expert in technology, business, finance, HR, product or operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>An Industry visionary and thought leader</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>A senior executive with proven success in business, management, and operational expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>A consultant with experience at reputable firms or self-employed with a strong track record</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Willing to contribute time through mentorship, advising or consulting (at a reasonable rate) to support our founder's needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Interested in serving as a speaker/lecturer/judge in EverythingAI Foundation accelerator programs and events</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                  <p className="leading-relaxed font-semibold mb-4">
                    Benefits for experts in the network:
                  </p>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Create meaningful impact to early stage ventures, growing new ventures and learning from founders through involvement in AI related technology segments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>As a Everythingai network member, you will recieve active visibility and acknowledgement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Learn and give back to the ecosystem by being on the cutting edge of the startup world, gaining exposure to new technology and ideas, and keep up with the industry trends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Expand your network through exposure to leading startups and industry leaders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Build your professional brand through your association with EverythingAI Foundation that allows you to add differentiating professional endorsements.</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="/founders/network-form"
                      className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-8 py-4 font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      Become An Expert in Founder's Network
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Investors Section */}
      <section id="investors" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Connect with Investors
              </h2>

              <div className="space-y-6 text-lg text-gray-700 mb-8">
                <p className="leading-relaxed">
                  Our investor network includes angel investors, venture capital firms, and impact investors who are actively seeking innovative AI-driven startups to support.
                </p>
                <p className="leading-relaxed">
                  We facilitate meaningful connections between founders and investors through curated events, demo days, and warm introductions based on alignment of vision and investment thesis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Focus Areas</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Healthcare Tech</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Climate Tech</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Social Impact</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                <p className="text-lg leading-relaxed">
                  <strong>Demo Days:</strong> Regular showcases where founders pitch to our investor network, with opportunities for follow-up meetings and potential funding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#join-network"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-4 font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <UserCheck className="w-5 h-5" />
                  Become an Investor in Founder's Network
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="mailto:info@everythingaifoundation.org"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 text-blue-600 px-6 py-4 font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Send us email
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/pic3_pitch.png"
                alt="Founder pitching to investors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Network Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Join the Founder's Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of a thriving ecosystem designed to accelerate your startup journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Peer Community"
              description="Connect with fellow founders who understand your challenges and can share insights from their own journeys."
              icon={Users}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeatureCard
              title="Expert Mentorship"
              description="Get guidance from successful entrepreneurs and industry experts who've been where you are."
              icon={UserCheck}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeatureCard
              title="Investor Access"
              description="Build relationships with investors who are actively looking for startups like yours."
              icon={TrendingUp}
              gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            <FeatureCard
              title="Exclusive Events"
              description="Attend workshops, networking events, and demo days designed specifically for our community."
              icon={Network}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeatureCard
              title="Resources & Tools"
              description="Access templates, frameworks, and AI tools to help you build and scale more efficiently."
              icon={Briefcase}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeatureCard
              title="Growth Support"
              description="Priority access to our accelerator programs and strategic growth opportunities."
              icon={Target}
              gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="join-network" className="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg')] bg-cover bg-center opacity-10"></div>
        <Container className="relative">
          <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-12 md:p-16 text-center border border-white/20 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-8">
              <Network className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect with founders, mentors, and investors who are passionate about building the future with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/founders/network-form"
                className="group inline-flex items-center gap-2 rounded-xl bg-white text-blue-600 px-8 py-4 font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Join the Network Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/programs"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Programs
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white">
        <Container className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">EverythingAI Foundation</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering entrepreneurs to build AI solutions that create positive impact worldwide.
              </p>
              <div className="text-gray-400 text-sm space-y-1">
                <p>2100 N Greenville Ave</p>
                <p>Richardson, TX 75082</p>
                <p>everythingaifoundation.org</p>
              </div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Legal</h3>
              <nav className="flex flex-col gap-3">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Use</a>
                <a href="/competition-rules" className="text-gray-400 hover:text-white transition-colors duration-200">Competition Rules</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Organization</h3>
              <nav className="flex flex-col gap-3">
                <a href="/code-of-conduct" className="text-gray-400 hover:text-white transition-colors duration-200">Code of Conduct</a>
                <a href="/financials" className="text-gray-400 hover:text-white transition-colors duration-200">Financials</a>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Stay Connected</h3>
              <p className="text-gray-400">Get updates on our latest programs and opportunities</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
                <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
