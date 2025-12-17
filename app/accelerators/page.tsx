"use client";

import React from "react";
import { ArrowRight, CheckCircle, Users, Building2, Rocket, Target, Network, Award, Heart, Lightbulb } from "lucide-react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        <Container className="py-24 md:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Startup Accelerators & Programs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Unlocking Opportunities for Engagement and Growth
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Join a comprehensive ecosystem of support, mentorship, and resources designed to accelerate your AI startup from concept to scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/accelerators/apply"
                className="group inline-flex items-center gap-2 rounded-xl bg-white text-blue-600 px-8 py-4 font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#partnerships"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Partnerships
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Individual Donor Opportunities */}
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Individual Donor Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in shaping the future through meaningful support and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DonorLevelCard
              title="Supporter Level"
              description="As a Supporter, you play a crucial role in our foundation's mission. Your contributions provide essential resources for our startups and outreach initiatives. Enjoy recognition on our website and newsletters, featuring your name and support level, and become part of a community dedicated to advancing AI for societal good."
              icon={Heart}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <DonorLevelCard
              title="Advocate Level"
              description="As an Advocate, your generosity amplifies our impact significantly. In addition to the benefits of the Supporter Level, Advocates receive exclusive invitations to donor appreciation events, mentorship opportunities, and early access to our events allowing you to engage deeply with the community and our mission."
              icon={Users}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
            <DonorLevelCard
              title="Visionary Level"
              description="The Visionary level embodies leadership in philanthropy. You will receive all previous benefits and personalized recognition during our events, including social media shout-outs and branding visibility. Your support directly influences our innovative programs, ensuring that together, we cultivate a transformative future in AI technology and education."
              icon={Award}
              gradient="bg-gradient-to-r from-green-500 to-green-600"
            />
          </div>
        </Container>
      </section>

      {/* Corporate Sponsorship */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Corporate Sponsorship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlocking opportunities for engagement and growth through strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DonorLevelCard
              title="Community Partner"
              description="As a Community Partner, your organization will play a pivotal role in supporting the EverythingAI Foundation's mission. Enjoy recognition at events, access to exclusive networking opportunities, and the chance to engage with our vibrant community. Your brand will be displayed prominently, reinforcing your commitment to social impact and innovation. This partnership level is ideal for businesses eager to make a difference."
              icon={Building2}
              gradient="bg-gradient-to-r from-orange-500 to-red-500"
            />
            <DonorLevelCard
              title="Growth Partner"
              description="Becoming a Growth Partner elevates your support with enhanced visibility and engagement opportunities. Your sponsorship includes event branding, mentorship chances for emerging leaders, and access to exclusive thought leadership forums. This tier is specifically designed for companies looking to expand their reach while contributing to meaningful AI advancements and community development initiatives."
              icon={Target}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <DonorLevelCard
              title="Innovation Leader"
              description="As an Innovation Leader, your company will be at the forefront of AI progress. This tier offers unparalleled branding visibility and bespoke opportunities tailored to your organizational goals. Engage with AI thought leaders, participate in exclusive innovation workshops, and gain recognition as a driving force behind the foundation's initiatives. Your investment will significantly impact the future of AI development and social progress."
              icon={Rocket}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>
        </Container>
      </section>

      {/* Innovation Partners */}
      <section id="partnerships" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Innovation Partners
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Collaborating for AI Advancement and Impact
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At EverythingAI Foundation, we believe that collaboration is key to advancing the field of artificial intelligence. By partnering with us, organizations can engage in impactful startups that not only push the boundaries of technology but also create significant social benefits. Our innovation partners will gain access to exclusive resources, mentorship opportunities, and the chance to be part of a vibrant community dedicated to shaping the future of ethical AI. Together, we aim to foster an environment where innovation thrives and meaningful change is realized.
              </p>
            </div>
            <div className="space-y-6">
              <BenefitCard
                title="Support"
                items={[
                  "Joint funding opportunities",
                  "Networking events",
                  "Research grants for tech development"
                ]}
              />
              <BenefitCard
                title="Benefits"
                items={[
                  "Brand visibility",
                  "Event sponsorships",
                  "Promotional materials",
                  "Knowledge sharing",
                  "Workshop access",
                  "Mentorship programs",
                  "Exclusive partnership",
                  "Collaborative projects",
                  "Recognition opportunities"
                ]}
              />
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
                  href="/accelerators/apply"
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
