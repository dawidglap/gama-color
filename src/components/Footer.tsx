'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'
import logoGama from '../../public/images/gama-color-logo.png';

const Footer = () => {
  return (
    <>
      {/* brand stripes */}
      <div className='h-2 bg-yellow-400'></div>
      <div className='h-2 bg-red-500'></div>
      <div className='h-2 bg-blue-400'></div>

      <footer className='py-10 text-primary'>
        {/* Logo */}
        <div className='mb-8 flex justify-center'>
          <Link href='/' aria-label='Strona główna'>
            <div className='flex cursor-pointer items-center gap-4'>
              <div className='relative h-24 w-48 md:h-32 md:w-64'>
                <Image
                  src={logoGama}
                  alt='Gama Color — logo'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Grid contenuti */}
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3 lg:grid-cols-4'>
          {/* Produkty */}
          <nav className='text-center md:text-left'>
            <h4 className='mb-4 text-lg font-semibold'>Produkty</h4>
            <ul className='space-y-2'>
              <li><Link href='/produkty/rolety-materialowe' className='hover:underline hover:text-accent'>Rolety materiałowe</Link></li>
              <li><Link href='/produkty/zaluzje' className='hover:underline hover:text-accent'>Żaluzje</Link></li>
              <li><Link href='/produkty/plisy' className='hover:underline hover:text-accent'>Plisy</Link></li>
              <li><Link href='/produkty/moskitiery' className='hover:underline hover:text-accent'>Moskitiery</Link></li>
              <li><Link href='/produkty/rolety-zewnetrzne' className='hover:underline hover:text-accent'>Rolety zewnętrzne</Link></li>
              <li><Link href='/produkty/markizy' className='hover:underline hover:text-accent'>Markizy</Link></li>
              <li className='pt-2 text-sm'><Link href='/produkty' className='hover:underline'>Zobacz wszystkie →</Link></li>
            </ul>
          </nav>

          {/* Informacje */}
          <nav className='text-center md:text-left'>
            <h4 className='mb-4 text-lg font-semibold'>Informacje</h4>
            <ul className='space-y-2'>
              <li><Link href='/o-nas' className='hover:underline hover:text-accent'>O nas</Link></li>
              <li><Link href='/#advantages' className='hover:underline hover:text-accent'>Dlaczego my</Link></li>
              <li><Link href='/#reviews' className='hover:underline hover:text-accent'>Opinie klientów</Link></li>
              <li><Link href='/#faq' className='hover:underline hover:text-accent'>FAQ</Link></li>
                 <li><Link href='/jak-mierzyc' className='hover:underline hover:text-accent'>Jak mierzyć</Link></li>
              <li className='pt-2 text-sm text-secondary'><Link href='/polityka-prywatnosci' className='hover:underline'>Polityka prywatności</Link></li>
              <li className='text-sm text-secondary'><Link href='/mapa-strony' className='hover:underline'>Mapa strony</Link></li>
            </ul>
          </nav>

          {/* Kontakt / NAP + godziny + social */}
          <div className='text-center md:text-left lg:col-span-2 lg:text-right'>
            <h4 className='mb-4 text-lg font-semibold'>Kontakt</h4>
            <div className='space-y-2 text-sm'>
              <p className='flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                <FaEnvelope /> <a href='mailto:biuro@gamacolor.pl' className='hover:underline'>biuro@gamacolor.pl</a>
              </p>
              <p className='flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                <FaPhoneAlt /> <a href='tel:+48598423534' className='hover:underline'>+48 59 842 35 34</a>
              </p>
              <p className='flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                <FaPhoneAlt /> <a href='tel:+48603380709' className='hover:underline'>+48 603 380 709</a>
              </p>
              <p className='mt-3 flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                <FaMapMarkerAlt />
                <span>
                  ul. Morcinka 21, 76-200 Słupsk ·{' '}
                  <a
                    href='https://maps.google.com/?q=Gama+Color+Słupsk+Morcinka+21'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline decoration-dotted underline-offset-2 hover:decoration-solid'
                    aria-label='Pokaż na mapie (otwiera się w nowej karcie)'
                  >
                    Pokaż na mapie
                  </a>
                </span>
              </p>

              {/* Godziny otwarcia */}
              <div className='mt-4'>
                <h5 className='mb-1 text-sm font-semibold'>Godziny otwarcia</h5>
                <ul className='space-y-1 text-sm'>
                  <li className='flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                    <FaClock /> pn–czw 8:00–16:00
                  </li>
                  <li className='flex items-center justify-center gap-2 md:justify-start lg:justify-end'>
                    <FaClock /> pt 8:00–15:00
                  </li>
                  <li className='flex items-center justify-center gap-2 md:justify-start lg:justify-end text-secondary'>
                    <FaClock /> sob–niedz: nieczynne
                  </li>
                </ul>
              </div>
            </div>

            {/* Social */}
            {/* <div className='mt-6'>
              <h5 className='mb-2 text-sm font-semibold'>Znajdź nas</h5>
              <div className='flex justify-center gap-4 md:justify-start lg:justify-end'>
                <a
                  href='https://www.facebook.com/gamacolor'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook — Gama Color'
                  className='transition-transform hover:scale-110'
                >
                  <FaFacebookF className='text-xl hover:text-accent' />
                </a>
                <a
                  href='https://www.instagram.com/gamacolor'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram — Gama Color'
                  className='transition-transform hover:scale-110'
                >
                  <FaInstagram className='text-xl hover:text-accent' />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-10 text-center text-sm text-secondary'>
          <p>&copy; {new Date().getFullYear()} Gama Color. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>

      {/* JSON-LD LocalBusiness — z godzinami otwarcia */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Gama Color — Zakład Wyrobu Żaluzji',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ul. Morcinka 21',
              addressLocality: 'Słupsk',
              postalCode: '76-200',
              addressCountry: 'PL',
            },
            telephone: '+48 598423534',
            email: 'biuro@gamacolor.pl',
            url: 'https://www.gamacolor.pl',
            openingHours: ['Mo-Th 08:00-16:00', 'Fr 08:00-15:00'],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                opens: '08:00',
                closes: '16:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Friday',
                opens: '08:00',
                closes: '15:00',
              },
              // weekend zamknięty — pomijamy w specyfikacji
            ],
          }),
        }}
      />
    </>
  )
}

export default Footer
