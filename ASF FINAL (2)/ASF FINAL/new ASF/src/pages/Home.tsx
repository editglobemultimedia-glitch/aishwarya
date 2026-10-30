import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { ArrowRight, BookOpen, Flame, Droplets, Wind, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

import SectionHeader from '../components/ui/SectionHeader'

import GoldDivider from '../components/ui/GoldDivider'

import QuoteBlock from '../components/ui/QuoteBlock'





const heroSlides = [

  {

    image: '/images/asf3.png',

    alt: 'Ancient Wisdom - Sri Krishna and Arjuna on the chariot',

    caption: 'Ancient Wisdom — Sri Krishna and Arjuna on the Chariot',

  },

  {

    image: '/images/asf4.png',

    alt: 'Compassionate Seva - Serving food with gratitude',

    caption: 'Compassionate Seva — Selfless Food Service',

  },

  {

    image: '/images/asf5.png',

    alt: 'Skill in action is Yoga - Serving the welfare of all',

    caption: 'Jnana & Seva — Skill in Action is Yoga',

  },

  {

    image: '/images/asf6.png',

    alt: 'Knowledge & Guidance - Bhagavad Gita wisdom for the next generation',

    caption: 'Education & Youth — Wisdom for Next Generations',

  },

]
// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      aria-label="ASF image gallery"
      className="relative h-[calc(100svh-138px)] min-h-[480px] w-full overflow-hidden bg-[#FFFDF8] select-none"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? 'z-0 opacity-100'
              : 'pointer-events-none z-0 opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="block h-full w-full object-contain object-center"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-lg transition hover:bg-[#7C1724] sm:left-6 sm:h-12 sm:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-lg transition hover:bg-[#7C1724] sm:right-6 sm:h-12 sm:w-12"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-7 bg-[#E5B85C]'
                : 'w-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}


// ─── PHILOSOPHY SECTION ──────────────────────────────────────────────────────
function PhilosophySection() {

  const pillars = [

    { label: 'Dharma', desc: 'Righteous living, ethical values, responsibility and integrity.' },

    { label: 'Jnana', desc: 'Knowledge and awareness — making wisdom accessible to all.' },

    { label: 'Seva', desc: 'Service through compassionate action for the welfare of others.' },

    { label: 'Sarvahith', desc: 'Working towards the welfare and flourishing of all creation.' },

  ]



  const journey = [

    { title: 'Know', desc: 'Seek wisdom and understanding.' },

    { title: 'Reflect', desc: 'Discover the relationship between self, society and creation.' },

    { title: 'Serve', desc: 'Convert compassion into meaningful action.' },

    { title: 'Sustain', desc: 'Protect and nurture the world entrusted to us.' },

  ]



  return (

    <section className="py-20 bg-cream-50 mandala-bg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader

          eyebrow="Our Philosophy"

          title="A Journey from Self to Society"

          subtitle="Sanatana Dharma offers a vision of life in which the individual is not isolated from family, society, nature and the larger order of existence."

        />



        {/* Pillars */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">

          {pillars.map((p) => (

            <div key={p.label} className="card-premium p-6 text-center group hover:border-gold-antique/40">

              <div className="w-12 h-12 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-maroon/12 transition-colors">

                <div className="w-2 h-2 rounded-full bg-gold-antique" />

              </div>

              <h3 className="font-serif text-maroon font-semibold text-lg mb-1">{p.label}</h3>

              <p className="text-gray-600 text-xs font-sans leading-relaxed">{p.desc}</p>

            </div>

          ))}

        </div>



        <GoldDivider />



        {/* Journey 4 cards */}

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

          {journey.map((j, i) => (

            <div key={j.title} className="relative card-premium p-6 text-center overflow-hidden group hover:border-gold-antique/50">

              <span className="absolute top-3 right-3 text-5xl font-serif text-gold-antique/8 font-bold">

                {String(i + 1).padStart(2, '0')}

              </span>

              <h3 className="font-serif text-maroon font-semibold text-xl mb-2">{j.title}</h3>

              <p className="text-gray-600 text-sm font-sans leading-relaxed">{j.desc}</p>

            </div>

          ))}

        </div>



        <div className="mt-8 text-center">

          <Link to="/about/philosophy" className="btn-ghost">

            Read Our Full Philosophy <ArrowRight size={14} />

          </Link>

        </div>

      </div>

    </section>

  )

}
// ─── PANCHA MAHABHUTA ────────────────────────────────────────────────────────
function PanchaMahabhutaSection() {

  const elements = [

    {

      name: 'Ākāśa',

      sanskrit: 'आकाश',

      meaning: 'Space',

      color: 'from-navy to-navy-dark',

      text: 'text-cream-50',

      icon: <Globe size={28} />,

      desc: 'Knowledge, dialogue, research and cultural exchange. Space for wisdom to unfold.',

      href: '/about/pancha-mahabhuta#akasa',

    },

    {

      name: 'Vāyu',

      sanskrit: 'वायु',

      meaning: 'Air',

      color: 'from-maroon to-maroon-dark',

      text: 'text-cream-50',

      icon: <Wind size={28} />,

      desc: 'Outreach, communication, volunteerism and movement. Let wisdom move.',

      href: '/about/pancha-mahabhuta#vayu',

    },

    {

      name: 'Agni',

      sanskrit: 'अग्नि',

      meaning: 'Fire',

      color: 'from-gold-antique to-gold-dark',

      text: 'text-navy',

      icon: <Flame size={28} />,

      desc: 'Education, research, leadership and transformation. The light of knowledge.',

      href: '/about/pancha-mahabhuta#agni',

    },

    {

      name: 'Āpaḥ',

      sanskrit: 'आपः',

      meaning: 'Water',

      color: 'from-blue-700 to-blue-900',

      text: 'text-cream-50',

      icon: <Droplets size={28} />,

      desc: 'Compassion, healthcare, nourishment and humanitarian support.',

      href: '/about/pancha-mahabhuta#apah',

    },

    {

      name: 'Pṛthivī',

      sanskrit: 'पृथिवी',

      meaning: 'Earth',

      color: 'from-green-800 to-green-950',

      text: 'text-cream-50',

      icon: <Globe size={28} />,

      desc: 'Environment, agriculture, villages, communities and sustainability.',

      href: '/about/pancha-mahabhuta#prthivi',

    },

  ]



  return (

    <section className="py-20 bg-cream-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader

          eyebrow="Pancha Mahabhuta"

          title="Five Elements. One Vision."

          subtitle="ASF's interpretive framework inspired by the dharmic tradition — a journey of space, movement, transformation, nourishment and stability."

        />



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {elements.map((el) => (

            <Link

              to={el.href}

              key={el.name}

              className={`element-card bg-gradient-to-b ${el.color} group hover:shadow-2xl`}

            >

              <div className={`${el.text} mb-4 flex justify-center opacity-90`}>{el.icon}</div>

              <p className={`font-serif text-2xl font-semibold ${el.text} mb-0.5`}>{el.name}</p>

              <p className={`text-sm opacity-60 ${el.text} mb-0.5`}>{el.sanskrit}</p>

              <p className={`text-xs font-sans tracking-widest uppercase opacity-80 ${el.text} mb-3`}>

                {el.meaning}

              </p>

              <p className={`text-xs font-sans leading-relaxed opacity-75 ${el.text}`}>{el.desc}</p>

            </Link>

          ))}

        </div>



        <div className="mt-8 text-center">

          <Link to="/about/pancha-mahabhuta" className="btn-ghost">

            Explore the Five Elements <ArrowRight size={14} />

          </Link>

        </div>

      </div>

    </section>

  )

}
// ─── BHAGAVADGĪTA SECTION ────────────────────────────────────────────────────
function BhagavadgitaSection() {

  return (

    <section className="py-20 bg-navy">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}

          <div>

            <p className="eyebrow text-gold-champagne mb-3">The Wisdom That Guides Our Journey</p>

            <div className="flex items-center gap-2 mb-5">

              <div className="w-8 h-px bg-gold-antique/40" />

              <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />

              <div className="w-8 h-px bg-gold-antique/40" />

            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-semibold leading-tight mb-6">

              The Bhagavadgītā — Timeless Questions for Every Age

            </h2>

            <p className="text-cream-300/80 font-sans text-sm leading-relaxed mb-6">

              The Bhagavadgītā is at the heart of ASF's knowledge and cultural vision.

              It speaks to questions that remain timeless across every generation and culture.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">

              {[

                'What is my responsibility?',

                'How should I act?',

                'How do I respond to difficulty?',

                'How can action become selfless service?',

                'How can knowledge transform the individual?',

                'How can individual responsibility contribute to collective welfare?',

              ].map((q) => (

                <div key={q} className="flex items-start gap-2">

                  <span className="text-gold-antique mt-1 flex-shrink-0">◆</span>

                  <p className="text-cream-300/75 font-sans text-xs leading-relaxed">{q}</p>

                </div>

              ))}

            </div>

            <Link to="/about/bhagavadgita" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">

              Explore the Bhagavadgītā <ArrowRight size={14} />

            </Link>

          </div>



          {/* Image */}

          <div className="relative">

            <div className="rounded-xl overflow-hidden shadow-2xl border border-gold-antique/20">

              <img

                src="/images/krishna-arjuna-chariot.jpg"

                alt="The Bhagavadgītā — Sri Krishna imparting timeless wisdom to Arjuna on the Chariot"

                className="w-full h-80 sm:h-96 md:h-[400px] object-cover object-center"

                onError={(e) => {

                  (e.target as HTMLImageElement).src = '/images/asf1.png'

                }}

              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent rounded-xl pointer-events-none" />

            </div>

            {/* Floating quote */}

            <div className="absolute -bottom-5 -left-5 bg-maroon p-4 rounded-lg shadow-xl max-w-xs hidden lg:block border border-gold-antique/30">

              <p className="text-cream-50 font-serif text-sm italic leading-relaxed">

                "When wisdom becomes understanding, understanding becomes responsibility,

                and responsibility becomes Seva."

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}
// ─── FIVE COMMITMENTS ────────────────────────────────────────────────────────
function FiveCommitmentsSection() {

  const commitments = [

    {

      number: '01',

      title: 'Knowledge',

      desc: 'To preserve and share timeless wisdom across generations and cultures.',

      icon: <BookOpen size={24} />,

    },

    {

      number: '02',

      title: 'Culture',

      desc: 'To honour India\'s civilisational heritage and its universal values.',

      icon: <Globe size={24} />,

    },

    {

      number: '03',

      title: 'Compassion',

      desc: 'To respond to human needs with dignity, care and selfless service.',

      icon: <Droplets size={24} />,

    },

    {

      number: '04',

      title: 'Sustainability',

      desc: 'To respect and protect our natural world for future generations.',

      icon: <Flame size={24} />,

    },

    {

      number: '05',

      title: 'Sarvahith',

      desc: 'To work towards the welfare and flourishing of all creation.',

      icon: <Wind size={24} />,

    },

  ]



  return (

    <section className="py-20 bg-cream-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader

          eyebrow="Our Five Great Commitments"

          title="What We Stand For"

          subtitle="Five principles that guide every initiative, every campaign and every act of service at Aishwarya Sarvahith Foundation."

        />



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {commitments.map((c) => (

            <div

              key={c.title}

              className="card-premium p-6 text-center group hover:border-gold-antique/50 hover:-translate-y-1 transition-all duration-300"

            >

              <div className="w-12 h-12 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon/15 transition-colors text-maroon">

                {c.icon}

              </div>

              <span className="text-gold-antique/30 text-4xl font-serif font-bold absolute top-3 right-3">

                {c.number}

              </span>

              <h3 className="font-serif text-maroon font-semibold text-lg mb-2">{c.title}</h3>

              <p className="text-gray-600 text-xs font-sans leading-relaxed">{c.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
// ─── MISSION SECTION ──────────────────────────────────────────────────────────
function MissionSection() {
  const missionPoints = [
    {
      title: 'Vishwa Gita Research Centre',
      desc: 'Dedicated study, interpretation, documentation and dissemination of the Bhagavadgītā.',
    },
    {
      title: 'Global Gita Awareness',
      desc: 'Educational programmes, public discourses, translations and digital learning worldwide.',
    },
    {
      title: 'Wisdom into Seva',
      desc: 'Translating timeless philosophical principles into humanitarian healthcare, education and community welfare.',
    },
    {
      title: 'Youth & Nature',
      desc: 'Nurturing the next generation of dharmic leaders while honouring and protecting Mother Earth (Pṛthivī).',
    },
  ]

  return (
    <section className="py-20 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="eyebrow text-gold-antique mb-3">Our Mission</p>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-antique/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
              <div className="w-8 h-px bg-gold-antique/40" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-maroon font-semibold leading-tight mb-5">
              From Wisdom to Seva. <br className="hidden sm:inline" />
              <span className="italic">From Seva to Sarvahith.</span>
            </h2>

            <div className="bg-cream-100 rounded-xl p-5 border-l-4 border-gold-antique shadow-sm mb-6">
              <p className="font-serif text-base text-navy font-medium leading-relaxed">
                "To promote the knowledge of Sanātana Dharma and the Bhagavadgītā through research, education, cultural dialogue and meaningful Seva, while nurturing youth, supporting communities, respecting nature and working towards the welfare of all."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {missionPoints.map((item, idx) => (
                <div key={item.title} className="bg-cream-50 p-4 rounded-lg border border-gold-antique/20 shadow-xs">
                  <span className="text-gold-antique font-serif text-xs font-bold tracking-widest block mb-1">
                    0{idx + 1} • PILLAR
                  </span>
                  <h4 className="font-serif text-maroon font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-xs font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about/mission" className="btn-primary">
                Explore Our Mission <ArrowRight size={14} />
              </Link>
              <Link to="/Activites" className="btn-ghost">
                Our Activities <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Graphic / Image */}
          <div className="relative">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-gold-antique/30 overflow-hidden">
              <img
                src="/images/our-mission.png"
                alt="Aishwarya Sarvahith Foundation - Our Mission"
                className="w-full h-auto max-h-[460px] object-contain rounded-xl mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/Our  Mission.png'
                }}
              />
            </div>
            {/* Subtle decorative accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-navy text-cream-50 py-2.5 px-4 rounded-lg shadow-lg border border-gold-antique/40 hidden sm:block">
              <p className="text-xs font-serif text-gold-champagne tracking-wide">
                Dharma • Jnana • Seva • Sarvahith
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── VISION SECTION ───────────────────────────────────────────────────────────
function VisionSection() {
  const visionHighlights = [
    {
      stat: '18 Countries',
      label: 'Global Horizon',
      desc: 'Aspired reach of the Bhagavadgītā Vishwa Mahotsav — a shared global platform across 18 chapters and languages.',
    },
    {
      stat: '5 Elements',
      label: 'Pancha Mahabhuta',
      desc: 'A cosmic framework honouring space, air, fire, water and earth for sustainable and compassionate living.',
    },
    {
      stat: 'Universal Welfare',
      label: 'Sarvahith',
      desc: 'Dedicated to the holistic flourishing of every individual, every community, and all living creation.',
    },
  ]

  return (
    <section className="py-20 bg-cream-100 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Graphic / Image (Order first on desktop for zigzag rhythm) */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-gold-antique/30 overflow-hidden">
              <img
                src="/images/our-vision.png"
                alt="Aishwarya Sarvahith Foundation - Our Vision"
                className="w-full h-auto max-h-[460px] object-contain rounded-xl mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/Our Vision .png'
                }}
              />
            </div>
            {/* Floating quote badge */}
            <div className="absolute -bottom-4 -left-4 bg-maroon text-cream-50 py-2.5 px-4 rounded-lg shadow-lg border border-gold-antique/40 hidden sm:block max-w-xs">
              <p className="text-xs font-serif italic text-cream-100">
                "Guided by timeless wisdom, dedicated to all creation."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow text-gold-antique mb-3">Our Vision</p>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-antique/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
              <div className="w-8 h-px bg-gold-antique/40" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-maroon font-semibold leading-tight mb-5">
              A Harmonious World <br className="hidden sm:inline" />
              <span className="italic">Rooted in Dharma</span>
            </h2>

            <div className="bg-cream-200/80 rounded-xl p-5 border-l-4 border-maroon shadow-sm mb-6">
              <p className="font-serif text-base text-maroon font-medium italic leading-relaxed">
                "To inspire a world where timeless wisdom guides responsible living, compassionate Seva and respect for all creation — nurturing individuals, communities and a sustainable future."
              </p>
            </div>

            <p className="text-gray-700 font-sans text-sm leading-relaxed mb-6">
              ASF seeks to be a bridge between ancient wisdom and contemporary challenges, between individual transformation and collective welfare, and between civilisational heritage and the aspirations of a changing world.
            </p>

            <div className="space-y-3 mb-8">
              {visionHighlights.map((v) => (
                <div key={v.stat} className="flex items-start gap-3 bg-white/70 p-3.5 rounded-lg border border-gold-antique/20">
                  <span className="text-maroon font-serif font-bold text-base whitespace-nowrap min-w-[120px]">
                    {v.stat}
                  </span>
                  <p className="text-gray-600 text-xs font-sans leading-relaxed">
                    <strong className="text-navy">{v.label}:</strong> {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about/vision" className="btn-primary">
                Read Full Vision <ArrowRight size={14} />
              </Link>
              <Link to="/get-involved" className="btn-ghost">
                Join Our Mission <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SIGNATURE / CLOSING ─────────────────────────────────────────────────────
function SignatureSection() {
  return (
    <>
      <QuoteBlock
        quote="When we understand that we are part of creation, Seva becomes our responsibility."
        dark={false}
      />

      <section className="py-16 bg-maroon-dark text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/asf-logo.png"
            alt="ASF Logo"
            className="h-20 w-200 mx-auto mb-100 opacity-100"
          />
          <p className="font-serif text-cream-50 text-2xl md:text-3xl font-medium mb-2">
            Aishwarya Sarvahith Foundation
          </p>
          <p className="font-sans text-gold-champagne text-sm tracking-widest uppercase mb-8">
            Rooted in Dharma. Dedicated to Seva. Committed to Society.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/support-us" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">
              Support Us <ArrowRight size={14} />
            </Link>
            <Link to="/get-involved" className="btn-outline border-gold-antique text-gold-champagne hover:bg-gold-antique hover:text-navy">
              Join Our Mission <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <PanchaMahabhutaSection />
      <BhagavadgitaSection />
      <FiveCommitmentsSection />
      <MissionSection />
      <VisionSection />
      <SignatureSection />
    </>
  )
}
