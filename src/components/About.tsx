import { Target, Eye, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To promote gender equality, protect the voices of young girls, and empower Zanzibari youth through advocacy, education, and community engagement.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A Zanzibar where every girl and young woman lives free from violence, discrimination, and inequality — where their voices shape the future.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Integrity, inclusion, compassion, accountability, and respect form the foundation of everything we do within our communities.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2d7d32] text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#0d2a52] leading-tight">
              About ZYGA
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              The Zanzibar Youth Gender Alliance (ZYGA) is a non-governmental organisation committed
              to building a just, equal, and empowered society for the youth of Zanzibar. Founded on
              the belief that young people are powerful agents of change, we work at the grassroots
              to dismantle gender inequality and end gender-based violence.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              We operate through education, awareness campaigns, survivor support, and policy
              advocacy — ensuring that daughters' voices are not only heard but protected and
              celebrated.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <img
                src="/WhatsApp_Image_2026-03-30_at_18.34.21.jpeg"
                alt="ZYGA Logo"
                className="h-24 w-24 rounded-2xl object-cover shadow-lg"
              />
              <div>
                <div className="text-2xl font-bold text-[#0d2a52]">Est. 2024</div>
                <div className="text-gray-500 text-sm">Zanzibar, Tanzania</div>
                <div className="mt-1 text-[#2d7d32] font-semibold text-sm">
                  Registered NGO
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#2d7d32]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="shrink-0 w-12 h-12 bg-[#2d7d32]/10 group-hover:bg-[#2d7d32]/20 rounded-xl flex items-center justify-center transition-colors">
                  <Icon size={22} className="text-[#2d7d32]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0d2a52] text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
