import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 1200, suffix: '+', label: 'Youth Empowered', desc: 'Young people reached through workshops and training programmes' },
  { value: 85, suffix: '%', label: 'Girls Supported', desc: 'Of survivors supported report improved safety and wellbeing' },
  { value: 40, suffix: '+', label: 'Communities Reached', desc: 'Across Unguja and Pemba islands of Zanzibar' },
  { value: 300, suffix: '+', label: 'Awareness Sessions', desc: 'Delivered in schools, mosques, and community centres' },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ value, suffix, label, desc }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-8">
      <div className="text-5xl sm:text-6xl font-extrabold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-[#81c784] font-bold text-lg mb-2">{label}</div>
      <div className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{desc}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7977052/pexels-photo-7977052.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-[#0d2a52]/88" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#81c784] text-sm font-semibold tracking-widest uppercase">
            Our Impact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Numbers That Matter
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Every number represents a life touched, a voice amplified, and a community transformed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            "Every girl deserves to be heard, respected, and protected."
          </h3>
          <p className="text-white/60">— ZYGA Founding Principle</p>
        </div>
      </div>
    </section>
  );
}
