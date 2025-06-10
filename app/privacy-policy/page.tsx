import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Beggar Online',
  description: 'Privacy Policy for Beggar Online - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e] text-white">
      <main className="container mx-auto px-4 py-12 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (username, email address)</li>
                <li>Game-related data (gameplay statistics, achievements)</li>
                <li>Communications with us (support inquiries, feedback)</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, please be aware that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect 
                personally identifiable information from children under 13.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;effective date&quot; at the top 
                of this Privacy Policy.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:info@globevik.com" className="text-yellow-400 hover:text-yellow-300">
                  info@globevik.com
                </a>
              </p>
            </section>

            <div className="text-sm text-gray-400 text-center pt-8">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
