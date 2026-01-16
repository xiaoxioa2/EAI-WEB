"use client";

import { Container } from "@/components/Container";
import { Download } from "lucide-react";

export default function FinancialsPage() {
  return (
    <div className="min-h-screen">
      <Container className="py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Financials</h1>
            <p className="text-lg text-gray-600 mb-6">
              EverythingAI Foundation is committed to transparency, accountability, and responsible stewardship of charitable resources.
            </p>
            <a
              href="/eaf-financials-1-16-2025.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <iframe
              src="/eaf-financials-1-16-2025.pdf"
              className="w-full h-[800px]"
              title="EverythingAI Foundation Financials"
            />
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About Our Financial Transparency</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a newly established nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code,
              EverythingAI Foundation is dedicated to maintaining the highest standards of financial transparency and accountability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For questions regarding our financial practices, please contact us at{" "}
              <a href="mailto:info@everythingaifoundation.org" className="text-blue-600 hover:text-blue-700 underline">
                info@everythingaifoundation.org
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
