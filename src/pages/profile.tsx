import Nav from "@/components/nav"
import Next from "@/components/next"
import Link from "next/link"

export default function Profile() {
    return(
        <>
        <div >
            <Nav active='profile'/>
            <h3 className="py-6 px-4 bg-orange text-white"> Tell Us About You</h3>
            <h1 className="text-[280px] text-stone-300 text-center py-[140px]">01</h1>
            <h2 className=" px-8 text-2xl">Do you own a dog or planing for one?</h2>
            <div className="flex flex-col justify-center gap-2 m-10">
                <div className="px-10 py-3 bg-orange rounded-xl text-center text-white text-lg">Yes</div>
                <div className="px-10 py-3 bg-orange rounded-xl text-center text-white text-lg">No</div>
            </div>
            <Link href='/'>
            <div className="absolute right-10">
            <Next></Next>
            </div>
            </Link>
        </div>
        </>
    )
}