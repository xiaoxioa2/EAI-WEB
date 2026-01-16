import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
                EverythingAI Foundation
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-4">
                Privacy Policy
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Last updated: Jan 16, 2026
              </p>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  EverythingAI Foundation ("EAF," "we," "us," or "our") is a Texas-based nonprofit organization organized and operated exclusively for charitable and educational purposes under Section 501(c)(3) of the U.S. Internal Revenue Code.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy describes how we collect, use, disclose, and safeguard personal information in connection with our websites, digital platforms, programs, events, and services (collectively, the "Services").
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      1. Legal & Regulatory Framework
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      This Policy is designed to align with applicable U.S. federal and Texas laws, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>U.S. federal nonprofit compliance standards</li>
                      <li>Texas Business Organizations Code</li>
                      <li>Texas Identity Theft Enforcement and Protection Act (TITEPA)</li>
                      <li>Applicable federal privacy and consumer protection laws</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      Where applicable, we also follow generally recognized privacy principles reflected in frameworks such as the FTC Fair Information Practice Principles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Our Privacy Commitments
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      As a mission-driven, technology-oriented nonprofit, EAF adheres to the following principles:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Purpose Limitation:</strong> Data is collected only to support our charitable mission.</li>
                      <li><strong>Data Minimization:</strong> We avoid collecting unnecessary or excessive data.</li>
                      <li><strong>Security & Stewardship:</strong> Data is treated as a trust, not an asset.</li>
                      <li><strong>Human Oversight:</strong> Technology, including AI, supports—not replaces—human judgment.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Information We Collect
                    </h3>

                    <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-4">
                      3.1 Information You Provide
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We may collect personal information you voluntarily provide, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Name, email address, and contact details</li>
                      <li>Organizational affiliation, role, and professional profile</li>
                      <li>Application information (e.g., founder, mentor, volunteer, intern)</li>
                      <li>Event registrations and communications</li>
                      <li>Donations and payment confirmations (processed by third-party providers)</li>
                      <li>Any content you submit through forms, surveys, or correspondence</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-4">
                      3.2 Information Collected Automatically
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We may collect limited technical data such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>IP address and approximate geographic location</li>
                      <li>Device type, browser, and operating system</li>
                      <li>Pages viewed and interaction patterns</li>
                      <li>Cookies or similar technologies</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-4">
                      3.3 Information from Third Parties
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      We may receive information from trusted service providers or partners that support EAF's operations, such as event platforms, payment processors, collaboration tools, analytics providers, and hosting services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. How We Use Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Information is used solely to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Operate and improve EAF programs and platforms</li>
                      <li>Administer applications, events, and communications</li>
                      <li>Support nonprofit reporting and impact assessment</li>
                      <li>Ensure security, compliance, and organizational integrity</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3 font-semibold">
                      EAF does not sell, rent, or trade personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Use of Artificial Intelligence and Automated Tools
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      EAF may use AI-assisted or automated tools to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Support founder–mentor–resource matching</li>
                      <li>Analyze program effectiveness and engagement</li>
                      <li>Improve platform usability and accessibility</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3 mb-2">
                      Safeguards include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Human review for material or sensitive decisions</li>
                      <li>No use of personal data to train public or third-party AI models without explicit consent</li>
                      <li>Technical and organizational controls to reduce bias and misuse</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      6. Data Sharing
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Information may be shared only:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>With service providers acting on EAF's behalf</li>
                      <li>With program partners for mission-aligned activities</li>
                      <li>When required by law or legal process</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      All third parties are expected to maintain appropriate confidentiality and security standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      7. Data Retention
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Personal information is retained only as long as reasonably necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Fulfill nonprofit and operational purposes</li>
                      <li>Satisfy legal, accounting, or reporting obligations</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      Data is securely deleted or anonymized when no longer required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      8. Your Rights
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Subject to applicable law, individuals may request to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Access or correct personal information</li>
                      <li>Request deletion of information</li>
                      <li>Opt out of non-essential communications</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      Requests may be submitted to:{" "}
                      <a
                        href="mailto:privacy@everythingaifoundation.org"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        privacy@everythingaifoundation.org
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      9. Security
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      EAF implements reasonable administrative, technical, and organizational safeguards. While no system can be guaranteed secure, we take privacy protection seriously and continuously review our practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      10. Children's Privacy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      EAF does not knowingly collect personal information from children under 13 years of age.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      11. Updates
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This Policy may be updated periodically. Updates will be posted with a revised effective date.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a
                      href="mailto:privacy@everythingaifoundation.org"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      privacy@everythingaifoundation.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
