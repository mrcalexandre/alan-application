export default function Cta() {
  return (
    <div>
      <img
        className='object-center w-24 mx-auto mb-10 rounded-full lg:w-24 md:w-24'
        alt='hero'
        src='/alexandre.png'
      />
      <div className='px-2 py-12 mx-auto sm:px-2 lg:py-16 lg:px-10 lg:flex lg:items-center lg:justify-between'>
        <h2 className='px-2 mx-8 text-5xl font-extrabold tracking-tight sm:mx-2 text-alan-darkergrey lg:text-5xl sm:text-xl'>
          <span className='block'>Are you ready to</span>
          <span className='block text-alan-green'>
            learn about me and why I want to join Alan?
          </span>
        </h2>
      </div>
    </div>
  );
}
