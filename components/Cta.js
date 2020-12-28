export default function Cta() {
  return (
    <div>
      <img
        className='object-center w-24 mx-auto mb-10 rounded-full lg:w-24 md:w-24'
        alt='hero'
        src='/alexandre.png'
      />
      <div className='px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='mx-10 text-5xl font-extrabold tracking-tight text-alan-darkergrey lg:text-5xl sm:text-xl'>
          <span className='block'>Are you ready to</span>
          <span className='block text-alan-green'>
            learn about me and why I want to join Alan?
          </span>
        </h2>
      </div>
    </div>
  );
}
