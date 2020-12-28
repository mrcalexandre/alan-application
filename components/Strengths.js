import Bio from './Bio';
import Strength from './Strength';
export default function Strengths({ strengths }) {
  return (
    <div className='py-12'>
      <div className='px-8 max-w-7xl sm:px-10 lg:px-10'>
        <Bio />
        <h1 className='mx-10 text-xl font-bold tracking-wide'>My Strengths?</h1>
        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {strengths.length > 0
              ? strengths.map((p) => (
                  <Strength
                    title={p.fields.title}
                    description={p.fields.description}
                    url={p.fields.url}
                    key={p.fields.id}
                  />
                ))
              : null}
          </dl>
        </div>
      </div>
    </div>
  );
}
