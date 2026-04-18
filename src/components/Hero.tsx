import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a52]/90 via-[#0d2a52]/75 to-[#1b5e20]/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#4caf50]/50 bg-[#4caf50]/10 text-[#81c784] text-sm font-medium tracking-widest uppercase">
          Zanzibar Youth Gender Alliance
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Daughter's Voice
          <span className="block text-[#4caf50]">Is Protected.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering youth, championing gender equality, and standing against gender-based violence
          across Zanzibar — one voice, one community at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-[#2d7d32] hover:bg-[#1b5e20] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
          >
            Discover Our Mission
          </a>
          <a
            href="#involved"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Get Involved
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            Gender Equality
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            Youth Empowerment
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            GBV Prevention
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
