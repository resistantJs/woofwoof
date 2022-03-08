import Link from 'next/link'


export default function Nav( ) {
    return (
        <>
            
            <section className = 'fixed bottom-0 left-0 right-0 text-lg w-full  bg-gray-400 flex justify-around'>
                <Link href="/map"><div className = 'p-6 bg-white text-xs text-center'><svg
      xmlns="http://www.w3.org/2000/svg"
      width='40'
      height='40'
      fill="none"
      viewBox="0 0 25 35"
    >
      <path
        fill="#C2C2C2"
        d="M12.5 0C7.262 0 3 3.943 3 8.79c0 1.637.49 3.234 1.418 4.62l7.541 11.244a.808.808 0 00.673.346h.006a.806.806 0 00.673-.356l3.066-4.736a.924.924 0 00-1.515-1.057L12.5 22 6 12.639c-.772-1.154-1-2.722-1-4.086C5 4.514 8.135 2 12.5 2S20 4.514 20 8.553c0 1.324-.27 2.957-1 4.086l-1.742 2.643a.887.887 0 101.486.97l1.916-2.96A8.287 8.287 0 0022 8.789C22 3.943 17.738 0 12.5 0z"
      ></path>
      <path
        fill="#C2C2C2"
        fillRule="evenodd"
        d="M12.5 5.5c-2.522 0-4 1.513-4 4.053 0 2.523 1.444 4.086 4 4.086 2.587 0 4.284-1.591 4.284-4.086 0-2.54-1.762-4.053-4.284-4.053zm.138 6.5C10.948 12 10 11.25 10 9.553 10 7.86 10.819 7 12.5 7s2.5.86 2.5 2.553C15 11.225 14.355 12 12.638 12z"
        clipRule="evenodd"
      ></path>
    </svg>Jason</div>
    </Link>
                <div className = 'p-6 bg-white text-xs text-center'>    <svg
      xmlns="http://www.w3.org/2000/svg"
      width='40'
      height='40'
      fill="none"
      viewBox="0 0 25 35"
    >
      <path
        fill="#C2C2C2"
        d="M12.5 24C18.851 24 24 18.851 24 12.5c0-.922-.108-1.818-.313-2.677-.114-.48-.347-1.089-1.187-.823-1 .316-.726.816-.636 1.21.16.705.34 1.537.34 2.29 0 5.458-4.246 9.5-9.704 9.5S3 17.958 3 12.5 7.042 3 12.5 3c3.465 0 6.236 1.301 8 4 .235.36.649.839 1.364.5.42-.199.59-.783.34-1.175A11.491 11.491 0 0012.5 1C6.149 1 1 6.149 1 12.5S6.149 24 12.5 24z"
      ></path>
      <path
        fill="#C2C2C2"
        fillRule="evenodd"
        d="M18.476 7.879l-3.429 6.728c-.05.1-.113.202-.215.25L7.854 18.13c-.774.364-1.57-.459-1.182-1.221l3.506-6.88c.007-.02.045-.067.139-.098l6.977-3.274c.774-.364 1.57.459 1.182 1.22zm-2.442 1.953l-2.03 3.896a.151.151 0 01-.041.052.302.302 0 01-.055.034l-4.073 1.868c-.452.208-.916-.261-.69-.697l2.046-3.926c.005-.01.027-.038.081-.055l4.072-1.869c.453-.207.917.262.69.697z"
        clipRule="evenodd"
      ></path>
    </svg>Explore</div>
                <button className = 'p-6 bg-white text-xs text-center'>Mes</button>
                <button className = 'p-6 bg-white text-xs text-center'>Pro</button>
                
            </section>
        </>
    )
}
