import { skills } from '../data/skills';
import TechIcon from '../components/TechIcon';

export default function About({ onNavigate }) {
  return (
    <div className="h-full w-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">About Me</h2>
          <div className="w-14 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg font-light">
            <p>
              I am a <strong className="text-white font-medium">Full-Stack Developer</strong> specializing in robust <strong className="text-white font-medium">Java & Spring Boot</strong> architectures and <strong className="text-white font-medium">AI-driven workflows</strong>.
            </p>
            <p>
              Backed by an <strong className="text-white font-medium">MCA background</strong>, <span className="text-orange-400 font-normal">ISTQB certification</span>, and the <span className="text-orange-400 font-normal">Postman API Path</span>, I focus on building software that doesn't just work—it scales reliably.
            </p>
            <p>
              Whether designing microservices, implementing real-time WebSockets, or automating end-to-end testing with Playwright, I blend engineering rigor with clean, maintainable code.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm sm:text-base transition cursor-pointer inline-flex items-center gap-2 shadow-md shadow-orange-950/40"
              >
                <span>Get In Touch</span>
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>

          {/* Quick Highlights / Education Card with Sunset Orange Top Border Accent */}
          <div className="bg-[#121212] border border-[#262626] border-t-2 border-t-orange-500/90 rounded-xl p-6 space-y-4 self-start shadow-lg shadow-black/40">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <i className="fas fa-graduation-cap text-orange-400"></i> Education
            </h3>
            <div>
              <div className="text-sm sm:text-base font-semibold text-white">Master of Computer Applications (MCA)</div>
              <div className="text-xs sm:text-sm text-slate-400">Sikkim Manipal University</div>
            </div>
            
            <hr className="border-[#262626]" />

            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <i className="fas fa-award text-orange-400"></i> Core Focus
            </h3>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Java & Spring Boot Backends</li>
              <li>AI-Driven Applications & Automation</li>
              <li>Microservices & Real-Time WebSockets</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-3 pt-4 border-t border-[#262626]">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <i className="fas fa-code text-orange-400"></i> Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-3 pt-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] border border-[#262626] hover:border-orange-500/50 flex items-center justify-center shadow-md transition-all hover:scale-105 group cursor-pointer"
              >
                <TechIcon name={skill} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
