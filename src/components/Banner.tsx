export default function Banner({
  imgHeight,
  featured,
  imgLink,
  big,
  title,
  time,
}: {
  imgHeight: any;
  featured: any;
  imgLink: any;
  big: any;
  title: any;
  time: any;
}) {
  return (
    <>
      <div
        className={`flex-shrink-0 overflow-hidden rounded-[30px] bg-orange shadow-lg 
        ${big && 'mx-auto -mt-32 w-72'} ${!big && 'w-56'}
        `}
      >
        <div className='flex flex-col'>
          <div className='shrink-0'>
            <div
              className={`object-cover bg-center`}
              style={{ height: imgHeight, backgroundImage: `url(${imgLink})` }}
            >
              {featured && (
                <div className='p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='39'
                    height='37'
                    fill='none'
                    viewBox='0 0 39 37'
                  >
                    <path
                      fill='#FDBD4E'
                      d='M37.229 13.277l-11.246-1.643-5.027-10.242a1.413 1.413 0 00-.642-.645 1.42 1.42 0 00-1.9.645l-5.027 10.242L2.14 13.277c-.31.044-.593.191-.81.414a1.43 1.43 0 00.026 2.016l8.137 7.972L7.57 34.936a1.429 1.429 0 00.563 1.393 1.41 1.41 0 001.493.107l10.058-5.315 10.059 5.315a1.4 1.4 0 00.899.142 1.421 1.421 0 001.156-1.642l-1.923-11.257 8.137-7.972c.221-.218.367-.503.412-.815.12-.778-.421-1.5-1.196-1.615z'
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className='px-6 pb-4'>
            <div className='mt-3 text-xs font-semibold uppercase tracking-wide text-indigo-500'>
              {big && 'Dog Tips'}
            </div>
            <a
              href='/guide'
              className='mt-0.5 block text-base font-medium leading-tight text-white hover:underline'
            >
              {title}
            </a>
            {big ? (
              <p className='mt-0.5 text-xs text-white'>
                Feeding dogs require techniques! If you don&apos;t want your dog
                ...
              </p>
            ) : (
              <p className='mt-0.5 text-xs text-stone-200'>{time}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
