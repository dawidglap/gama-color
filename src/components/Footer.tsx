'use client'

import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'
import Image from 'next/image'
import logoGama from '../../public/images/gama-color-logo.png';


const Footer = () => {
  return (
    <>
    <div className='h-2 bg-yellow-400'></div>
  <div className='h-2 bg-red-500'></div>
  <div className='h-2 bg-blue-400'></div>
    
    <footer className='py-10 text-primary'>
      {/* Logo */}
      <div className='mb-8 flex justify-center'>
        <Link href='/'>
        <div className='flex cursor-pointer items-center gap-4'>
  <div className='relative h-24 w-48 md:h-32 md:w-64'>
    <Image
      src={logoGama}
      alt='Logo Gama Color'
      fill
      className='object-contain'
    />
  </div>
 
</div>
        </Link>
      </div>

      <div className='mx-auto max-w-6xl grid grid-cols-1 gap-8 px-8 md:grid-cols-3'>
        {/* Link Navigazione */}
        <div className='text-center md:text-left'>
          <h4 className='mb-4 text-lg font-semibold'>Nawigacja</h4>
          <ul className='space-y-2'>
            <li>
              <Link href='/#products' className='badge badge-outline hover:underline hover:text-accent'>
                Produkty
              </Link>
            </li>
            <li>
              <Link href='/#advantages' className='badge badge-outline hover:underline hover:text-accent'>
                Dlaczego my
              </Link>
            </li>
            <li>
              <Link href='/#reviews' className='badge badge-outline hover:underline hover:text-accent'>
                Opinie klientów
              </Link>
            </li>
            <li>
              <Link href='/#faq' className='badge badge-outline hover:underline hover:text-accent'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='text-center md:text-center'>
          <h4 className='mb-4 text-lg font-semibold'>Znajdź nas</h4>
          <div className='flex justify-center md:justify-center space-x-4'>
            <a
              href='https://www.facebook.com/gamacolor'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='transition-transform hover:scale-110'
            >
              <FaFacebookF className='text-xl hover:text-accent' />
            </a>
            <a
              href='https://www.instagram.com/gamacolor'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='transition-transform hover:scale-110'
            >
              <FaInstagram className='text-xl hover:text-accent' />
            </a>
          </div>
        </div>

        {/* Kontakt */}
        <div className='text-center md:text-right'>
          <h4 className='mb-4 text-lg font-semibold'>Kontakt</h4>
          <p className='flex items-center justify-center md:justify-end gap-2 text-sm'>
            <FaEnvelope /> <a href='mailto:biuro@gamacolor.pl' className='hover:underline'>biuro@gamacolor.pl</a>
          </p>
          <p className='flex items-center justify-center md:justify-end gap-2 text-sm mt-2'>
            <FaPhoneAlt /> <a href='tel:+48598423534' className='hover:underline'>+48 59 842 35 34</a>
          </p>
          <p className='flex items-center justify-center md:justify-end gap-2 text-sm'>
            <FaPhoneAlt /> <a href='tel:+48603380709' className='hover:underline'>+48 603 380 709</a>
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className='mt-10 text-center text-sm text-secondary'>
        <p>&copy; {new Date().getFullYear()} Gama Color. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
