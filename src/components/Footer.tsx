import { Heart } from 'lucide-react';

const links = {
  Organisation: ['About ZYGA', 'Our Team', 'Annual Reports', 'Partners'],
  Programmes: ['Daughters\' Voice', 'GBV Prevention', 'Youth Empowerment', 'Policy Advocacy'],
  'Get Involved': ['Donate', 'Volunteer', 'Partner With Us', 'Spread the Word'],
  'Resources': ['Research & Reports', 'Media Kit', 'Blog & News', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1f3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/WhatsApp_Image_2026-03-30_at_18.34.21.jpeg"
                alt="ZYGA Logo"
                className="h-14 w-14 rounded-xl object-cover"
              />
            </div>
            <div className="text-[#4caf50] font-bold text-sm tracking-wider mb-1">
              ZANZIBAR YOUTH
            </div>
            <div className="text-white font-extrabold text-xl tracking-wider mb-4">
              GENDER ALLIANCE
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Protecting daughters' voices. Promoting equality. Combating gender-based violence across Zanzibar.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-bold text-sm tracking-wider text-white/90 mb-4 uppercase">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-[#4caf50] text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Zanzibar Youth Gender Alliance (ZYGA). All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> for a more equal Zanzibar
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
