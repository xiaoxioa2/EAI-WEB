import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <Container className="py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                 <Image
                  src="/eai_logo.png"
                  alt="EverythingAI Foundation Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl">EverythingAI Foundation</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering entrepreneurs to build AI solutions that create positive impact worldwide.
            </p>
            <nav className="flex flex-col gap-3 mt-4">
              <a href="/admin" className="text-gray-400 hover:text-white transition-colors duration-200">Admin</a>
            </nav>
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
  );
}
