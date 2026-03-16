import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#060010] text-white selection:bg-[#7C3AED] selection:text-white flex flex-col">
            <Navbar />
            
            <div className="flex-grow pt-40 px-6 max-w-3xl mx-auto w-full pb-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 font-display tracking-tight">Terms of Service</h1>
                
                <div className="text-white/70 space-y-6 text-[15px] leading-relaxed font-sans">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CR/AI website and services operated by CR/AI Networks ("us", "we", or "our").
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Description of Service</h2>
                    <p>
                        CR/AI provides enterprise-grade AI voice agent solutions—both inbound and outbound—for businesses. Our services include the provisioning of phone numbers, customized conversational AI models, minutes of usage, and related analytics dashboards.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Fair Use & Compliance</h2>
                    <p>
                        You agree to use our outbound and inbound voice agents in strict compliance with all local and international telecommunications laws, including anti-spam regulations (such as TRAI regulations in India). You are solely responsible for ensuring you have the necessary consent to contact individuals using our outbound services.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Billing & Subscriptions</h2>
                    <p>
                        Our services are billed on a subscription basis, payable via monthly or annual installments. Certain plans include a fixed number of minutes and phone numbers. Usage exceeding the included quotas will be billed at the standard overage rate explicitly defined in your pricing tier.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us by booking a call with our team.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
