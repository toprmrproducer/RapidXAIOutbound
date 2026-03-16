import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#060010] text-white selection:bg-[#7C3AED] selection:text-white flex flex-col">
            <Navbar />
            
            <div className="flex-grow pt-40 px-6 max-w-3xl mx-auto w-full pb-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 font-display tracking-tight">Privacy Policy</h1>
                
                <div className="text-white/70 space-y-6 text-[15px] leading-relaxed font-sans">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <p>
                        This Privacy Policy describes how CR/AI Networks ("we", "us", or "our") collects, uses, and shares your personal information when you use our website and AI voice agent services. By using our services, you agree to the collection and use of information in accordance with this policy.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us when you book a consultation call, configure your customized AI agent, or contact us for support. Typical data collected includes your name, business name, phone numbers, email address, and any specific conversational flows or data you provide to train your customized voice agents.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect primarily to provision, maintain, and improve our AI voice services. We may also use this information to communicate with you, provide customer support, and comply with strict telecommunications and data privacy legal obligations.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Data Security and Call Transcripts</h2>
                    <p>
                        All call transcripts and recordings processed by your AI agents are securely stored and encrypted. We do not sell your conversational data or leads to third-party data brokers. Access to your agent's logs is strictly limited to your authorized personnel and our core support engineers for troubleshooting purposes only.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, your data, or our privacy practices, please contact us by booking a call with our team or reaching out through our official channels.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
