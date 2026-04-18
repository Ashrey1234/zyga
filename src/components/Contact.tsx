import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2d7d32] text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#0d2a52]">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            We'd love to hear from you — whether you want to partner, volunteer, donate, or simply
            learn more about ZYGA.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0d2a52] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#81c784]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Address</div>
                    <div className="text-white/70 text-sm mt-0.5">
                      Stone Town, Zanzibar, Tanzania
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#81c784]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Phone</div>
                    <div className="text-white/70 text-sm mt-0.5">+255 777 000 000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#81c784]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Email</div>
                    <div className="text-white/70 text-sm mt-0.5">info@zyga.or.tz</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm font-semibold mb-3 text-white/80">Follow Us</div>
                <div className="flex gap-3">
                  {['FB', 'TW', 'IG', 'YT'].map((s) => (
                    <button
                      key={s}
                      className="w-9 h-9 bg-white/10 hover:bg-[#2d7d32] rounded-lg text-xs font-bold transition-colors text-white/80 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 h-48">
              <iframe
                title="ZYGA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.694060432118!2d39.18466!3d-6.16359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd0b9dc50e88d%3A0x74e63f7bbb5b8c1b!2sStone%20Town%2C%20Zanzibar!5e0!3m2!1sen!2stz!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-[#2d7d32]/30 rounded-2xl">
                <CheckCircle size={56} className="text-[#2d7d32] mb-4" />
                <h3 className="text-2xl font-bold text-[#0d2a52] mb-2">Message Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 text-[#2d7d32] font-semibold text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0d2a52] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7d32]/30 focus:border-[#2d7d32] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d2a52] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7d32]/30 focus:border-[#2d7d32] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0d2a52] mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7d32]/30 focus:border-[#2d7d32] transition-all text-gray-700"
                  >
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Volunteer Application</option>
                    <option>Partnership / Collaboration</option>
                    <option>Donation / Funding</option>
                    <option>Media / Press</option>
                    <option>Report a GBV Case</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0d2a52] mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7d32]/30 focus:border-[#2d7d32] transition-all resize-none"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-800 text-xs">
                  If you are in immediate danger or need urgent GBV support, please call{' '}
                  <strong>+255 777 000 000</strong> or visit your nearest police station.
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0d2a52] hover:bg-[#0a1f3e] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
