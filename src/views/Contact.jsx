import { useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://portfolio-backend-0ekp.onrender.com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/add-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message delivered! Thanks for reaching out — I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact submit error:', error);
      toast.error('Something went wrong. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Contact Me</h2>
          <div className="w-14 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-5 bg-[#121212] border border-[#262626] border-t-2 border-t-amber-500/90 rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/40">
            <h3 className="text-xl font-bold text-white">Let's work together</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Have a question, a project in mind, or an opportunity to discuss? Feel free to drop a message!
            </p>

            <div className="space-y-4 pt-1">
              <a
                href="mailto:ankitathakurmfp@gmail.com"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#262626] text-orange-400 group-hover:border-orange-500/40 flex items-center justify-center text-sm sm:text-base transition">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-400 transition">
                    ankitathakurmfp@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#262626] text-orange-400 flex items-center justify-center text-sm sm:text-base">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">India</div>
                </div>
              </div>
            </div>

            <hr className="border-[#262626]" />

            <div>
              <div className="text-xs text-slate-400 mb-3">Connect on Socials</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ankita-thakur-28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition"
                  title="GitHub"
                >
                  <i className="fab fa-github text-base"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ankitaa-thakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-base"></i>
                </a>
                <a
                  href="mailto:ankitathakurmfp@gmail.com"
                  className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition"
                  title="Email (ankitathakurmfp@gmail.com)"
                >
                  <i className="fas fa-envelope text-base"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#262626] rounded-2xl p-6 sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#262626] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#262626] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#262626] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition resize-none disabled:opacity-50"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-xs sm:text-sm shadow-md shadow-orange-950/40 transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin text-xs"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane text-xs"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
