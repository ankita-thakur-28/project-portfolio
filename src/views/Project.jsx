import { projects } from '../data/projects';

export default function Project() {
  return (
    <div className="h-full w-full overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Projects</h2>
          <div className="w-14 h-1.5 bg-rose-500 rounded-full"></div>
        </div>

        {/* 3-Column Grid for Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isAIBT = project.id === 'aibt';

            return (
              <div
                key={project.id}
                className="bg-[#121212] border border-[#262626] rounded-xl p-5 hover:border-rose-500/40 transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Top Header Row: Status & Actions */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      project.status === 'Live'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                      }`}></span>
                      {project.status}
                    </span>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-rose-400 transition text-sm"
                          title="Live Demo"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-rose-400 transition text-base"
                          title="Repository"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Compact Browser Preview for AI-Bug Tracker / Placeholder Preview for others */}
                  {isAIBT ? (
                    <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg overflow-hidden shadow-md">
                      <div className="bg-[#242424] px-3 py-1.5 border-b border-[#2e2e2e] flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                        <div className="ml-1 flex-1 bg-[#141414] rounded px-2 py-0.5 text-[10px] text-slate-400 font-mono truncate text-center">
                          ai-bug-tracker...vercel.app
                        </div>
                      </div>
                      <div className="bg-[#f8fafc] p-4 flex items-center justify-center min-h-[140px]">
                        <div className="w-full bg-white rounded-lg p-3 shadow border border-slate-100 space-y-2 text-left">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-[#2563eb] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 8h-1.81a5.97 5.97 0 0 0-2.31-2.73L16 4a1 1 0 0 0-1.41-1.41l-1.63 1.63a6.002 6.002 0 0 0-1.92 0L9.41 2.59A1 1 0 0 0 8 4l1.12 1.27A5.97 5.97 0 0 0 6.81 8H5a1 1 0 0 0 0 2h1.09c-.06.33-.09.66-.09 1v1H4a1 1 0 0 0 0 2h2v1c0 .34.03.67.09 1H5a1 1 0 0 0 0 2h1.81a6 6 0 0 0 10.38 0H19a1 1 0 0 0 0-2h-1.09c.06-.33.09-.66.09-1v-1h2a1 1 0 0 0 0-2h-2v-1c0-.34-.03-.67-.09-1H19a1 1 0 0 0 0-2zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                              </svg>
                            </div>
                            <span className="text-xs font-bold text-[#2563eb]">AI-Bug Tracker</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-4 bg-[#f8fafc] border border-slate-200 rounded px-2 text-[9px] text-slate-400 flex items-center">
                              you@example.com
                            </div>
                            <div className="h-4 bg-[#f8fafc] border border-slate-200 rounded px-2 text-[9px] text-slate-400 flex items-center">
                              ••••••••
                            </div>
                          </div>
                          <div className="py-1 bg-[#2563eb] text-white rounded text-[9px] font-semibold text-center">
                            Sign In
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#181818] border border-[#2e2e2e] rounded-lg p-6 flex flex-col items-center justify-center min-h-[140px] text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-lg">
                        ⚡
                      </div>
                      <span className="text-xs font-semibold text-slate-400">Project Slot</span>
                    </div>
                  )}

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-rose-400 font-medium">{project.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#0a0a0a] text-slate-300 text-[11px] font-mono border border-[#262626]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


