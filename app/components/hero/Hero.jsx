import Link from "next/link"
import Image from "next/image"
const Hero = () => {
    return (
        <div className='w-full py-4 relative  h-full'>
            {/* Background compo.. */}
                <div className="-z-1 w-96 h-96 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-45 absolute -top-48 left-40" />
                <div className="-z-1 w-56 h-56 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-24 right-64" />
                <div className="-z-1 w-36 h-36 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-96 left-96" />
                <div className="-z-1 w-36 h-36 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-96 right-96" />
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="w-full h-full flex items-center gap-4">
                    <div className="h-full flex flex-col w-1/4 gap-5">
                        <h1 className="text-8xl font-bold z-10">Electric Bycycle</h1>
                        <p className="text-2xl z-10">Take a ride feel better Experience you can apply for free Trial</p>
                        <Link href="/" className="bg-[#1a1c28] text-white py-3 px-5 w-32 text-center rounded-lg opacity-90 hover:opacity-100 shadow-lg">Ride Now</Link>
                    </div>
                    <div className="w-2/4 flex justify-center relative">
                    {/* Image */}
                    <h1 className="absolute text-9xl -top-5 font-bold ">PHOENIX</h1>
                    <Image src="/images/4.png" alt="cycle" width={650} height={200} className="z-10"/>
                    </div>
                    <div className="w-1/4 flex flex-col gap-16">
                        {/* containers */}
                        <div className="hover:scale-110 transition-all bg-gradient-to-t from-[#8e8d95] to-[#e4e1f6 z-10 flex justify-center items-center h-60 w-60 shadow-xl rounded-xl">
                            <Image src="/images/1.png" className="" alt="cycle" width={200} height={100} />
                        </div>
                        <div className="hover:scale-110 transition-all bg-gradient-to-t from-[#8e8d95] to-[#e4e1f6 z-10 flex justify-center items-center h-60 w-60 shadow-xl rounded-xl">
                            <Image src="/images/3.png" className="" alt="cycle" width={200} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero