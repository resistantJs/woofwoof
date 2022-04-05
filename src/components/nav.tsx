import Link from 'next/link';

//{const page = windows.location.pathname}
export default function Nav(
  {active}:
  {active : any}
) {

  return (
    <>
      
      <section className='fixed bottom-0 left-0 right-0 flex w-full  justify-around  text-lg bg-white text-stone-400'>
        <Link href='/'>
          <div className={`bg-white px-6 py-3 text-center text-xs ${active==='map' && 'text-orange'}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='none'
              viewBox='0 0 25 35'
            >
              <path
                fill={active==='map' ? '#FF764A' : '#C2C2C2'}
                d='M12.5 0C7.262 0 3 3.943 3 8.79c0 1.637.49 3.234 1.418 4.62l7.541 11.244a.808.808 0 00.673.346h.006a.806.806 0 00.673-.356l3.066-4.736a.924.924 0 00-1.515-1.057L12.5 22 6 12.639c-.772-1.154-1-2.722-1-4.086C5 4.514 8.135 2 12.5 2S20 4.514 20 8.553c0 1.324-.27 2.957-1 4.086l-1.742 2.643a.887.887 0 101.486.97l1.916-2.96A8.287 8.287 0 0022 8.789C22 3.943 17.738 0 12.5 0z'
              ></path>
              <path
                fill={active==='map' ? '#FF764A' : '#C2C2C2'}
                fillRule='evenodd'
                d='M12.5 5.5c-2.522 0-4 1.513-4 4.053 0 2.523 1.444 4.086 4 4.086 2.587 0 4.284-1.591 4.284-4.086 0-2.54-1.762-4.053-4.284-4.053zm.138 6.5C10.948 12 10 11.25 10 9.553 10 7.86 10.819 7 12.5 7s2.5.86 2.5 2.553C15 11.225 14.355 12 12.638 12z'
                clipRule='evenodd'
              ></path>
            </svg>
            Map
          </div>
        </Link>
        <Link href='/explore'>
          <div className={`bg-white px-6 py-3 text-center text-xs ${active==='explore' && 'text-orange'}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='none'
              viewBox='0 0 25 35'
            >
              <path
                fill={active==='explore' ? '#FF764A' : '#C2C2C2'}
                d='M12.5 24C18.851 24 24 18.851 24 12.5c0-.922-.108-1.818-.313-2.677-.114-.48-.347-1.089-1.187-.823-1 .316-.726.816-.636 1.21.16.705.34 1.537.34 2.29 0 5.458-4.246 9.5-9.704 9.5S3 17.958 3 12.5 7.042 3 12.5 3c3.465 0 6.236 1.301 8 4 .235.36.649.839 1.364.5.42-.199.59-.783.34-1.175A11.491 11.491 0 0012.5 1C6.149 1 1 6.149 1 12.5S6.149 24 12.5 24z'
              ></path>
              <path
                fill={active==='explore' ? '#FF764A' : '#C2C2C2'}
                fillRule='evenodd'
                d='M18.476 7.879l-3.429 6.728c-.05.1-.113.202-.215.25L7.854 18.13c-.774.364-1.57-.459-1.182-1.221l3.506-6.88c.007-.02.045-.067.139-.098l6.977-3.274c.774-.364 1.57.459 1.182 1.22zm-2.442 1.953l-2.03 3.896a.151.151 0 01-.041.052.302.302 0 01-.055.034l-4.073 1.868c-.452.208-.916-.261-.69-.697l2.046-3.926c.005-.01.027-.038.081-.055l4.072-1.869c.453-.207.917.262.69.697z'
                clipRule='evenodd'
              ></path>
            </svg>
            Explore
          </div>
        </Link>
        <Link href='/message'>
          <div className={`bg-white px-6 py-3 text-center text-xs ${active==='message' && 'text-orange'}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='none'
              viewBox='0 0 17 35'
            >
              <path
                fill={active==='message' ? '#FF764A' : '#C2C2C2'}
                d='M3.615 4.694A1 1 0 102.334 6.23l1.281-1.536zM22.666 6.23a1 1 0 10-1.281-1.536l1.281 1.536zM7.677 9.388l-.64.768.01.008.63-.776zm9.646 0l.63.776.01-.008-.64-.768zM4.953 20.999l-.41.913.41-.913zm-2.96-3.009l.917-.398-.917.398zm21.014 0l-.917-.398.917.398zM20.047 21l.41.912-.41-.913zm0-17l.41-.912-.41.913zm2.96 3.01l-.917.398.917-.398zM4.953 4l-.41-.912.41.913zm-2.96 3.01l.917.398-.917-.398zm.34-.78l4.703 3.925L8.318 8.62 3.615 4.694 2.334 6.23zm15.63 3.925l4.703-3.925-1.281-1.536-4.703 3.926 1.281 1.536zm-10.917.009a8.622 8.622 0 0010.907 0l-1.261-1.552a6.623 6.623 0 01-8.384 0l-1.262 1.552zM10.354 4.5h4.292v-2h-4.292v2zm4.292 16h-4.292v2h4.292v-2zm-4.292 0c-1.443 0-2.471 0-3.28-.06-.798-.059-1.304-.17-1.712-.353l-.818 1.825c.708.318 1.475.456 2.384.523.898.066 2.012.065 3.426.065v-2zM.5 12.5c0 1.437 0 2.568.064 3.479.065.92.201 1.694.511 2.41l1.835-.797c-.182-.42-.293-.94-.35-1.755-.06-.824-.06-1.871-.06-3.337h-2zm4.862 7.587a4.839 4.839 0 01-2.452-2.495l-1.835.796a6.839 6.839 0 003.469 3.523l.818-1.824zM22.5 12.5c0 1.466 0 2.513-.06 3.337-.057.815-.168 1.335-.35 1.755l1.835.796c.31-.715.445-1.488.51-2.41.066-.91.065-2.04.065-3.478h-2zm-7.854 10c1.414 0 2.527 0 3.426-.065.909-.067 1.676-.205 2.384-.523l-.818-1.825c-.408.183-.914.294-1.712.353-.809.06-1.837.06-3.28.06v2zm7.444-4.908a4.839 4.839 0 01-2.452 2.495l.818 1.825a6.839 6.839 0 003.469-3.524l-1.835-.796zM14.646 4.5c1.443 0 2.471 0 3.28.06.798.059 1.304.17 1.712.353l.818-1.825c-.708-.317-1.475-.456-2.384-.523-.898-.066-2.012-.065-3.426-.065v2zm9.854 8c0-1.437 0-2.568-.064-3.479-.066-.92-.201-1.694-.511-2.41l-1.835.797c.182.42.293.94.35 1.755.06.824.06 1.871.06 3.337h2zm-4.862-7.587a4.839 4.839 0 012.452 2.495l1.835-.796a6.84 6.84 0 00-3.469-3.524l-.818 1.825zM10.354 2.5c-1.414 0-2.528 0-3.426.065-.909.067-1.676.206-2.384.523l.818 1.825c.408-.183.914-.295 1.712-.353.809-.06 1.837-.06 3.28-.06v-2zM2.5 12.5c0-1.466 0-2.513.06-3.337.057-.815.168-1.335.35-1.755l-1.835-.796C.765 7.327.63 8.1.565 9.022.498 9.931.5 11.061.5 12.5h2zm2.044-9.412a6.839 6.839 0 00-3.469 3.524l1.835.796a4.839 4.839 0 012.452-2.495l-.818-1.825z'
              ></path>
            </svg>
            Message
          </div>
        </Link>
        <Link href='/profile'>
          <div className={`bg-white px-6 py-3 text-center text-xs ${active==='profile' && 'text-orange'}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='none'
              viewBox='0 0 25 35'
            >
              <path
                fill={active==='profile' ? '#FF764A' : '#C2C2C2'}
                d='M23.942 20.708a.898.898 0 10-1.76.367.939.939 0 01-.19.786.913.913 0 01-.718.342H3.726a.913.913 0 01-.718-.342.938.938 0 01-.19-.787c.932-4.478 4.882-7.75 9.444-7.86a6.276 6.276 0 00.477 0 9.884 9.884 0 017.982 4.387.898.898 0 001.493-1A11.686 11.686 0 0016.158 12a6.104 6.104 0 002.451-4.89C18.61 3.74 15.87 1 12.5 1a6.116 6.116 0 00-6.11 6.11c0 1.999.966 3.777 2.455 4.892a11.673 11.673 0 00-3.765 2.07 11.721 11.721 0 00-4.022 6.636A2.728 2.728 0 003.726 24h17.547c.824 0 1.594-.366 2.113-1.005a2.728 2.728 0 00.556-2.287zM8.187 7.11A4.317 4.317 0 0112.5 2.797a4.317 4.317 0 014.313 4.312 4.318 4.318 0 01-4.095 4.307 11.333 11.333 0 00-.435 0A4.318 4.318 0 018.187 7.11z'
              ></path>
            </svg>
            Profile
          </div>
        </Link>
      </section>
    </>
  );
}
