"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function PlatformPage() {
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);

   useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
        }
      }
    };

    handleHashScroll();

    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onDonateClick={() => setDonationDialogOpen(true)} />

      <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10 blur-md"></div>

        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Support Founders&apos; Venture Journey
                </h1>
                <p className="text-2xl text-gray-700 font-medium">
                  Partners, Sponsors, and our AI-powered Digital Venture Platform
                </p>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                In order to support the venture journey of our founders from every
                perspective, we are building a venture-friendly ecosystem that combines
                people, organizations, and technology:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">Innovation Partners</span>
                    <span className="text-gray-600"> — corporate, academic, and local community sponsorship opportunities</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">Individual Sponsors</span>
                    <span className="text-gray-600"> — Supporter, Advocate, and Visionary levels</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">Digital Venture Platform</span>
                    <span className="text-gray-600"> — a unified EverythingAI interface bundling best-fit 3rd-party tools + in-house tools to improve startup efficiency</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative overflow-visible">
              <div className="relative rounded-2xl shadow-2xl overflow-visible">
                <img
                  src="/hero-wide.png"
                  alt="Team collaborating on startup dashboard"
                  className="w-full h-auto scale-150 origin-left rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href="/partners">Become a Partner</a>
            </Button>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href="/donate">Become a Sponsor</a>
            </Button>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href="#digital-platform">Explore the Platform</a>
            </Button>
          </div>
        </Container>
      </section>

      <section id="digital-platform" className="scroll-mt-20 py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <Container>
          <div className="mb-8 lg:mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Digital Venture Platform
            </h2>
            <p className="text-xl text-gray-300">
              Tools & Infrastructure for Startup Acceleration
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Early-stage founders spend enormous time and money assembling fragmented tools for product development, business operations, and go-to-market execution.
                </p>

                <p className="text-gray-200 text-lg leading-relaxed">
                  <span className="font-semibold text-white">EverythingAI Digital Venture Platform</span> provides a single, unified, AI-embedded interface that bundles startup-friendly intelligent tools across the entire venture lifecycle—from idea to early traction—while hiding tool complexity, single user sensitivity behind a cohesive experience.
                </p>

                <p className="text-gray-300 text-base font-medium">
                  EverythingAI Digital Venture Platform is structured into Tiers:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                {/* Basic Tier */}
                <div className="bg-white/95 backdrop-blur-sm border-2 border-blue-300 rounded-2xl p-5 flex flex-col hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-2 text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                    <div className="inline-block px-3 py-1.5 bg-blue-100 border border-blue-300 rounded-full">
                      <p className="text-xs text-blue-900 font-medium">Idea → MVP</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Free<br /><span className="text-xs text-gray-600">(nonprofit-supported)</span></p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Goal</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Remove friction to start</p>
                    </div>
                  </div>
                </div>

                {/* Basic+ Tier */}
                <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-5 flex flex-col hover:border-green-500 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-2 text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Basic+</h3>
                    <div className="inline-block px-3 py-1.5 bg-green-100 border border-green-300 rounded-full">
                      <p className="text-xs text-green-900 font-medium">MVP → Early traction</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Low-cost<br /><span className="text-xs text-gray-600">subscription</span></p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Goal</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Enable execution speed</p>
                    </div>
                  </div>
                </div>

                {/* Advanced Tier */}
                <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-300 rounded-2xl p-5 flex flex-col hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-2 text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Advanced</h3>
                    <div className="inline-block px-3 py-1.5 bg-orange-100 border border-orange-300 rounded-full">
                      <p className="text-xs text-orange-900 font-medium">Traction → Pre-scale</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Discounted<br /><span className="text-xs text-gray-600">bundle</span></p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border-2 border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Goal</p>
                      <p className="text-sm text-gray-900 font-semibold leading-tight">Professionalize operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src="/dashboard-closeup.png"
                  alt="Startup Growth Dashboard"
                  className="w-full h-auto scale-110"
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-gray-300 font-medium">
                  Startup health
                </span>
                <span className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-gray-300 font-medium">
                  Runway
                </span>
                <span className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-gray-300 font-medium">
                  Execution
                </span>
                <span className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-gray-300 font-medium">
                  Available soon
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="mb-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Status Quo
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600">
              What early-stage startups are using today (here are examples)
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-lg p-2 text-base font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Product Definition & Planning</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Notion</p>
                        <p className="text-xs text-gray-600">Docs, specs, roadmap</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Miro / Figma</p>
                        <p className="text-xs text-gray-600">Brainstorming, mapping, mockups</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Google Workspace</p>
                        <p className="text-xs text-gray-600">Email, drive, docs, admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-lg p-2 text-base font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Engineering & Infrastructure</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">GitHub / VS Code</p>
                        <p className="text-xs text-gray-600">Version control, IDE</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Vercel / Cloudflare</p>
                        <p className="text-xs text-gray-600">Hosting, security, monitoring</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Supabase</p>
                        <p className="text-xs text-gray-600">Auth, database, storage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white rounded-lg p-2 text-base font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">AI & Data Tools</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">ChatGPT / Claude</p>
                        <p className="text-xs text-gray-600">Ideation, research, drafting</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Google Colab / HuggingFace</p>
                        <p className="text-xs text-gray-600">ML experiments, model hosting</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Airtable / Pinecone</p>
                        <p className="text-xs text-gray-600">Datasets, VectorDB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-lg p-2 text-base font-bold shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Product Design & Branding</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Figma</p>
                        <p className="text-xs text-gray-600">UI mockups, design systems</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Midjourney / Looka</p>
                        <p className="text-xs text-gray-600">Design exploration, logos</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">PostHog / LaunchDarkly</p>
                        <p className="text-xs text-gray-600">Analytics, A/B testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-600 text-white rounded-lg p-2 text-base font-bold shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Business & Market Growth</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Stripe / DocuSign</p>
                        <p className="text-xs text-gray-600">Payments, agreements</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">HubSpot / Apollo</p>
                        <p className="text-xs text-gray-600">CRM, lead generation</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Webflow / Mailchimp</p>
                        <p className="text-xs text-gray-600">Marketing, email campaigns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-rose-600 text-white rounded-lg p-2 text-base font-bold shrink-0">6</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Operations</h3>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Slack / Asana</p>
                        <p className="text-xs text-gray-600">Communication, task management</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">Gusto / Clockify</p>
                        <p className="text-xs text-gray-600">HR work day, time tracking</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">QuickBooks</p>
                        <p className="text-xs text-gray-600">Accounting, workflow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Managing <span className="font-bold text-gray-900">25+ different tools</span> creates complexity, cost, and inefficiency.
                <span className="block mt-2 font-semibold text-gray-900">The Digital Venture Platform unifies these into one seamless experience.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id = "offering" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What EverythingAI is offering
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl">
              High-level platform architecture + operating principles (single interface, embedded AI, cost-aware design, and composable tools).
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-6">
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Single Interface, Hidden Engines</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Founders don&apos;t manage separate logins per tool. EverythingAI acts as the control plane.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">AI-Native, Not AI-Optional</h3>
                      <p className="text-gray-300 leading-relaxed">
                        AI is embedded as an operational layer across product, engineering, and business flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Cost-Aware & Startup-Optimized</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Free tiers where possible, centralized AI cost control, no per-seat enterprise licensing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Composable & Replaceable</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Tools can be swapped without breaking workflows; abstraction avoids vendor lock-in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src="/team-meeting.png"
                  alt="Team collaboration meeting"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-600 rounded-full text-sm text-gray-300 font-medium">
                  Control plane
                </span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-600 rounded-full text-sm text-gray-300 font-medium">
                  Orchestration
                </span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-600 rounded-full text-sm text-gray-300 font-medium">
                  No tool sprawl
                </span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-600 rounded-full text-sm text-gray-300 font-medium">
                  Available soon
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Platform Tiers & Capabilities
            </h3>

            {/* Basic Tier Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h4 className="text-2xl font-bold text-white">Basic Platform</h4>
                <p className="text-blue-100 text-sm mt-1">For idea-stage founders & first-time entrepreneurs</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Product & Ideas</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Brainstorm & ideation</span>
                        <span className="text-gray-400 text-xs">Notion</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">UX wireframing</span>
                        <span className="text-gray-400 text-xs">Figma</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">PRD with AI</span>
                        <span className="text-gray-400 text-xs">Notion AI</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Engineering</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Code repository</span>
                        <span className="text-gray-400 text-xs">GitHub</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">AI coding assistant</span>
                        <span className="text-gray-400 text-xs">Cursor</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Deployment</span>
                        <span className="text-gray-400 text-xs">Vercel</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Business</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Pitch drafting</span>
                        <span className="text-gray-400 text-xs">Canva</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Collaboration</span>
                        <span className="text-gray-400 text-xs">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">AI Features Included:</p>
                  <p className="text-gray-300 text-sm">Limited prompt templates, shared model pool, daily usage caps</p>
                </div>
              </div>
            </div>

            {/* Basic+ Tier Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h4 className="text-2xl font-bold text-white">Basic+ Platform (Low Cost)</h4>
                <p className="text-green-100 text-sm mt-1">For startups with MVP launched & first users</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Product & UX</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Product specs</span>
                        <span className="text-gray-400 text-xs">Notion Pro</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">System design</span>
                        <span className="text-gray-400 text-xs">Figma Pro</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Engineering & Data</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Backend & auth</span>
                        <span className="text-gray-400 text-xs">Supabase</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Web analytics</span>
                        <span className="text-gray-400 text-xs">PostHog</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">User feedback</span>
                        <span className="text-gray-400 text-xs">Tally</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Ops & Finance</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Accounting</span>
                        <span className="text-gray-400 text-xs">Wave</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">CRM (basic)</span>
                        <span className="text-gray-400 text-xs">HubSpot</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">AI Features Included:</p>
                  <p className="text-gray-300 text-sm">Editable prompt templates, API design review, schema validation, roadmap planning, higher token allocation</p>
                </div>
              </div>
            </div>

            {/* Advanced Tier Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <h4 className="text-2xl font-bold text-white">Advanced Platform</h4>
                <p className="text-purple-100 text-sm mt-1">For startups with 10-50 people & paying customers</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Engineering</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Production backend</span>
                        <span className="text-gray-400 text-xs">Supabase Pro</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Monitoring</span>
                        <span className="text-gray-400 text-xs">Sentry</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">CI/CD</span>
                        <span className="text-gray-400 text-xs">GitHub</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Product & Growth</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Product analytics</span>
                        <span className="text-gray-400 text-xs">PostHog</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Feature flags</span>
                        <span className="text-gray-400 text-xs">Flagsmith</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Sales & Ops</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">CRM</span>
                        <span className="text-gray-400 text-xs">HubSpot</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-300 text-sm">Customer support</span>
                        <span className="text-gray-400 text-xs">Intercom</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">AI Features Included:</p>
                  <p className="text-gray-300 text-sm">Multi-agent workflows, custom prompt pipelines, fine-grained analytics, AI-generated dashboards, private model endpoints</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />

      <AlertDialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Donation Information</AlertDialogTitle>
            <AlertDialogDescription>
              Please contact EverythingAI Foundation (startupmindsco@gmail.com) for donation related request.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
