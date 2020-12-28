import Link from 'next/link';

export default function SocialMedia() {
  return (
    <section>
      <div className='px-2 py-12 mx-10 sm:px-8 lg:py-16 lg:px-10 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-5xl font-extrabold tracking-tight text-alan-darkergrey lg:text-5xl sm:text-xl'>
          Where the <span className='text-alan-green'>magic happens</span>
        </h2>
      </div>
      <h1 className='mx-10 mt-2 text-lg font-medium text-left text-alan-darkergrey'>
        I am currently based in Brittany but I am planning on moving.
      </h1>

      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-wrap -m-2'>
          <div className='w-full p-4 lg:w-1/4 md:w-1/2'>
            <Link href='https://alexandremouriec.com'>
              <a target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center h-full p-4 border rounded-lg shadow-md hover:shadow-lg'>
                  <img
                    alt='portfolio'
                    className='flex-shrink-0 object-cover object-center w-16 h-16 mr-4 rounded-full'
                    src='/alexandre.png'
                  />
                  <div className='flex-grow'>
                    <h2 className='font-medium text-alan-darkergrey title-font'>
                      Portfolio
                    </h2>
                    <p className='text-gray-500'>alexandremouriec.com</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className='w-full p-4 lg:w-1/4 md:w-1/2'>
            <Link href='https://github.com/mrcalexandre'>
              <a target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center h-full p-4 border rounded-lg shadow-md hover:shadow-lg'>
                  <img
                    alt='github'
                    className='flex-shrink-0 object-cover object-center w-16 h-16 mr-4 rounded-full'
                    src='/github-logo.png'
                  />
                  <div className='flex-grow'>
                    <h2 className='font-medium text-alan-darkergrey title-font'>
                      GitHub
                    </h2>
                    <p className='text-gray-500'>@mrcalexandre</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className='w-full p-4 lg:w-1/4 md:w-1/2'>
            <Link href='https://twitter.com/mrcalexandre'>
              <a target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center h-full p-4 border rounded-lg shadow-md hover:shadow-lg'>
                  <img
                    alt='twitter'
                    className='flex-shrink-0 object-cover object-center w-16 h-16 mr-4 rounded-full'
                    src='/twitter-logo.png'
                  />
                  <div className='flex-grow'>
                    <h2 className='font-medium text-alan-darkergrey title-font'>
                      Twitter
                    </h2>
                    <p className='text-gray-500'>@mrcalexandre</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className='w-full p-4 lg:w-1/4 md:w-1/2'>
            <Link href='https://linkedin.com/in/alexandremouriec'>
              <a target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center h-full p-4 border rounded-lg shadow-md hover:shadow-lg'>
                  <img
                    alt='linkedin'
                    className='flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full'
                    src='/linkedin-logo.png'
                  />
                  <div className='flex-grow'>
                    <h2 className='font-medium text-alan-darkergrey title-font'>
                      LinkedIn
                    </h2>
                    <p className='text-gray-500'>@alexandremouriec</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
