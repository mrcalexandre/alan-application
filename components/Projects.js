export default function Projects() {
  return (
    <div>
      <div className='px-10 py-12 mx-10 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-5xl font-extrabold tracking-tight text-alan-darkergrey lg:text-5xl sm:text-xl'>
          I like to share{'  '}
          <span className='text-alan-green'>what I build</span>
        </h2>
      </div>
      <div className='flex flex-wrap px-8 mx-auto -mb-10 text-center'>
        <div className='px-4 mb-10 w-max lg:w-1/3 sm:w-max md:w-1/3'>
          <iframe
            src='https://cards.producthunt.com/cards/posts/143789?v=1'
            height='140'
            frameBorder='0'
            scrolling='no'
            className='w-full rounded-md shadow-lg sm:w-max'
          ></iframe>
        </div>
        <div className='px-4 mb-10 w-max lg:w-1/3 sm:w-max md:w-1/3'>
          <iframe
            src='https://cards.producthunt.com/cards/posts/121884?v=1'
            height='140'
            frameBorder='0'
            scrolling='no'
            className='w-full rounded-md shadow-lg sm:w-max'
          ></iframe>
        </div>
        <div className='px-4 mb-10 w-max lg:w-1/3 sm:w-max md:w-1/3'>
          <iframe
            src='https://cards.producthunt.com/cards/posts/89472?v=1'
            height='140'
            frameBorder='0'
            scrolling='no'
            className='w-full rounded-md shadow-lg sm:w-max'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
