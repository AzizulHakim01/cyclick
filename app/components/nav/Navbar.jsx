"use client"
import { IoMdBicycle } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link"

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='w-full py-4'>
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-10">
                <p className="flex items-center text-4xl font-bold text-zinc-600"><IoMdBicycle className="text-5xl"/>Cyclic</p>
                <div className="flex items-center gap-4 text-gray-500 dark:text-white">
                    <Link href="/" className={`${pathname ==="/new"?"font-semibold":""}`}>Home</Link>
                    <Link href="/new" className={`${pathname ==="/new"?"font-semibold":""}`}>New</Link>
                    <Link href="/price" className={`${pathname ==="/price"?"font-semibold":""}`}>Price</Link>
                    <Link href="/service" className={`${pathname ==="/service"?"font-semibold":""}`}>Service</Link>
                    <Link href="/contact" className={`${pathname ==="/contact"?"font-semibold":""}`}>Contact</Link>
                </div>
                <div className="">
                    <div className="flex items-center gap-2 text-xl text-gray-600 dark:text-white">
                        <button><BsFillMicFill /></button>
                        <button><FiSearch  /></button>
                        <button className="bg-white p-2 rounded-full shadow-lg"><IoExitOutline /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar