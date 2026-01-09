"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Container } from "./Container";
import { Dropdown } from "./Dropdown";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onDonateClick?: () => void;
}

export function Header({ onDonateClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, profile, signOut } = useAuth();
  const router = useRouter();

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

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleLabel = (role?: string) => {
    const roleMap: Record<string, string> = {
      founder: 'Founder',
      expert: 'Expert',
      investor: 'Investor',
      interested: 'Interested',
    };
    return role ? roleMap[role] || role : '';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <Container className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200">
           <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
            <img
              src="/eai_logo.png"
              alt="EverythingAI Foundation Logo"
              className="w-full h-full object-contain p-0.5"
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
              { label: "FAQs", href: "/faq#founders-network" },
            ]}
          />
          <Dropdown
            label="Startup Accelerators"
            items={[
              { label: "Overview", href: "/programs" },
              { label: "Application", href: "/programs/apply" },
              { label: "FAQs", href: "/faq#accelerators" },
            ]}
          />
          <Dropdown
            label="Venture Platforms"
            items={[
              { label: "Partners", href: "/partners" },
              { label: "Platform", href: "/platform" },
              { label: "Sponsor", href: "/donate" },
              { label: "FAQs", href: "/faq#venture-platforms" },
            ]}
          />
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <a href="/#mission" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">Mission</a>
            <a href="/faq" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">FAQ</a>

            {user && profile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-600 text-white text-xs">
                        {getInitials(profile.full_name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{profile.full_name || 'User'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{profile.full_name}</p>
                      <p className="text-xs text-gray-500">{profile.email}</p>
                      <p className="text-xs text-blue-600 font-medium">{getRoleLabel(profile.role)}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/dashboard" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 font-bold">
                    Login
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Welcome!</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/login" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Login
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/signup" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Sign Up
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-2 text-xs text-gray-500">
                    First time here? Sign up to get started!
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

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
            {user && profile && (
              <div className="pb-4 border-b">
                <p className="text-sm font-medium">{profile.full_name || 'User'}</p>
                <p className="text-xs text-gray-500">{profile.email}</p>
                <p className="text-xs text-blue-600 font-medium mt-1">{getRoleLabel(profile.role)}</p>
              </div>
            )}
            <a href="/founders" className="block py-2 text-gray-700 hover:text-blue-600">Founder's Network</a>
            <a href="/programs" className="block py-2 text-gray-700 hover:text-blue-600">Startup Accelerators</a>
            <a href="/partners" className="block py-2 text-gray-700 hover:text-blue-600">Venture Platforms</a>
            <a href="/#mission" className="block py-2 text-gray-700 hover:text-blue-600">Mission</a>
            <a href="/faq" className="block py-2 text-gray-700 hover:text-blue-600">FAQ</a>
            {user && profile ? (
              <>
                <a href="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600">Dashboard</a>
                <a href="/profile" className="block py-2 text-gray-700 hover:text-blue-600">Profile</a>
                <button onClick={handleSignOut} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
                  Sign Out
                </button>
              </>
            ) : (
              <div className="border-t pt-4">
                <p className="text-xs text-gray-500 mb-3 px-2">Account Options</p>
                <a href="/login" className="block py-2 text-gray-700 hover:text-blue-600">Login</a>
                <a href="/signup" className="block py-2 text-gray-700 hover:text-blue-600">Sign Up</a>
                <p className="text-xs text-gray-400 mt-2 px-2">First time here? Sign up to get started!</p>
              </div>
            )}
            <a href="/programs/apply" className="block py-2 text-gray-700 hover:text-blue-600">Apply</a>
            <a href="/donate" className="block w-full text-center rounded-xl bg-blue-600 text-white px-6 py-3 font-medium mt-4">
              Donate
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}