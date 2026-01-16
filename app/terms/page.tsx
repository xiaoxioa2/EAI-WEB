import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
                Terms of Use
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 text-center mb-4">
                EverythingAI Foundation Services
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Last updated: Jan 16, 2026
              </p>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  By accessing or using EAF's Services, you agree to these Terms of Use.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      1. Purpose of Services
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      EAF's Services are provided for charitable, educational, and nonprofit purposes only. They do not constitute legal, financial, medical, or investment advice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Eligibility
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You represent that you are at least 18 years old or have permission from a legal guardian.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Acceptable Use
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Use the Services for any unlawful, deceptive, or fraudulent purpose</li>
                      <li>Use the Services in a manner that misuses, exploits, resells, or improperly commercializes EAF's platform, data, content, or services without authorization</li>
                      <li>Misrepresent your identity, role, or affiliation with EAF or other participants</li>
                      <li>Interfere with, disrupt, or compromise the operation, integrity, or security of the Services</li>
                      <li>Attempt to access systems, data, or accounts without authorization</li>
                      <li>Use the Services in a manner that could harm EAF, other participants, or the integrity of EAF programs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Intellectual Property
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Unless otherwise stated, content provided by EAF is owned by or licensed to EAF and may be used for personal, non-commercial purposes only.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Third-Party Services
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      EAF may link to third-party platforms. EAF is not responsible for third-party content or practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      6. Disclaimer
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Services are provided "as is" without warranties of any kind. Participation does not guarantee program selection, funding, or outcomes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      7. Limitation of Liability
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To the maximum extent permitted by law, EAF shall not be liable for indirect or consequential damages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      8. Governing Law
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    If you have questions about these Terms of Use, please contact us at{" "}
                    <a
                      href="mailto:legal@everythingaifoundation.org"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      legal@everythingaifoundation.org
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
