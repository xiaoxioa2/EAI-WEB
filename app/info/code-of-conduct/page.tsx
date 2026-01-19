import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
                EverythingAI Foundation
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
                Code of Conduct
              </h2>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  EverythingAI Foundation (EAF) is committed to fostering a safe, inclusive, ethical, and professional environment across all programs, including accelerators, competitions, nonprofit initiatives, and youth programs.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  This Code of Conduct applies to founders, participants, mentors, judges, staff, volunteers, sponsors, and partners.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      1. Expected Behavior
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Participants must act professionally, respectfully, and ethically; engage constructively; respect diversity; follow all applicable laws and policies; and use AI responsibly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      2. Prohibited Conduct
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Harassment, discrimination, intimidation, sexual misconduct, bullying, retaliation, misuse of confidential information, dishonesty, or unethical practices are prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      3. Inclusion & Non-Discrimination
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      EAF prohibits discrimination based on race, gender, religion, disability, age, sexual orientation, or any protected characteristic.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      4. AI & Data Ethics
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Participants must respect privacy, avoid biased or harmful AI use, and ensure transparency and human-centered design.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      5. Reporting & Enforcement
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Violations may be reported confidentially. EAF may issue warnings, removal, disqualification, or termination.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      6. Acceptance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Participation constitutes acceptance of this Code of Conduct.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    If you have questions or concerns about this Code of Conduct, please contact us at{" "}
                    <a
                      href="mailto:info@everythingaifoundation.org"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      info@everythingaifoundation.org
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
