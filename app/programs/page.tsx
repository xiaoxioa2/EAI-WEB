"use client";

import React from "react";
import { ArrowRight, CheckCircle, Users, Building2, Rocket, Calendar, Target, Network, Award, Lightbulb, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

interface DonorLevelCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

function DonorLevelCard({ title, description, icon: Icon, gradient }: DonorLevelCardProps) {
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

interface TimelineEventProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

function TimelineEvent({ title, description, icon: Icon }: TimelineEventProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-purple-600 last:hidden"></div>
      <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-600 shadow-lg"></div>
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">{title}</h4>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  title: string;
  items: string[];
}

function BenefitCard({ title, items }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-bold text-gray-900 mb-6">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AcceleratorsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10 blur-md"></div>
        <Container className="py-24 md:py-32 relative">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              EverythingAI Accelerator for our goal of: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1 Founder. $1M. 1 Year.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
              AI-powered accelerator or programs for founders building high-impact solutions in health, energy, environment, and social innovation.
            </p>

            <div className="space-y-4 text-lg text-gray-600 mb-10">
              <p className="leading-relaxed">
                We support founders with game-change ideas. We focus on AI for <strong>Health and Wellness</strong>, <strong>Energy Efficiency</strong>, <strong>Environment</strong> and <strong>Societal Impact</strong>. We prioritize for under-represented entrepreneurs in tech field.
              </p>
              <p className="leading-relaxed">We provide accelerator programs such as:</p>
              <ul className="space-y-2 pl-6">
                <li className="leading-relaxed">• Founder-focused, technology/business/operation-oriented accelerator program</li>
                <li className="leading-relaxed">• Master class, on-line training, and networking events Seminars</li>
                <li className="leading-relaxed">• Founder's promotion programs: Demo Day, show-booth, marketing</li>
              </ul>
              <p className="leading-relaxed">
                Together with access to <a href="/founders/network-form" className="text-blue-600 underline hover:text-blue-700 transition-colors">Founder's Network</a> and <a href="/partners" className="text-blue-600 underline hover:text-blue-700 transition-colors">Venture Platforms</a>, we provide 1-stop support to founders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="/programs/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-4 font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Apply to Accelerator
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/founders/network-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 text-blue-600 px-6 py-4 font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Join Founder's Network
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/partners"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-600 text-purple-600 px-6 py-4 font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                Access Venture Platforms
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/programs/faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 text-gray-700 px-6 py-4 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Q&A
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* About the Accelerator */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Is the EverythingAI Accelerator?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                The EverythingAI Accelerator is an educational program for the founders to pave the path from idea or early traction to a fundable, start-up ready and scalable business entity through mindful education leveraging AI tools, network with peers, experts and investors.
              </p>
              <p className="leading-relaxed">
                We combine AI tools, human mentorship, and an ethical support ecosystem to help founders achieve our guiding vision:
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-blue-600">
                <p className="text-2xl font-bold text-gray-900">
                  "1 Founder. $1 Million. 1 Year."
                </p>
                <p className="text-gray-600 mt-2">
                  as a framework for what focused innovation, AI-driven efficiency, and community support can unlock.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our accelerator supports founders who are navigating development stages, especially in:
              </h3>
              <p className="text-xl text-gray-700 mb-8 font-semibold">We support tech founders in:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">Health & wellness</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">Energy efficiency & climate</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">Environmental sustainability</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-900 text-white rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">Education & social innovation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <p className="text-xl text-gray-800 leading-relaxed">
                We prioritize underrepresented founders in technology, including <strong>women</strong>, <strong>minorities</strong>, and <strong>first-time entrepreneurs</strong>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Is This Accelerator for You? */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Is This Accelerator for You?
              </h2>
              <p className="text-2xl font-semibold text-blue-600 mb-8">Ideal founders</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Have an AI-enabled idea, prototype, or product</h3>
                    <p className="text-gray-700 text-sm">A founder with an AI associated product, prototype, or strong problem statement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Are solving meaningful real-world problems</h3>
                    <p className="text-gray-700 text-sm">Working on a real-world problem with measurable impact (not just "AI for AI's sake")</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Are open to structured execution and mentorship</h3>
                    <p className="text-gray-700 text-sm">Open to mentorship, feedback, and structured execution (NDA can be signed to protect your IP)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Can commit to 3-12 months of focused work</h3>
                    <p className="text-gray-700 text-sm">Ready to commit time and energy for a year-round regular or need driven interactive problem solving sessions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Want access to investors, experts, and advisors</h3>
                    <p className="text-gray-700 text-sm">Interested in connecting with interested investors, advisors, mentors, partners and peers in the EverythingAI Founder's Network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/is_the_accelarator_for_you_image.png"
                alt="AI Technology Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What Founders Receive */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Founders Receive?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    AI-Powered Founder Playbooks
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Structured templates, canvases, and AI tools for idea validation, GTM (go-to-market), fundraising prep, and operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Mentorship & Expert Network
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Access to the resources: peer Founders, Investors, volunteering mentors and domain specific Experts consultation (reasonable rate).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Workshops & Masterclasses
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Live and online educational sessions customized per specific Founder's need on market segments, MVP product, growth, storytelling, fundraising, AI strategy and impact measurement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  04
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Founder Promotion & Demo Day
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Curated pitch opportunities, sponsored conference/tradeshow participations, and visibility through EverythingAI community channels, demo day for investors, networking events, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-white text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  05
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    MVP Grants
                  </h3>
                  <p className="leading-relaxed">
                    At the end of program, you can be one of the selected hero MVPs to receive 1-time grant, tools credits, infrastructure utilization: bonus expert consulting hours, cloud computing credits, development software, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Structure */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How does the accelerator structure?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Per your need, program is structured in Phases:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  Phase 1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Journey Started</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span>Polished problem-statement, product definition, value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span>"What-if" scenarios analysis and do-ability analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span>"Gap" analysis and how can AI mitigate the gap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 border-l-4 border-blue-700 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-blue-700 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  Phase 2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Build & Validate</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-700 mt-2 flex-shrink-0"></div>
                      <span>Product/MVP build or refine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-700 mt-2 flex-shrink-0"></div>
                      <span>Customer discovery, pilots, or beta testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-700 mt-2 flex-shrink-0"></div>
                      <span>AI integration, workflows, and ethical guardrails</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl p-8 border-l-4 border-blue-800 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-blue-800 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  Phase 3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Grow & Fundraise Ready</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-800 mt-2 flex-shrink-0"></div>
                      <span>Go-to-market strategy and pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-800 mt-2 flex-shrink-0"></div>
                      <span>Storytelling, pitch narrative, and data room basics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-800 mt-2 flex-shrink-0"></div>
                      <span>Warm introductions where aligned with investor thesis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-gradient-to-r from-blue-300 to-blue-400 rounded-2xl p-8 border-l-4 border-blue-900 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-blue-900 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  Phase 4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Day & Beyond</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-900 mt-2 flex-shrink-0"></div>
                      <span>Final pitch / showcase to community of founders, funders & innovators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-900 mt-2 flex-shrink-0"></div>
                      <span>Ongoing access to the EAF network, events, and alumni resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Future Initiatives Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Future Initiatives Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The EverythingAI Foundation is dedicated to driving innovation through AI. Our future initiatives include meaningful events that will foster community engagement, showcase advancements, and support our mission. Each event serves as a crucial step in our journey toward a better tomorrow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TimelineEvent
              title="Innovibe Summit"
              description="A gathering of leaders, investors, founders, and ecosystem partners to showcase breakthrough innovations and foster strategic connections."
              icon={Network}
            />
            <TimelineEvent
              title="Founder, Funder, Innovators"
              description="An event showcasing local startups and investor meet quarterly to facilitate funding opportunities and partnership development."
              icon={Users}
            />
            <TimelineEvent
              title="Annual Gala"
              description="A celebration of achievements and future goals with our donors circle, recognizing contributions and impact made throughout the year."
              icon={Award}
            />
            <TimelineEvent
              title="Youth Founder Workshop"
              description="An educational program for young aspiring innovators to learn entrepreneurship, AI fundamentals, and develop their own startup ideas."
              icon={Lightbulb}
            />
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10"></div>
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Impact</h2>
            <p className="text-xl leading-relaxed text-blue-100">
              At the EverythingAI Foundation, we believe in the transformative potential of artificial intelligence to address global challenges and enhance quality of life. Our initiatives focus on leveraging AI technology to create impactful solutions across various sectors, including education, healthcare, and environmental sustainability. By collaborating with donors, corporate partners, and innovators, we aim to advance research and development that drives social change. Together, we can empower communities and foster advancements that resonate far beyond our present. Join us in our mission to harness the power of AI for a brighter future, creating lasting benefits for all.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our Ecosystem?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                Whether you're a startup founder, corporate partner, or individual supporter, we have opportunities for you to make an impact.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/programs/apply"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white text-blue-600 px-8 py-4 font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Apply as a Startup
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Heart className="w-5 h-5" />
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
