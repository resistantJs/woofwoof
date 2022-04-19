
export default function Dots({position}: {position:String}) {
  return (
    <>
        <div className={`rounded-full w-5 h-5 bg-orange border-1 border-orange border-opacity-80 absolute ${position}`}>

        </div>
    </>
  );   
}
