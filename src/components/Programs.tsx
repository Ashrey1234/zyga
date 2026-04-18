import { Shield, Users, BookOpen, Megaphone, Handshake, Baby } from 'lucide-react';

const programs = [
  {
    icon: Shield,
    title: 'GBV Prevention & Response',
    description:
      'We provide direct support to survivors of gender-based violence, including counselling, safe shelter referrals, and legal aid assistance across Zanzibar.',
    color: 'bg-red-50 border-red-100',
    iconColor: 'bg-red-100 text-red-600',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description:
      'Skills development, leadership training, and mentorship programmes that equip young people — especially girls — with tools to lead and succeed.',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'bg-blue-100 text-[#0d2a52]',
    image: 'https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BookOpen,
    title: 'Education & Awareness',
    description:
      'Community workshops, school outreach, and digital campaigns that raise awareness about gender rights, healthy relationships, and equality.',
    color: 'bg-green-50 border-green-100',
    iconColor: 'bg-green-100 text-[#2d7d32]',
    image: 'https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Megaphone,
    title: 'Policy Advocacy',
    description:
      'Engaging with local and national government to influence policies that protect girls, promote gender equality, and address systemic inequalities.',
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'bg-amber-100 text-amber-700',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Baby,
    title: "Daughters' Voice Programme",
    description:
      "Our flagship initiative ensuring girls' voices are heard in family, school, and community decisions — building confidence and self-advocacy from a young age.",
    color: 'bg-teal-50 border-teal-100',
    iconColor: 'bg-teal-100 text-teal-600',
    image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Handshake,
    title: 'Community Partnerships',
    description:
      'Collaborating with local leaders, religious institutions, schools, and international partners to build a united front against discrimination and violence.',
    color: 'bg-rose-50 border-rose-100',
    iconColor: 'bg-rose-100 text-rose-600',
    image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2d7d32] text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#0d2a52]">
            Our Programmes
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Every programme we run is designed to create lasting change — empowering individuals and
            transforming communities across Zanzibar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(({ icon: Icon, title, description, iconColor, image }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a52]/60 to-transparent" />
              </div>
              <div className="p-6">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconColor}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-[#0d2a52] text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                <button className="mt-4 text-[#2d7d32] text-sm font-semibold hover:text-[#1b5e20] transition-colors flex items-center gap-1 group/btn">
                  Learn more
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
