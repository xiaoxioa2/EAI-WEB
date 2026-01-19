"use client";

import Image from "next/image";
import { Container } from "./Container";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        setStatus("error");
        setMessage("This email is already subscribed!");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

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
        <div className="text-gray-500 text-xs leading-relaxed space-y-1 mt-4">
              <p>EverythingAI Foundation is a nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code.</p>
              <p>Contributions are tax-deductible to the extent permitted by law.</p>
              <p>Based in Texas, United States.</p>
              <p className="mt-2">© {new Date().getFullYear()} EverythingAI Foundation. All rights reserved.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <nav className="flex flex-col gap-3">
              <a href="/info/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/info/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Use</a>
              <a href="/info/responsible-ai" className="text-gray-400 hover:text-white transition-colors duration-200">Responsible AI</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Organization</h3>
            <nav className="flex flex-col gap-3">
              <a href="/info/code-of-conduct" className="text-gray-400 hover:text-white transition-colors duration-200">Code of Conduct</a>
              <a href="/info/financials" className="text-gray-400 hover:text-white transition-colors duration-200">Financials</a>
              <a href="mailto:info@everythingaifoundation.org" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
            </nav>
          </div>

         <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <p className="text-gray-400">Get updates on our latest programs and opportunities</p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === "loading"}
                className="w-full rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50"
              />
               <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {message && (
                <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}
