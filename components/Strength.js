export default function Strength({ title, description, url }) {
  return (
    <div className='flex mx-10'>
      <div className='flex-shrink-0'>
        <div className='flex items-center justify-center w-8 h-8 text-white'>
          <img src={url} />
        </div>
      </div>
      <div className='ml-4'>
        <dt className='text-xl font-bold text-alan-darkergrey'>{title}</dt>
        <dd className='mt-2 text-base text-alan-darkergrey'>{description}</dd>
      </div>
    </div>
  );
}
