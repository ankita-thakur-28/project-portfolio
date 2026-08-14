export default function Home({ onNavigate }) {
  return (
    <div className="h-full w-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge with Pulsing Emerald Green Dot & Sunset Orange Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-medium text-xs sm:text-sm font-mono shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></span>
            Available for Opportunities
          </div>

          <div className="space-y-2.5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-tight text-white leading-tight">
              Hi, I'm <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">Ankita Kumari</span>
            </h1>
            <p className="text-xl sm:text-2xl font-heading italic font-normal text-orange-300">
              Full-Stack Developer & ISTQB Certified Engineer
            </p>
          </div>

          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Mastering the craft of Java & Spring Boot backends, AI-powered automation, and system reliability with an uncompromising quality-first mindset.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
            <button
              onClick={() => onNavigate('project')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-950/40 hover:shadow-orange-950/60 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <span>View Projects</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
            <a
              href="/Ankita_Kumari_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#121212] hover:bg-[#1e1e1e] border border-[#262626] text-slate-200 font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2.5"
            >
              <i className="fas fa-download text-orange-400 text-xs"></i>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links & Email Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://github.com/ankita-thakur-28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-[#121212] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition-all"
              title="GitHub Profile"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ankitaa-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-[#121212] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition-all"
              title="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="mailto:ankitathakurmfp@gmail.com"
              className="w-11 h-11 rounded-lg bg-[#121212] border border-[#262626] text-slate-300 hover:text-orange-400 hover:border-orange-500/40 flex items-center justify-center transition-all"
              title="Send Email (ankitathakurmfp@gmail.com)"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative w-56 h-76 sm:w-64 sm:h-84 rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-2xl bg-[#121212]">
              <img
                src="assets/img-1.jpeg"
                alt="Ankita Kumari"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
