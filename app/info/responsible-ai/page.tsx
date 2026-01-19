import { Container } from "@/components/Container";
import { Shield, Users, Eye, Scale, Lock, RefreshCw } from "lucide-react";

export default function ResponsibleAIPage() {
  return (
    <div className="min-h-screen">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Data Ethics & Responsible AI Policy
            </h1>
            <p className="text-lg text-gray-600">
              Our commitment to ethical data use and responsible AI practices
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Purpose</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This Policy outlines EAF's commitment to ethical data use and responsible AI practices consistent with our charitable mission.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Core Principles</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Human-Centered</h3>
                    <p className="text-gray-700">AI augments human decision-making</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fairness & Inclusion</h3>
                    <p className="text-gray-700">We seek to reduce bias and promote equitable outcomes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-100 rounded-xl">
                    <Eye className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                    <p className="text-gray-700">We communicate how automated tools are used</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-100 rounded-xl">
                    <Shield className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accountability</h3>
                    <p className="text-gray-700">Humans remain responsible for outcomes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-100 rounded-xl">
                    <Lock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Privacy by Design</h3>
                    <p className="text-gray-700">Data protection is built into systems from inception</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Permitted Uses of AI</h2>
              <p className="text-gray-700 mb-4">AI may be used to:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Improve nonprofit program efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Support matching and recommendation systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Analyze aggregated, anonymized data</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">EAF does not use AI to:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Make final determinations affecting legal rights without human review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Conduct surveillance or profiling unrelated to mission objectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">Train public AI models using personal data without consent</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <Eye className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Oversight & Review</h2>
                  <p className="text-gray-700 leading-relaxed">
                    AI systems are periodically reviewed for accuracy, fairness, and mission alignment.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-xl">
                  <RefreshCw className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Continuous Improvement</h2>
                  <p className="text-gray-700 leading-relaxed">
                    EAF commits to evolving its data and AI governance as technology, regulation, and best practices develop.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-600 text-sm">
              For questions or concerns regarding our data ethics and AI practices, please contact us at{" "}
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
