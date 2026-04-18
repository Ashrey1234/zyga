import { Heart, Users, Lightbulb, Share2 } from 'lucide-react';

const ways = [
  {
    icon: Heart,
    title: 'Donate',
    description:
      'Your financial support directly funds our programmes, from GBV survivor counselling to youth empowerment workshops. Every contribution makes a difference.',
    cta: 'Donate Now',
    href: '#contact',
    primary: true,
  },
  {
    icon: Users,
    title: 'Volunteer',
    description:
      'Join our team of passionate volunteers on the ground. Whether in community outreach, education, or administration — your time is invaluable.',
    cta: 'Volunteer With Us',
    href: '#contact',
    primary: false,
  },
  {
    icon: Lightbulb,
    title: 'Partner With Us',
    description:
      'Organizations, businesses, and institutions can collaborate with ZYGA to co-create programmes, provide resources, and amplify our impact across Zanzibar.',
    cta: 'Partner Today',
    href: '#contact',
    primary: false,
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description:
      'Follow us on social media, share our campaigns, and help amplify the voices of Zanzibari youth. Awareness is the first step toward change.',
    cta: 'Share Our Mission',
    href: '#contact',
    primary: false,
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2d7d32] text-sm font-semibold tracking-widest uppercase">
            Join the Movement
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#0d2a52]">
            Get Involved
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            There are many ways to support ZYGA's work. Together, we can build a more equal and
            just Zanzibar for every daughter, son, and family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map(({ icon: Icon, title, description, cta, href, primary }) => (
            <div
              key={title}
              className={`rounded-2xl p-8 flex flex-col ${
                primary
                  ? 'bg-[#0d2a52] text-white'
                  : 'bg-white border border-gray-100 hover:border-[#2d7d32]/20 hover:shadow-md'
              } transition-all duration-200`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  primary ? 'bg-white/10' : 'bg-[#2d7d32]/10'
                }`}
              >
                <Icon size={22} className={primary ? 'text-[#81c784]' : 'text-[#2d7d32]'} />
              </div>
              <h3
                className={`font-bold text-xl mb-3 ${primary ? 'text-white' : 'text-[#0d2a52]'}`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  primary ? 'text-white/70' : 'text-gray-600'
                }`}
              >
                {description}
              </p>
              <a
                href={href}
                className={`mt-6 inline-block text-center font-semibold text-sm py-3 px-5 rounded-full transition-all duration-200 ${
                  primary
                    ? 'bg-[#2d7d32] hover:bg-[#1b5e20] text-white'
                    : 'border-2 border-[#0d2a52] text-[#0d2a52] hover:bg-[#0d2a52] hover:text-white'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0d2a52] to-[#1b5e20] p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to make a real difference?
            </h3>
            <p className="text-white/70">
              Contact our team today and find out how you can contribute to ZYGA's mission.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-[#0d2a52] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-base"
          >
            Contact ZYGA
          </a>
        </div>
      </div>
    </section>
  );
}
