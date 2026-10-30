import { Link } from 'react-router-dom'
import SectionHeader from '../../components/ui/SectionHeader'
import CampaignCard from '../../components/ui/CampaignCard'

const Activites = [
  { image: '/images/bh3.png', eyebrow: 'Global Initiative', title: 'Bhagavadgita Vishwa Mahotsav', description: '18 Countries. 18 Chapters. 18 Languages. A global platform for sharing the wisdom of the Gita across boundaries.', href: '/Activites/vishwa-mahotsav', tag: 'Campaign' },
  { image: '/images/Our Campaign 2.png', eyebrow: 'Knowledge', title: 'Vishwa Gita Research Centre', description: 'A proposed centre for research, translation, documentation, education and dialogue on the Bhagavadgita.', href: '/Activites/research-centre', tag: 'Campaign' },
  { image: '/images/Our Campaign Seva.png', eyebrow: 'Compassion', title: 'Seva — Service to All', description: 'Expressing gratitude through selfless service — education, healthcare, humanitarian support and community development.', href: '/Activites/seva', tag: 'Campaign' },
  { image: '/images/Our Campaigns education.png', eyebrow: 'Youth & Education', title: 'Education & Youth', description: 'From information to transformation — developing character, wisdom and responsible leadership in young people.', href: '/Activites/education-youth', tag: 'Campaign' },
  { image: '/images/Our Campaign Environment.png', eyebrow: 'Environment', title: 'Environment — Honouring Prthivi', description: 'Earth is not our property. It is our trust. Protecting the natural world through the lens of the Pancha Mahabhuta.', href: '/Activites/environment', tag: 'Campaign' },
]

export default function ActivitesLanding() {
  return (
    <>
      {/* Activities Hero */}
      <section className="about-hero">
        {/* Left content */}
        <div className="about-hero-content">
          <nav
            aria-label="Breadcrumb"
            className="about-breadcrumb"
          >
            <Link to="/">Home</Link>
            <span className="about-breadcrumb-separator">›</span>
            <span>Our Activites</span>
          </nav>

          <p className="eyebrow text-gold-antique mb-3">
            Our Activites
          </p>

          <h1 className="font-serif text-4xl lg:text-5xl text-cream-50 font-semibold leading-tight">
            Wisdom in Action
          </h1>

          <p className="about-hero-subtitle">
            Each campaign is an expression of Dharma, Jnana and Seva — translating ancient wisdom into meaningful service for society and the world.
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

        {/* Right artwork */}
        <div className="about-hero-art">
          <img
            src="/images/asf-main-banner.png"
            alt="Wisdom in Action — Dharma, Jnana and Seva"
          />
        </div>
      </section>
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Five Activites" title="Our Areas of Focus" subtitle="Rooted in the Pancha Mahabhuta framework, our Activites address knowledge, movement, transformation, compassion and the earth." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Activites.map(c => <CampaignCard key={c.href} {...c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
