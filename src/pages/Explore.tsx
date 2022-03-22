import BigBanner from "@/components/BigBanner"
import Nav from "@/components/nav"
export default function Explore() {
    return(
        <>
            <div className="bg-orange py-20">
            </div>
            <BigBanner imgHeight={'10rem'} featured={true} img='/images/BigBanner.jpg'/>
            <BigBanner imgHeight={'6rem'} img='/images/BigBanner.jpg'/>
            <Nav/>
        </>
    )
}