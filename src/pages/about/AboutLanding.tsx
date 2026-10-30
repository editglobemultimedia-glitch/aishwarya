
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/ui/SectionHeader'

const sections = [
  {
    title: 'Our Philosophy',
    subtitle: 'A Journey from Self to Society',
    desc: "Discover ASF's guiding principles — Dharma, Jnana, Seva and Sarvahith — and the four dimensions of Know, Reflect, Serve and Sustain.",
    href: '/about/philosophy',
    image: '/images/asf1.png',
  },
  {
    title: 'Pancha Mahabhuta',
    subtitle: 'Five Elements. One Vision.',
    desc: 'Explore ASF\'s interpretive framework inspired by the dharmic tradition — a journey of space, movement, transformation, nourishment and stability.',
    href: '/about/pancha-mahabhuta',
    image: '/images/asf2.png',
  },
  {
    title: 'Bhagavadgītā',
    subtitle: 'The Wisdom That Guides Our Journey',
    desc: "The Bhagavadgītā is at the heart of ASF's knowledge and cultural vision. Its timeless questions remain relevant across every age.",
    href: '/about/bhagavadgita',
    image: '/images/bh4.png',
  },
  {
    title: 'Our Vision',
    subtitle: 'A Harmonious World Rooted in Dharma',
    desc: 'To inspire a world where timeless wisdom guides responsible living, compassionate Seva and respect for all creation.',
    href: '/about/vision',
    image: '/images/Our Vision .png',
  },
  {
    title: 'Our Mission',
    subtitle: 'From Wisdom to Seva. From Seva to Sarvahith.',
    desc: 'To promote the knowledge of Sanātana Dharma and the Bhagavadgītā through research, education, cultural dialogue and meaningful Seva.',
    href: '/about/mission',
    image: '/images/our-mission.png',
  },
]

export default function AboutLanding() {
  return (
    <>
      {/* About Us Hero */}
      <section className="about-hero">
        {/* Left content */}
        <div className="about-hero-content">
          <nav
            aria-label="Breadcrumb"
            className="about-breadcrumb"
          >
            <Link to="/">Home</Link>
            <span className="about-breadcrumb-separator">›</span>
            <span>About Us</span>
          </nav>

          <p className="eyebrow text-gold-antique mb-3">
            About Us
          </p>

          <h1 className="font-serif text-4xl lg:text-5xl text-cream-50 font-semibold leading-tight">
            Who We Are
          </h1>

          <p className="about-hero-subtitle">
            Aishwarya Sarvahith Foundation — rooted in timeless
            wisdom, dedicated to compassionate service.
          </p>

          <div
            className="about-hero-divider"
            aria-hidden="true"
          >
            <span />
            <span className="about-hero-diamond" />
            <span />
          </div>
        </div>

        {/* Right philosophy artwork */}
        <div className="about-hero-art">
          <img
            src="/images/asf-main-banner.png"
            alt="Aishwarya Sarvahith Foundation — Rooted in Timeless Wisdom, Dedicated to Compassionate Service"
          />
        </div>
      </section>

      {/* Existing About Us cards — unchanged */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore"
            title="Our Story, Wisdom & Purpose"
            subtitle="From our philosophical roots to our vision for the world, explore what ASF stands for."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group card-premium overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-52 overflow-hidden bg-cream-100 flex items-center justify-center p-2.5 border-b border-cream-200">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80'
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl text-maroon font-semibold mb-1">
                    {s.title}
                  </h3>

                  <p className="text-gold-antique text-xs font-sans italic mb-2">
                    {s.subtitle}
                  </p>

                  <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  <span className="inline-flex items-center gap-1 text-maroon text-sm font-sans font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
