export default function SwitchButton({active}:{active:boolean}) {
  return (
    <>
      <div className='h-[59px] w-[140px] rounded-lg bg-orange bg-opacity-90 '>
        <div className='flex content-center justify-center gap-8 pt-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='25'
            fill='none'
            viewBox='0 0 22 25'
          >
            <path
              fill='#fff'
              d='M13.66 11.91a2.95 2.95 0 100-5.902 2.95 2.95 0 000 5.902zm0-11.21a8.261 8.261 0 018.26 8.26c0 6.195-8.26 15.34-8.26 15.34S5.4 15.155 5.4 8.96A8.26 8.26 0 0113.66.7zM3.04 8.96c0 5.31 5.995 12.579 7.08 13.936L8.94 24.3S.68 15.155.68 8.96c0-3.74 2.49-6.903 5.9-7.918A10.598 10.598 0 003.04 8.96z'
            ></path>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='29'
            height='26'
            fill='none'
            viewBox='0 0 29 18'
          >
            <path
              fill={!active ? '#545454' : '#6DF683'}
              d='M26.944.476H1.456C.674.476.04 1.11.04 1.892v14.16c0 .782.634 1.416 1.416 1.416h7.09a2.831 2.831 0 002.582-1.67l1.228-2.728c.349-.776 1.063-1.266 1.844-1.266.781 0 1.495.49 1.844 1.266l1.228 2.728a2.832 2.832 0 002.582 1.67h7.09c.782 0 1.416-.634 1.416-1.416V1.892c0-.782-.634-1.416-1.416-1.416zM7.12 11.096a2.832 2.832 0 110-5.664 2.832 2.832 0 010 5.664zm14.16 0a2.832 2.832 0 110-5.664 2.832 2.832 0 010 5.664z'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
