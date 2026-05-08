export default function ChapsAndCoLandingPage() {
  const services = [
    {
      title: 'Premium Haircut',
      description: 'Precision cuts tailored to your style with a luxury finish.',
      price: 'From R180',
    },
    {
      title: 'Skin Fade',
      description: 'Sharp fades blended cleanly for a modern, polished look.',
      price: 'From R220',
    },
    {
      title: 'Beard Trim',
      description: 'Detailed beard shaping and lining for a clean profile.',
      price: 'From R120',
    },
    {
      title: 'Line Up',
      description: 'Crisp edges and precision detailing to keep you fresh.',
      price: 'From R90',
    },
    {
      title: 'Kids Cut',
      description: 'Clean, stylish cuts for younger gentlemen.',
      price: 'From R140',
    },
    {
      title: 'Full Grooming',
      description: 'Haircut, beard trim and styling experience combined.',
      price: 'From R320',
    },
  ]

  const team = [
    {
      name: 'Mohammed',
      role: 'Owner & Master Barber',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
      bio: 'Known for flawless fades, clean detailing and premium client service.',
    },
    {
      name: 'Papu',
      role: 'Senior Barber',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
      bio: 'Specialises in modern cuts, beard shaping and precision line work.',
    },
    {
      name: 'Ahmad',
      role: 'Barber',
      image:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
      bio: 'Focused on stylish trims and delivering consistently sharp results.',
    },
  ]

  const faqs = [
    {
      question: 'Where is Chaps & Co Barbers located?',
      answer:
        'Chaps & Co Barbers is located in Raslouw, Centurion, South Africa on Jewel Beetle Street.',
    },
    {
      question: 'How do I book an appointment at Chaps & Co?',
      answer:
        'You can book instantly online through Fresha using the Book Your Cut button throughout the site.',
    },
    {
      question: 'Who are the barbers at Chaps & Co in Centurion?',
      answer:
        'Our team includes Mohammed, Papu and Ahmad — experienced barbers known for premium fades and grooming.',
    },
    {
      question: 'Does Chaps & Co accept walk-ins?',
      answer:
        'Yes, walk-ins are welcome depending on availability, but online booking is strongly recommended.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #000;
        }

        .heading-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'Chaps & Co Barbers',
            image: 'https://yoursite.com/og-image.jpg',
            url: 'https://yoursite.com',
            telephone: '+27726967979',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jewel Beetle St',
              addressLocality: 'Raslouw, Pretoria',
              postalCode: '0157',
              addressCountry: 'ZA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -25.8553,
              longitude: 28.1522,
            },
            priceRange: '$$',
            hasMap:
              'https://maps.google.com/?q=Jewel+Beetle+St,+Raslouw,+Pretoria',
            employee: [
              {
                '@type': 'Person',
                name: 'Mohammed',
                jobTitle: 'Owner & Barber',
              },
              {
                '@type': 'Person',
                name: 'Papu',
                jobTitle: 'Senior Barber',
              },
              {
                '@type': 'Person',
                name: 'Ahmad',
                jobTitle: 'Barber',
              },
            ],
            makesOffer: {
              '@type': 'Offer',
              name: 'Online Booking',
              url: 'https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi',
            },
          }),
        }}
      />

      <header className="sticky top-0 z-50 border-b border-yellow-600/20 bg-black/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="heading-font text-xl font-bold tracking-wide text-yellow-500">
              Chaps & Co
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Barbers
            </p>
          </div>

          <a
            href="https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Book Now
          </a>
        </nav>
      </header>

      <main>
        <section
          className="relative flex min-h-[92vh] items-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto max-w-7xl px-5 py-24">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-yellow-400">
                Premium Barber Shop in Centurion
              </span>

              <h2 className="heading-font text-5xl font-bold leading-tight md:text-7xl">
                Centurion’s Favourite Barber Shop
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                Expert fades, lineups and grooming by Mohammed, Papu and Ahmad.
                Located in Raslouw, Centurion. Book your cut instantly online.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-yellow-500 px-7 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
                >
                  Book Your Cut on Fresha
                </a>

                <a
                  href="tel:+27726967979"
                  className="rounded-full border border-zinc-700 px-7 py-4 text-center font-semibold text-white transition hover:border-yellow-500 hover:text-yellow-400"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950 py-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-yellow-500">4.9★</p>
              <p className="mt-2 text-sm text-zinc-400">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">8+</p>
              <p className="mt-2 text-sm text-zinc-400">Years Serving Centurion</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">10k+</p>
              <p className="mt-2 text-sm text-zinc-400">Cuts Delivered</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-14 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              Services
            </span>
            <h3 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
              Precision Grooming Services
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-yellow-500/40"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <span className="text-sm font-semibold text-yellow-500">
                    {service.price}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <a
                  href="https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-yellow-500"
                >
                  Book Service →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-14 text-center">
              <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
                Meet The Team
              </span>
              <h3 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
                Barbers You Can Trust
              </h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-3xl border border-zinc-800 bg-black"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover"
                  />

                  <div className="p-7">
                    <h4 className="text-2xl font-semibold">{member.name}</h4>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-yellow-500">
                      {member.role}
                    </p>
                    <p className="mt-5 leading-7 text-zinc-400">
                      {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-24">
          <div className="mb-14 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              FAQ
            </span>
            <h3 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
                Visit Us
              </span>
              <h3 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
                Raslouw, Centurion
              </h3>

              <div className="mt-10 space-y-6 text-zinc-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-500">
                    Address
                  </p>
                  <address className="mt-2 not-italic leading-7">
                    Jewel Beetle St
                    <br />
                    Raslouw, Pretoria
                    <br />
                    Gauteng, South Africa
                  </address>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-500">
                    Contact
                  </p>
                  <p className="mt-2">072 696 7979</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-500">
                    Hours
                  </p>
                  <p className="mt-2 leading-7">
                    Monday – Saturday: 8AM – 7PM
                    <br />
                    Sunday: 9AM – 3PM
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black">
              <div className="flex h-full min-h-[400px] items-center justify-center bg-zinc-900 text-center text-zinc-500">
                Google Maps Embed Placeholder
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-yellow-500/20 bg-yellow-500/10 py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="heading-font text-3xl font-bold text-white md:text-4xl">
                Ready For Your Next Cut?
              </h3>
              <p className="mt-3 text-zinc-300">
                Skip the queue and secure your appointment online in seconds.
              </p>
            </div>

            <a
              href="https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Book Your Cut on Fresha
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black px-5 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 border-t border-zinc-800 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h4 className="heading-font text-2xl font-bold text-yellow-500">
              Chaps & Co Barbers
            </h4>
            <p className="mt-4 max-w-md leading-7 text-zinc-400">
              Premium barber shop in Centurion specialising in fades, beard
              trims and modern grooming.
            </p>
          </div>

          <div className="space-y-2 text-zinc-400">
            <p>Jewel Beetle St, Raslouw, Pretoria, 0157</p>
            <p>072 696 7979</p>
            <p>hello@chapsandco.co.za</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/95 p-4 backdrop-blur lg:hidden">
          <a
            href="https://www.fresha.com/a/chaps-and-co-raslouw-pretoria-chaps-co-barbers-jewel-beetle-street-giv79nqi"
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-yellow-500 px-6 py-4 text-center font-semibold text-black"
          >
            Book Your Cut on Fresha
          </a>
        </div>
      </footer>
    </div>
  )
}
