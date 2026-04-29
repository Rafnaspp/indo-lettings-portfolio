"use client";
import React, { useState } from 'react';
import GlassyNavBar from '@/components/glassyNavBar';
import Footer from '@/components/footer';
import { CheckCircle2, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyMl23_5zeMD6hvqmB05s3wwQdmitgvpe8q05NgC2gCggX8RlmeFDtEjrAx0URsDu5X7g/exec"; // Placeholder

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Placeholder for actual fetch call to Google Sheets
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) });
      console.log("Contact Form Data:", data);
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Submission error", error);
      setLoading(false);
    }
  };

  const inputStyle = { 
    color: '#000000', 
    opacity: 1, 
    WebkitTextFillColor: '#000000' 
  };

  if (submitted) {
    return (
      <>
        <GlassyNavBar />
        <div className="min-h-[80vh] flex items-center justify-center pt-20">
          <div className="text-center space-y-6 max-w-md px-4">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Message Sent</h1>
            <p className="text-gray-500 leading-relaxed">
              Thank you for contacting us. Our team will review your message and get back to you as soon as possible.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-red-600 font-bold hover:underline">
              Send another message
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <GlassyNavBar />
      <main className="pt-40 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Get in touch <br/>with <span className="text-red-600">us.</span>
                </h1>
                <p className="text-gray-500 text-lg">
                  We're here to help with all your property inquiries. Reach out via the form or through our contact details.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://www.google.com/maps?sca_esv=a2a26c5991e8083d&output=search&q=Unit+6,+234+-+236,+whitechapel+rd,+London+E1+1BJ&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1QD8TCIDJfGa0vqjN9IHrvHWDsmeORdhBsKKB7YhOFCEnujh40JoXm8mJ1XD2aOLFzvCDdiRYHZvxPRlffyPQahEFPoq7neR61oywFMHCxrccH2HyEryNALG8VWSO5q_B5Xta3xaljfDjjTlFoPNszmmQ_2mqLWaOuE2eIpGVb1Enor5gQ&entry=mc&ved=1t:200715&ictx=111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 hover:border-red-100 transition-all group"
                >
                  <div className="p-3 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Office</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">Unit 6, 234 - 236, Whitechapel Rd, London E1 1BJ</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@indolettings.co.uk" 
                  className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 hover:border-red-100 transition-all group"
                >
                  <div className="p-3 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Address</h3>
                    <p className="text-sm text-gray-500">info@indolettings.co.uk</p>
                  </div>
                </a>

                <a 
                  href="tel:02078707966" 
                  className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 hover:border-red-100 transition-all group"
                >
                  <div className="p-3 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone Number</h3>
                    <p className="text-sm text-gray-500">0207 870 7966</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[40px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12 border-b border-gray-50">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
              {/* Personal Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Title (optional)</label>
                    <select name="title" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={inputStyle}>
                      <option value="">Select...</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input required name="firstName" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input required name="lastName" type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input required name="email" type="email" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">How can we help you?</label>
                <textarea 
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell us about your inquiry..."
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 font-medium resize-none"
                  style={inputStyle}
                />
              </div>

              <div className="pt-6 space-y-6">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-100 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                  {!loading && <ArrowRight size={22} />}
                </button>
                
                <p className="text-center text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest px-8">
                  We take the processing and privacy of your information very seriously. 
                  Your data is collected and used in accordance with our 
                  <a href="#" className="underline ml-1">terms and conditions</a> and 
                  <a href="#" className="underline ml-1">global privacy policy</a>.
                </p>
              </div>
            </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;