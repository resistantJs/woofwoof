import Nav from '@/components/nav';
export default function Message() {
  return (
    <>
      <div>
        <Nav active='message' />

        <div className='p-7 flex justify-between'>
          <h1 className=''>Messages</h1>
          <div className='self-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              fill='#000'
              fillRule='evenodd'
              d='M11 20a1 1 0 102 0v-7h7a1 1 0 100-2h-7V4a1 1 0 10-2 0v7H4a1 1 0 100 2h7v7z'
              clipRule='evenodd'
            ></path>
          </svg>
          </div>
        </div>


      </div>
    </>
  );
}
