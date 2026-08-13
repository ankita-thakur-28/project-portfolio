import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <div className="h-full w-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Testimonials</h2>
          <div className="w-14 h-1.5 bg-rose-500 rounded-full"></div>
        </div>

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#121212] border border-[#262626] rounded-xl p-6 space-y-4 hover:border-rose-500/40 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-rose-400 text-sm sm:text-base">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`${i < item.rating ? 'fas' : 'far'} fa-star`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-3 border-t border-[#262626]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white font-bold text-sm flex items-center justify-center">
                    {item.name
                      ? item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                      : '?'}
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white">{item.name}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{item.designation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Coming Soon State */
          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-14 text-center space-y-5 max-w-xl mx-auto">
            <div className="w-18 h-18 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-4xl">
              💬
            </div>
            <h3 className="text-2xl font-bold text-white">Testimonials Coming Soon</h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
              This section will feature recommendations and feedback from colleagues, mentors, and collaborators in the future.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
