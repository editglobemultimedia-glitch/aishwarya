import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  image?: string
}

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  image,
}: PageBannerProps) {
  // If an image is provided, render the 2-column arched hero format with the blue corner line
  if (image) {
    const finalImage = image

    return (
      <section className="about-hero">
        {/* Left content */}
        <div className="about-hero-content">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="about-breadcrumb"
            >
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="about-breadcrumb-separator">›</span>
                  {crumb.href ? (
                    <Link to={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <p className="eyebrow text-gold-antique mb-3">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-4xl lg:text-5xl text-cream-50 font-semibold leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="about-hero-subtitle">
              {subtitle}
            </p>
          )}

          <div
            className="about-hero-divider"
            aria-hidden="true"
          >
            <span />
            <span className="about-hero-diamond" />
            <span />
          </div>
        </div>

        {/* Right artwork with arched blue border */}
        <div className="about-hero-art">
          <img
            src={finalImage}
            alt={title}
          />
        </div>
      </section>
    )
  }

  // Fallback for pages without an image
  return (
    <section className="page-banner">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-cream-300/60 font-sans mb-4"
          >
            <Link
              to="/"
              className="hover:text-gold-champagne transition-colors"
            >
              Home
            </Link>

            {breadcrumbs.map((crumb, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5"
              >
                <ChevronRight size={11} />

                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-gold-champagne transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-champagne">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow text-gold-antique mb-3">
            {eyebrow}
          </p>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream-50 leading-tight max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-cream-300/80 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        <div
          className="mt-6 flex items-center gap-3"
          aria-hidden="true"
        >
          <div className="w-12 h-0.5 bg-gold-antique" />
          <div className="w-3 h-3 rotate-45 border border-gold-antique" />
          <div className="w-6 h-0.5 bg-gold-antique/50" />
        </div>
      </div>
    </section>
  )
}
