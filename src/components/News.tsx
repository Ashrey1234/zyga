import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    date: 'March 15, 2026',
    category: 'Event',
    title: 'International Women\'s Day Rally in Stone Town',
    excerpt:
      'ZYGA led a powerful march and community dialogue in Stone Town, bringing together hundreds of youth advocates to celebrate progress and demand action on gender equality.',
    image: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Event',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    date: 'February 28, 2026',
    category: 'Programme',
    title: 'New "Daughters\' Voice" Cohort Graduates 120 Girls',
    excerpt:
      'Our flagship Daughters\' Voice Programme celebrated its second graduation, with 120 young women completing leadership and self-advocacy training across 8 communities.',
    image: 'https://images.pexels.com/photos/8926563/pexels-photo-8926563.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Programme',
    tagColor: 'bg-green-100 text-[#2d7d32]',
  },
  {
    date: 'January 20, 2026',
    category: 'Advocacy',
    title: 'ZYGA Presents GBV Policy Brief to Zanzibar Government',
    excerpt:
      'Our advocacy team submitted a comprehensive policy brief calling for stronger legal protections for survivors of gender-based violence and mandatory school education on gender rights.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Advocacy',
    tagColor: 'bg-amber-100 text-amber-700',
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <span className="text-[#2d7d32] text-sm font-semibold tracking-widest uppercase">
              News & Events
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#0d2a52]">
              Latest from ZYGA
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#2d7d32] font-semibold hover:text-[#1b5e20] transition-colors shrink-0"
          >
            View all news <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(({ date, title, excerpt, image, tag, tagColor }) => (
            <article
              key={title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}
                >
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={13} />
                  <span>{date}</span>
                </div>
                <h3 className="font-bold text-[#0d2a52] text-lg leading-snug mb-3 group-hover:text-[#2d7d32] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
                <button className="mt-5 text-[#2d7d32] text-sm font-semibold hover:text-[#1b5e20] flex items-center gap-1 transition-colors group/link">
                  Read more{' '}
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
