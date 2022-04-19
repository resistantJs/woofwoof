import Link from "next/link";

export default function X() {

  return (
      <Link href='/'>
    <div className='absolute top-5 left-5 grid h-12 w-12 place-items-center justify-items-center rounded-xl bg-orange'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='none'
        viewBox='0 0 20 20'
      >
        <path
          fill='#fff'
          d='M12.897 9.784l6.026-6.026A2.201 2.201 0 0015.81.645L9.784 6.67 3.758.645A2.201 2.201 0 10.645 3.758L6.67 9.784.645 15.81a2.201 2.201 0 003.113 3.113l6.026-6.026 6.026 6.026c.43.43.993.645 1.556.645a2.201 2.201 0 001.556-3.758l-6.025-6.026z'
        ></path>
      </svg>
    </div>
    </Link>
  );
}
