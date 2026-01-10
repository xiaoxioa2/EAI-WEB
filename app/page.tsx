"use client";

import React, { useState } from "react";
import { ArrowRight, Users, Lightbulb, Target, Heart, Wrench } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function PanelCard({
  title,
  subtitle,
  href,
  cta = "Learn more",
  icon: Icon,
  gradient,
  underLinkText
}: {
  title: string;
  subtitle?: string;
  href: string;
  cta?: string;
  icon: React.ElementType;
  gradient: string;
  underLinkText?: string;
}) {
  return (
    <article className="group rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`aspect-[16/9] ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <Icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        {subtitle && <p className="mt-2 text-gray-600 leading-relaxed">{subtitle}</p>}
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group/link"
        >
          {cta}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>
        {underLinkText && <p className="mt-2 text-sm text-gray-500">{underLinkText}</p>}
      </div>
    </article>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function LandingPage() {
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);

  return (
      <main className="min-h-screen flex flex-col bg-white">
      <Header onDonateClick={() => setDonationDialogOpen(true)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10 blur-md"></div>
        <Container className="py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                EverythingAI Foundation
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
                Empowering Entrepreneurs for Impact with Innovations
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Join a global community of visionary founders, mentors, and innovators building the future through AI-powered solutions that create meaningful impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/founders/join"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-8 py-4 font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                JOIN THE NETWORK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button
                onClick={() => setDonationDialogOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-purple-600 text-purple-600 px-8 py-4 font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Heart className="w-5 h-5" />
                Give
              </button>
            </div>

            {/* Stats - Targets */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <StatCard number="500+" label="Founders (Target)" />
              <StatCard number="50+" label="To Startups" />
              <StatCard number="$10M+" label="To Raise" />
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src="/pic1networking.png"
                  alt="Networking Event"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src="/pic2eventpanel.png"
                  alt="Event Panel Discussion"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <img
                  src="/pic3_pitch.png"
                  alt="Pitch Competition"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                <img
                  src="/pic4_eafacclerator.png"
                  alt="EAI Accelerator Program"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Impact Driven</div>
                  <div className="text-sm text-gray-600">Real solutions</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Network</div>
                  <div className="text-sm text-gray-600">Worldwide reach</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Who We Are?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                EverythingAI Foundation (
                <a
                  href="https://everythingaifoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://everythingaifoundation.org
                </a>
                ) is a Texas-based non-profit organization dedicated to empowering entrepreneurs through innovation in artificial intelligence.
              </p>
              <p>
                We aim to ignite and accelerate tech entrepreneurs with game-changing ideas to achieve
                the vision of &quot;1 Person, $1 Million, in 1 Year.&quot; This framework reflects our belief that
                focused innovation, AI-driven efficiency, and an ethical support ecosystem can enable a
                single founder to build scalable impact in one year.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 md:py-32 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that artificial intelligence should serve humanity's greatest challenges. Our foundation connects
              visionary entrepreneurs with the resources, mentorship, and community they need to build AI solutions that
              create positive impact at scale. We support founders who face challenges in achieving the critical &apos;0 to 1&apos; or &apos;1 to 10&apos;
              milestones, particularly in high-impact sectors such as <strong>health and wellness</strong>, <strong>energy
              efficiency</strong>, <strong>environmental sustainability</strong>, and <strong>social innovation</strong>. Our programs prioritize
              underrepresented entrepreneurs in the technology field, ensuring inclusivity and equal
              opportunity in innovation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-600">Fostering breakthrough AI technologies that solve real-world problems</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Community</h3>
                <p className="text-gray-600">Building a global network of entrepreneurs and thought leaders</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
                <p className="text-gray-600">Creating measurable positive change in communities worldwide</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Panels Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to learn, grow, and make an impact through our comprehensive programs and partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PanelCard
              title="Latest News"
              subtitle="Stay updated with announcements, success stories, and industry insights"
              href="/news"
              icon={Lightbulb}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <PanelCard
              title="Accelerators/Programs"
              subtitle="Cohorts, workshops, mentorship opportunities, and accelerator programs"
              href="/programs"
              icon={Target}
              gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            <PanelCard
              title="Venture Platforms"
              subtitle="Founders friendly AI powered venture platforms to assist collaborations and improve the business development efficiency under ethical and transparent IP and data protection frameworks."
              href="/programs/apply"
              icon={Wrench}
              gradient="bg-gradient-to-br from-green-500 to-green-600"
            />
            <PanelCard 
              title="Partners" 
              subtitle="Organizations, venture platforms, and strategic alliances" 
              href="/partners" 
              cta="Explore partnerships"
              icon={Heart}
              gradient="bg-gradient-to-br from-orange-500 to-red-500"
            />
          </div>
        </Container>
      </section>

      {/* Donation Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50" id="donate">
        <Container>
          <div className="rounded-3xl bg-white p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Your donation fuels founder education, mentorship programs, and community impact initiatives. 
                Together, we can accelerate the development of AI solutions that benefit humanity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/donate" 
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Go to Donation Page
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a 
                  href="/donate/other" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Other ways to give
                </a>
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
              Please contact EverythingAI Foundation (info@everythingaifoundation.org) for donation related request.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </main>
  );
}