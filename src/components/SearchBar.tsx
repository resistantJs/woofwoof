export default function SearchBar() {
  const filters = ['Shops', 'Active Friends', 'Dog Parks', 'Pet Shops','Veterinary Clinics'];
  return (
    <>
      <section className='fixed top-0 left-0 right-0  w-full  justify-around   text-lg'>
        <form className='w-full bg-orange px-4 py-5'>
          <label className=' relative left-0 flex'>
            <input
              className='mt-1 block w-full rounded-2xl border border-slate-300 bg-white px-10 py-3 text-sm placeholder-slate-400 shadow-sm
focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500'
              type='text'
              name='Search'
            />
            <div className='absolute right-3 self-center pt-1'>
              <svg
                width='23'
                height='23'
                viewBox='0 0 23 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.625 14.5263C13.6704 14.5263 15.3091 12.9042 15.3091 10.8947L15.3214 3.63158C15.3214 1.62211 13.6704 0 11.625 0C9.57964 0 7.92857 1.62211 7.92857 3.63158V10.8947C7.92857 12.9042 9.57964 14.5263 11.625 14.5263ZM10.1464 3.51053C10.1464 2.71158 10.8118 2.05789 11.625 2.05789C12.4382 2.05789 13.1036 2.71158 13.1036 3.51053L13.0912 11.0158C13.0912 11.8147 12.4382 12.4684 11.625 12.4684C10.8118 12.4684 10.1464 11.8147 10.1464 11.0158V3.51053ZM19.2027 10.8947C18.6243 10.8947 18.1654 11.3675 18.0665 11.9374C17.5346 15.0036 14.6899 17.0684 11.625 17.0684C8.56013 17.0684 5.71544 15.0036 5.18346 11.9374C5.08458 11.3675 4.62574 10.8947 4.04732 10.8947V10.8947C3.4689 10.8947 2.9925 11.3662 3.07219 11.9391C3.49553 14.9828 5.73634 17.5058 8.61324 18.5732C9.60421 18.9408 10.3929 19.8128 10.3929 20.8698V21.7679C10.3929 22.4483 10.9445 23 11.625 23V23C12.3055 23 12.8571 22.4484 12.8571 21.7679V20.8728C12.8571 19.8149 13.6482 18.9429 14.6406 18.5764C17.5165 17.5143 19.756 14.9904 20.1782 11.9392C20.2575 11.3662 19.7811 10.8947 19.2027 10.8947V10.8947Z'
                  fill='#2D384C'
                />
              </svg>
            </div>
            <div className=' absolute left-3 self-center pt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23'
                height='23'
                fill='none'
                viewBox='0 0 23 23'
              >
                <path
                  fill='#333'
                  fillRule='evenodd'
                  d='M18.702 16.745L22 20.02 20.006 22l-3.319-3.296C12.511 21.737 6.685 21.05 3.34 17.13a9.747 9.747 0 01.625-13.334C7.66.202 13.526.055 17.4 3.46a9.748 9.748 0 011.301 13.286zM10.846 3.807c-3.891 0-7.046 3.132-7.046 6.997 0 3.864 3.155 6.997 7.046 6.997 3.892 0 7.046-3.132 7.046-6.997 0-3.865-3.154-6.997-7.046-6.997z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
          </label>
        </form>
        <div className=' mt-2 flex gap-2 overflow-x-auto whitespace-nowrap px-2 text-xs'>
          {filters.map((filter, i) => (
            <div
              key={i}
              className={`rounded-full border-2 border-orange  px-3 py-2 ${i == 0 && ' text-white bg-orange' }`}
            >
              {filter}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
