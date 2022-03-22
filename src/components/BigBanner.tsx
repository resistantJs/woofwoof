
export default function BigBanner({imgHeight, featured, img}) {
  return (
    <>
      <div className={`mx-auto  overflow-hidden rounded-[30px] bg-orange shadow-lg w-72 ${featured && '-mt-32'}`}>
        <div className='flex flex-col'>
          <div className='shrink-0'>
            <div
              className='object-cover object-right-top '
              style={{height:imgHeight, backgroundImage: `url(${img})`}}
            >
                {!featured && <div className="text-right p-5">star</div>}
            </div>
          </div>
          <div className='pb-8 px-8 pt-3'>
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
