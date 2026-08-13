import { certifications } from '../data/certifications';

export default function Certificates() {
  return (
    <div className="h-full w-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Certifications</h2>
          <div className="w-14 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#121212] border border-[#262626] rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition group"
            >
              <div className="space-y-3">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-lg">
                    <i className="fas fa-medal"></i>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{cert.org}</div>
                  <div className="text-xs font-mono text-slate-400 mt-1">{cert.certId}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-[#0a0a0a] text-slate-300 text-xs font-mono border border-[#262626]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#262626] flex items-center gap-3">
                {cert.image && (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0a0a0a] hover:bg-orange-500 hover:text-white border border-[#262626] text-slate-200 text-xs sm:text-sm font-semibold transition cursor-pointer inline-flex items-center gap-2"
                  >
                    <i className="fas fa-image text-xs"></i>
                    <span>View Certificate</span>
                  </a>
                )}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-orange-500/15 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/30 text-xs sm:text-sm font-semibold transition cursor-pointer inline-flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt text-xs"></i>
                    <span>Verify</span>
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* "+ More coming soon" Ghost Card */}
          <div className="bg-[#121212]/50 border border-dashed border-[#262626] hover:border-orange-500/30 rounded-xl p-6 flex flex-col items-center justify-center min-h-[260px] text-center space-y-3 transition">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-300">+ More coming soon</h3>
              <p className="text-xs text-slate-400 max-w-[200px] mx-auto">
                Currently pursuing additional software engineering & cloud certifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
