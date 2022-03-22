export default function BigBanner({
  imgHeight,
  featured,
  imgLink,
}: {
  imgHeight: any;
  featured: any;
  imgLink: any;
}) {
  return (
    <>
      <div
        className={`mx-auto  w-72 overflow-hidden rounded-[30px] bg-orange shadow-lg ${
          featured && '-mt-32'
        }`}
      >
        <div className='flex flex-col'>
          <div className='shrink-0'>
            <div
              className='object-cover object-right-top '
              style={{ height: imgHeight, backgroundImage: `url(${imgLink})` }}
            >
              {!featured && <div className='p-5 text-right'>star</div>}
            </div>
          </div>
          <div className='px-8 pb-8 pt-3'>
            <div className='text-sm font-semibold uppercase tracking-wide text-indigo-500'>
              Dog Tips
            </div>
            <a
              href='#'
              className='mt-1 block text-lg font-medium leading-tight text-white hover:underline'
            >
              10 Tips for healthy happy dogs
            </a>
            <p className='mt-2 text-white'>
              Feeding dogs require techniques! If you don't want your dog ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
