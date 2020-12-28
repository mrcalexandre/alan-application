import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row'>
      <Link href='https://alexandremouriec.com'>
        <a
          className='text-lg font-bold text-alan-darkergrey dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
          target='_blank'
          rel='noopener noreferrer'
        >
          © 2020 - Alexandre Mouriec
        </a>
      </Link>
      <p className='py-2 text-sm font-bold text-alan-darkergrey dark:text-white sm:py-0'>
        Website built with{' '}
        <Link href='https://nextjs.org'>
          <a className='underline' target='_blank' rel='noopener noreferrer'>
            Next.js
          </a>
        </Link>
        ,{' '}
        <Link href='https://tailwindcss.com'>
          <a className='underline' target='_blank' rel='noopener noreferrer'>
            Tailwind CSS
          </a>
        </Link>
        , and{' '}
        <Link href='https://contentful.com'>
          <a className='underline' target='_blank' rel='noopener noreferrer'>
            Contentful
          </a>
        </Link>{' '}
        - Hosted on{' '}
        <Link href='https://github.com/mrcalexandre'>
          <a className='underline' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
        </Link>{' '}
        and{' '}
        <Link href='https://vercel.com'>
          <a className='underline' target='_blank' rel='noopener noreferrer'>
            Vercel
          </a>
        </Link>
      </p>
    </footer>
  );
}
