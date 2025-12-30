"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Dropdown } from "./Dropdown";

interface HeaderProps {
  onDonateClick?: () => void;
}

export function Header({ onDonateClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonateClick = () => {
    if (onDonateClick) {
      onDonateClick();
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <Container className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200">
          <div className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            <Image
              src="/eai_logo.png"
              alt="EverythingAI Foundation Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain p-0.5"
              priority
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
              { label: "Mentors", href: "/founders#experts" },
              { label: "Investors", href: "/founders#investors" },
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
            {onDonateClick ? (
              <button onClick={handleDonateClick} className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Give</button>
            ) : (
              <a href="/donate" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Give</a>
            )}
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
            <a href="/accelerators/apply" className="block py-2 text-gray-700 hover:text-blue-600">Apply</a>
            <a href="/donate" className="block w-full text-center rounded-xl bg-blue-600 text-white px-6 py-3 font-medium mt-4">
              Donate
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
