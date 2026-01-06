"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleHelp as HelpCircle, Users, Rocket, Building2, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
  id?: string;
}

function FAQItem({ question, answer, id }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (id && hash === id) {
      setIsOpen(true);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [id]);

  const handleToggle = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);

    if (newOpenState && id) {
      window.history.replaceState(null, '', `#${id}`);
    } else if (!newOpenState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <div id={id} className="scroll-mt-20 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <button
        onClick={handleToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-700 leading-relaxed space-y-3">
          {answer}
        </div>
      )}
    </div>
  );
}

interface SectionNavProps {
  title: string;
  href: string;
  icon: React.ElementType;
}

function SectionNav({ title, href, icon: Icon }: SectionNavProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
      </div>
      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </span>
      <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
    </a>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        <Container className="py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Find answers to common questions about EverythingAI Foundation, our programs, and how you can get involved.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <SectionNav
              title="About Us"
              href="#about"
              icon={HelpCircle}
            />
            <SectionNav
              title="Startup Accelerators"
              href="#accelerators"
              icon={Rocket}
            />
            <SectionNav
              title="Founder's Network"
              href="#founders-network"
              icon={Users}
            />
            <SectionNav
              title="Venture Platforms"
              href="/platform"
              icon={Building2}
            />
          </div>

          <div id="about" className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">About EverythingAI Foundation</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <FAQItem
                question="What is EverythingAI Foundation?"
                answer={
                  <p>
                    Learn more about us on our{" "}
                    <a href="/#who-we-are" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                      Who We Are section
                    </a>
                    .
                  </p>
                }
              />
              <FAQItem
                question="What is your mission?"
                answer={
                  <p>
                    Discover our mission on the{" "}
                    <a href="/#mission" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                      Our Mission section
                    </a>{" "}
                    .
                  </p>
                }
              />
              <FAQItem
                question="Why does EverythingAI Foundation exist — and why now?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Artificial intelligence is transforming nearly every industry, but access to AI talent, capital, and infrastructure is still concentrated in large, high-profile companies. This leaves many capable innovators on the sidelines.
                    </p>
                    <p>
                      At the same time, AI has lowered the barrier to entry. With the right support, small startups—or even single, mission-driven founders—can now build solutions with meaningful, long-term impact. This is especially true for challenges in <strong>health and wellness, energy efficiency, environmental sustainability, and broader social good</strong>.
                    </p>
                    <p>
                      <strong>EverythingAI Foundation exists to close this gap.</strong> We support purpose-driven founders by providing startup acceleration, trusted networks, and access to funding—while promoting the responsible use of AI with strong ethical standards, accountability, and measurable outcomes.
                    </p>
                    <p>
                      <strong>The timing matters.</strong> The choices made today will shape whether AI increases inequality or expands opportunity. EverythingAI Foundation is committed to ensuring AI becomes a force for inclusive, positive impact.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What problem are you uniquely positioned to solve?"
                answer={
                  <div className="space-y-3">
                    <p>
                      The biggest barriers to impact-driven AI innovation are not ideas—they are <strong>access, execution, and trust</strong>.
                    </p>
                    <p>
                      Mission-oriented founders often lack access to capital, struggle to scale early AI prototypes into viable ventures, and face uncertainty around ethical and responsible AI use.
                    </p>
                    <p>
                      EverythingAI Foundation bridges these gaps through 3 major components:
                    </p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>
                        <strong>Accelerator Programs</strong> (
                        <a href="/programs" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                          Link to Startup Accelerators
                        </a>
                        ) with customized 3-12 month programs.
                      </li>
                      <li>
                        <strong>Founder's Network</strong> (
                        <a href="/founders" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                          Link to Founder's Network
                        </a>
                        ) which integrates talents with AI expertise, execution support, mentorship, and capital preparation—to help founders.
                      </li>
                      <li>
                        <strong>Digital Venture Platform</strong> (
                        <a href="/platform" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                          Link to Venture Platforms
                        </a>
                        ) to improve startup ramping efficiency.
                      </li>
                    </ol>
                  </div>
                }
              />
              <FAQItem
                question='What does the "1 Founder • $1M • 1 Year" promise actually mean?'
                answer={
                  <div className="space-y-3">
                    <p>Within 12 months, founders who participate in accelerator programs are guided to be prepared for:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Up to $1M in revenue, grants, pilots, or contract opportunities</strong></li>
                      <li><strong>Institutional-quality execution</strong>, from product to operations</li>
                      <li><strong>Investor- and donor-ready</strong> governance and compliance</li>
                      <li><strong>Responsible AI development</strong> and deployment standards</li>
                    </ul>
                    <p>We focus on building <strong>durable, scalable organizations</strong>, not chasing short-term hype.</p>
                    <p className="text-sm italic text-gray-600">
                      <strong>Disclaimer:</strong> Participation in EverythingAI Foundation accelerator programs does not guarantee funding, revenue, investment, or financial outcomes.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="How is EverythingAI Foundation different from traditional accelerators?"
                answer={
                  <div className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Traditional Accelerators</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EverythingAI Foundation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Equity-based programs</td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">No equity taken</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Return-driven incentives</td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">Impact-driven mission</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Short-term cohorts</td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">Long-term founder outcomes</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Capital-first focus</td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">Capability building + capital readiness</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Limited governance oversight</td>
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">Strong governance, ethics, and accountability</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      We are designed for founders building <strong>durable, responsible solutions</strong>—not quick exits.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What is the governance structure?"
                answer={
                  <div className="space-y-3">
                    <p>EverythingAI Foundation is governed by:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>An independent Board of Directors</li>
                      <li>Advisory leaders from AI, entrepreneurship, and impact sectors</li>
                      <li>Formal financial and operational oversight</li>
                    </ul>
                    <p>We follow nonprofit governance best practices, ensuring long-term credibility and trust.</p>
                  </div>
                }
              />
              <FAQItem
                question="How we protect donor capital, founders, and reputation?"
                answer={
                  <div className="space-y-3">
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Independent Board oversight and documented decision rights</li>
                      <li>Conflict-of-interest policy: annual disclosure + audit</li>
                      <li>Financial controls: budget approvals, expense policy, dual-signature thresholds</li>
                      <li>Vendor & sponsor ethics: no "pay-to-play" founder access</li>
                      <li>Data privacy & Responsible AI: transparency, fairness, consent, and security expectations</li>
                      <li>Program quality assurance: milestone gates; founders advance based on measurable progress</li>
                      <li>Reporting cadence: quarterly donor updates + annual impact report</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>

          <div id="accelerators" className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Startup Accelerator</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <FAQItem
                question="What does the Startup Accelerator offer by EverythingAI?"
                answer={
                  <p>
                    Everything AI Startup Accelerator is a 3-12 month educational program solely targeted for curated founders to pave the path to a scalable business entity. It includes (but not limited to): 3-12 month structured curriculum, 3 month boot camps, on-line new technology learning, demo days, ecosystem access, and fundraising preparation with crystal clear goal of "1M * 1Y". Learn more{" "}
                    <a href="/programs" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                      Goto Startup Accelerators
                    </a>
                    .
                  </p>
                }
              />
              <FAQItem
                question="Who can apply for Accelerator Program?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Founders who already joined Founder's Network and actively engaged in activities in Founder's network. To join Founder's Network (
                      <a href="/" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                        Goto JOIN THE NETWORK
                      </a>
                      ) and to Apply to Accelerator Program (
                      <a href="/programs/apply" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                        Goto Apply to Accelerator
                      </a>
                      ).
                    </p>
                  </div>
                }
              />
              <FAQItem
                question='Why does EverythingAI Foundation use bold targets like "$1M in 1 Year" for Founders?'
                answer={
                  <div className="space-y-3">
                    <p>
                      <strong>Bold targets create clarity, urgency, and focus.</strong>
                    </p>
                    <p>
                      Early-stage founders often lack concrete benchmarks for what "ready to scale" means. The "$1M in 1 Year" target sets a clear north star—not as a guarantee, but as a standard for operational and financial readiness.
                    </p>
                    <p>
                      <strong>The goal is readiness, not a number.</strong>
                    </p>
                    <p>
                      Success may take the form of contracted pilots, secured grants, enterprise partnerships, or validated revenue pipelines that demonstrate credible scale potential.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Is there a cost to participate the Accelerator Program?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Everything AI Foundation normally do not charge the cohorts in most of the Accelerator programs. When in exceptional condition when the content cost is clearly justified by the benefits it is possible the Foundation will charge the cohorts at discounted price but with options to not in or quit anytime. On the other hand, founders who signed into the program need to commit of engaging and to follow the engagement rules.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What's the difference of Founders who joined the accelerator program and Founders who joined the Founder's network?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Founder's Network is a much more open network which contains founders, experts/mentors, and investors for networking and matched 1-1 pairing to address specific needs for founders no matter it is funding need, talents recruiting need and go-to market need, etc. It is more loosely managed in comparison with founders who joined the Accelerator which are governed by EverythingAI program curriculums and targeted specifically for "1 Founder * 1M * 1Y".
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          <div id="founders-network" className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Founder's Network</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <FAQItem
                question="What is Founder's Network?"
                answer={
                  <div className="space-y-3">
                    <p>
                      The Founder's Network is an <strong>open, mission-aligned community</strong> of founders, mentors/experts, and investors working together toward addressing specific founder's need. The network will be managed by EverythingAI Foundation through purely AI powered technologies automatically such as 1-1 matching, progress monitoring and activity logging, etc.
                    </p>
                    <p>
                      The Network is intentionally designed to create <strong>deep collaboration, accountability, and trust</strong>—connecting founders with the expertise and support needed to move from early-stage ideas to scalable, responsible ventures.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="How does this Founder's Network different from other professional networks?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Most professional networks focus on introductions. The Founder's Network focuses on <strong>outcomes</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Clearly targeted</strong> to help founders.</li>
                      <li><strong>Active collaboration</strong>, not passive networking</li>
                      <li><strong>Execution-driven engagement</strong>, not just events or social posts</li>
                      <li><strong>Aligned incentives</strong> across founders, experts/mentors, and investors</li>
                      <li><strong>Shared standards</strong> for governance, ethics, and responsible AI</li>
                      <li>The Network exists to help founders <strong>build real momentum</strong>—not just grow their contact list.</li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                question="Who can apply to Join Founder's Network as Founders?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Early-stage founders, and impact-oriented startups leveraging AI to solve challenges in the focused areas (Health and Wellness, Energy Efficiency, Clean Environment, Education and Societal Impactful technology areas) may apply. Teams should demonstrate ethical AI use, mission alignment, and growth potential.{' '}
                      <a href="/founders#about-founders" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        Learn more about founders in our network
                      </a>
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="By joining the founder's network, do founders automatically qualify for the accelerator programs?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. Only founders who joined Founder's Network can apply for accelerator programs offered by EverythingAI Foundation. But not guarantee every application will be granted for limited resource availability.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Who can apply to join Founder's Network as Expert or Mentor"
                answer={
                  <div className="space-y-3">
                    <p>We especially value expertise in:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>AI/ML product, data strategy, and MLOps</li>
                      <li>Responsible AI, privacy, security, and compliance</li>
                      <li>Go-to-market, partnerships, enterprise sales</li>
                      <li>Fundraising, grants, nonprofit governance, finance</li>
                      <li>Sector expertise: workforce, health, education, energy, climate</li>
                    </ul>
                    <p>
                      More info in{' '}
                      <a href="/founders#experts" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        "Our Network of Experts" section in Founder's Network Page
                      </a>
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Will expert be joining Founder's Network through &quot;invitation&quot; only?"
                answer={
                  <div className="space-y-3">
                    <p>
                      It can be both. We welcome application through &quot;Apply for Expert Role&quot;{' '}
                      <a href="/founders/join" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        (link to join the network in Founder's Network page)
                      </a>
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What is expert role in Founder's Network"
                answer={
                  <div className="space-y-3">
                    <p>
                      Joined expert in Founder's Network will be automatically matched 1x1 or 1xn with our founders to establish a 12-month mentoring relationship through periodic or need based meetings or office hours. Mentor will help founder to identify major gaps and leverage the infrastructure offered by EverythingAI foundation to get there.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What is the time commitment?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Flexible. Totally depends on matching Founder's need and mutually agreed time. Expert will be able to logging hours spent through our website system to receive reward from the donation received.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Is this a volunteer role or paid?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Most experts participate as volunteered mentors. For special condition, i.e. if founders decided to hire the mentor as consultant for reasonable consulting service fee, or EverythingAI Foundation decided to contract the expert to do curriculum build or deep technical audits, expert can receive payment for the service.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Are there guidelines for experts to perform the role?"
                answer={
                  <div className="space-y-3">
                    <p>Yes. We maintain founder's trust through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Confidentiality expectations</li>
                      <li>No solicitation of equity for mentorship</li>
                      <li>No taking proprietary work without permission</li>
                      <li>Disclosing conflicts (competitive overlaps, investment interests)</li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                question="Can experts invest in founders or company that they mentor?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Potentially yes, but with safeguards:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Founder-initiated conversations</li>
                      <li>Full disclosure and appropriate boundaries</li>
                      <li>No pressure, and no quid-pro-quo mentorship</li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                question="Who can apply to join Founder's Network as investor"
                answer={
                  <div className="space-y-3">
                    <p>
                      Angel investors, venture capital firms and impact investors who are actively seeking for innovative AI-driven start-ups to invest and support.{' '}
                      <a href="/founders#investors" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        Go to &quot;Connect with Investors&quot; section of Founder's Network page
                      </a>
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Will Investor be joining Founder's Network through &quot;invitation&quot; only?"
                answer={
                  <div className="space-y-3">
                    <p>
                      It can be both. Interested investors can either join through{' '}
                      <a href="/founders/join" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        &quot;JOIN THE NETWORK&quot; link
                      </a>{' '}
                      as investor, send us an email (link to{' '}
                      <a href="mailto:contact@everythingai.org" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                        &quot;send us email&quot;
                      </a>
                      ) or we will proactively invite matching investors per founder's need.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What is Investor role in Founder's Network"
                answer={
                  <div className="space-y-3">
                    <p>
                      Investors engage as ecosystem partners who help founders become investment-ready through capital introduction, feedback, and connections. In EverythingAI Founder's Network, we view investors are longer term and closer coupling with the investing founder(s) through quality engagement. We curate high-quality access while protecting founder trust and mission alignment.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="What Investor get by playing the role in Founder's Network?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Exposure to very early-stage mission driven founders and the cutting edge of AI-driven solutions in focused areas. Networking with other investors, founders and experts as well as educational accelerator programs provided by EverythingAI Foundation.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Can investors invest directly in cohort companies?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes—if a founder chooses to raise capital and there is mutual fit. Any investment conversations happen directly between the investor and the founder; the Foundation is not a broker and does not receive transaction fees.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="How does investor get access to founders or deal flow?"
                answer={
                  <div className="space-y-3">
                    <p>
                      4 investors can meet through curated touchpoints:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Demo Day / Showcase events</li>
                      <li>Office hours (opt-in for founders)</li>
                      <li>Investor roundtables</li>
                      <li>1:1 introductions (by request, based on fit)</li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                question="What companies investors will be introduced to?"
                answer={
                  <div className="space-y-3">
                    <p>
                      It depends on investor's interest as well as the matching founders in the network. After joining "Founder's Network" an investor profile will be generated. If setup, we will push the potentially matching founders to investors for preview. For high degree matching (done by our unique matching tool), we will contact the investor to arrange meeting targeted for potential investing decision which is of interest to both founders and investors.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Are there guidelines for investor conduct?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. We protect founders from predatory behavior. Expectations include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>No pressure tactics or pay-to-play access</li>
                      <li>Respect confidentiality and founder IP</li>
                      <li>Transparent terms and founder-friendly practices</li>
                      <li>Clear conflict-of-interest disclosures when applicable</li>
                    </ul>
                  </div>
                }
              />
              <FAQItem
                question="Do you share data rooms or proprietary information?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Only when founders opt-in and choose to share. We encourage structured readiness (deck, metrics, traction, security posture) but founder control is central.
                    </p>
                  </div>
                }
              />
              <FAQItem
                question="Can investors sponsor the program too?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. Investors may support cohorts as philanthropic sponsors (no equity or financial return) while participating in investor programming.
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          <div id="venture-platforms" className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Venture Platforms</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <FAQItem
                id="venture-platforms-definition"
                question="What is the definition of Venture Platforms?"
                answer={
                  <div className="space-y-3">
                    <p>
                      EverythingAI Venture Platforms are integrated ecosystems designed to accelerate mission-driven startups by bringing together people, organizations, and technology.
                    </p>
                    <p>
                      3 key Venture Platforms are working together to provide solid supporting foundation:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li><strong>Innovation Partners</strong> – Corporate, academic, and local community organizations that provide funding, resources, pilots, and real-world collaboration opportunities.</li>
                      <li><strong>Individual Sponsors</strong> – Mission-aligned individual donors who support EverythingAI Foundation at different levels and help sustain long-term impact.</li>
                      <li><strong>Digital Venture Platform</strong> – A unified EverythingAI interface that combines trusted third-party tools with internally developed systems to improve startup efficiency, execution, and governance.</li>
                    </ol>
                    <p>
                      Together, these platforms form a cohesive eco-system that enables founders to move faster, operate responsibly, and scale with confidence.
                    </p>
                  </div>
                }
              />

              <FAQItem
                id="why-partner"
                question="Why partner with EverythingAI Foundation?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Partnering with EverythingAI Foundation allows organizations to advance innovation, talent development, and social impact—through the responsible use of AI.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Corporate partners</strong> gain early access to emerging AI innovation, diverse founder talent, and mission-aligned ventures, while advancing ESG, DEI, and workforce development goals.
                      </li>
                      <li>
                        <strong>Community-oriented nonprofits and ecosystem partners</strong> help strengthen local AI ecosystems by supporting inclusive innovation that benefits the broader community.
                      </li>
                      <li>
                        <strong>Universities, research institutes, and schools</strong> connect academic education with real-world problem solving, applied research, and responsible commercialization.
                      </li>
                    </ul>
                    <p>
                      Together, we create partnerships that translate AI innovation into measurable, community-centered impact.
                    </p>
                  </div>
                }
              />

              <FAQItem
                id="sponsorship-opportunities"
                question="What sponsorship opportunities exist?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Sponsorships include sponsoring various EverythingAI Foundation activities such as accelerator cohorts, demo days, innovation challenges, impact tracks, founder scholarships, and in-kind contributions, etc.
                    </p>
                    <Link
                      href="/partners"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Learn more about partnership opportunities
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="branding-opportunities"
                question="Do corporate sponsors and/or partners receive branding and engagement opportunities?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. Sponsors may receive brand visibility, speaking roles, mentor access, and engagement opportunities aligned with ethical guidelines.
                    </p>
                    <Link
                      href="/partners#tiers"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      View sponsorship tiers and packages
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="individual-sponsor"
                question="Who qualify as individual sponsor?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Any individuals, family offices and private foundations who are aligned with EverythingAI Foundation's mission and are willing to donate at specified levels of donation are welcome to become our sponsors.
                    </p>
                    <Link
                      href="/partners#sponsors"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Learn more about becoming a sponsor
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="tax-deductible"
                question="Are sponsor's donations tax-deductible?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. EverythingAI Foundation is a registered 501(c)(3) organization. Donations are tax-deductible as permitted by law.
                    </p>
                  </div>
                }
              />

              <FAQItem
                id="donation-usage"
                question="How are donations used?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Donations will be used to support 3 legs of EverythingAI foundation operations:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Yearly Accelerator Programs</strong> (
                        <Link href="/programs" className="text-blue-600 hover:text-blue-700 underline">
                          more info
                        </Link>
                        )
                      </li>
                      <li>
                        <strong>Founder's Network activities and maintenance</strong> (
                        <Link href="/founders" className="text-blue-600 hover:text-blue-700 underline">
                          more info
                        </Link>
                        )
                      </li>
                      <li>Critical funding needs to support Accelerator program goals</li>
                      <li>
                        <strong>Development and maintenance of digital venture platforms</strong> (
                        <Link href="/platform#digital-platform" className="text-blue-600 hover:text-blue-700 underline">
                          more info
                        </Link>
                        )
                      </li>
                      <li>Longer-term foundational technology development support, etc.</li>
                    </ul>
                  </div>
                }
              />

              <FAQItem
                id="impact-reports"
                question="Do sponsors receive impact reports?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Yes. Sponsors receive annually impact updates highlighting outcomes, milestones, and founder progress. Besides, registered sponsors can login to the website for more details of execution status such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Founder progress against revenue or funding milestones</li>
                      <li>Jobs created and workforce outcomes</li>
                      <li>AI adoption with ethical safeguards</li>
                      <li>Follow-on funding or institutional partnerships</li>
                      <li>Community and societal benefit indicators</li>
                    </ul>
                  </div>
                }
              />

              <FAQItem
                id="sponsor-influence"
                question="Can sponsors influence strategy or investment decisions?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Sponsors do not direct individual founder selection or receive preferential outcomes. However, strategic level donors may:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Support specific impact tracks (e.g., AI for Workforce or Health)</li>
                      <li>Serve as advisors or mentors (where appropriate)</li>
                      <li>Engage in ecosystem convenings</li>
                      <li>Receive curated insight into impact themes and trends</li>
                    </ul>
                    <p>
                      This protects founder independence and ethical integrity.
                    </p>
                  </div>
                }
              />

              <FAQItem
                id="personal-involvement"
                question="Why should a potential sponsor to be personally involved?"
                answer={
                  <div className="space-y-3">
                    <p>
                      Because capital shapes the future. Individuals, Family offices and Family Foundations have a rare opportunity to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Influence how AI is deployed at its formative stage</li>
                      <li>Support founders building foundational solutions</li>
                      <li>Create legacy impact beyond traditional philanthropy</li>
                    </ul>
                    <p>
                      This is about stewardship of innovation, not just generosity.
                    </p>
                  </div>
                }
              />

              <FAQItem
                id="engage-next"
                question="How can an interested individual to engage next?"
                answer={
                  <div className="space-y-3">
                    <p>
                      We invite private conversations to explore alignment, values, and impact goals.
                    </p>
                    <div className="space-y-2">
                      <p>
                        <strong>Contact:</strong>{" "}
                        <a href="mailto:info@everythingaifoundation.org" className="text-blue-600 hover:text-blue-700 underline">
                          info@everythingaifoundation.org
                        </a>
                      </p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://everythingaifoundation.org" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                          EverythingAI Foundation
                        </a>
                      </p>
                    </div>
                  </div>
                }
              />

              <FAQItem
                id="digital-venture-platform"
                question="What is EverythingAI Digital Venture Platform?"
                answer={
                  <div className="space-y-3">
                    <p>
                      EverythingAI Digital Venture Platform is an infrastructure of tools to assist startups for efficient ramp-up from idea or initial prototype to scalable business entity. It covers the whole spectrum of small business need from product definition and planning to full scale operation.
                    </p>
                    <Link
                      href="/platform#digital-platform"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Learn more about Digital Venture Platform
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="platform-availability"
                question="When will it be available?"
                answer={
                  <div className="space-y-3">
                    <p>
                      While it is under-development and availability will be announced in our website.
                    </p>
                    <Link
                      href="/platform#offering"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Check Digital Venture Platform updates
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="platform-access"
                question="How do I access them when available?"
                answer={
                  <div className="space-y-3">
                    <p>
                      The scope of accessibility will be in the order of cohorts in accelerator programs, founders who joined Founder's Network and registered users through Sign-Up, and others per special request.
                    </p>
                    <p>
                      For more information, send request to:{" "}
                      <a href="mailto:info@everythingaifoundation.org" className="text-blue-600 hover:text-blue-700 underline">
                        info@everythingaifoundation.org
                      </a>
                    </p>
                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Sign up now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                }
              />

              <FAQItem
                id="platform-feedback"
                question="How can I send my feedback or customized request for the platform?"
                answer={
                  <div className="space-y-3">
                    <p>
                      After accessing the tools platform, each user will be able to send the feedback or special request for customization through the platform.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@everythingaifoundation.org"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-600 px-8 py-4 font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="/founders/network-form"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Join the Network
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
