import { FaMapMarkedAlt, FaRegCopyright } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Link from 'next/link'
import navLinks from "../data/navlinks";
import contactInfo from '../data/contactInfo'
const Footer = () => {
    const year = new Date().getFullYear().toString()
    // console.log(typeof year)
    return (
        <div className='bg-gradient-to-t from-gray-500 to-black w-full text-white'>
            <div className="section pb-5">
                <div className="flex flex-wrap justify-between ">
                    <div className="w-1/2 sm:w-3/5 md:w-1/3 pr-2">
                        <h3 className='text-3xl font-bold pb-5'>Next Blog</h3>
                        <p className='text-gray-300'>Thank you for visiting Next Blog </p>
                        <p className='text-gray-300'> I hope You find the information helpfull</p>
                        <p className='text-gray-300'> See You again.</p>
                    </div>
                    <div className="w-1/2 sm:w-2/5 md:w-1/4 lg:w-1/3 pl-20 xs:pl-6 md:pl-3 lg:pl-12 justify-start">
                        <h3 className=' text-2xl font-bold pb-4'>Quick Links</h3>
                        {navLinks.map(({ link, name, id }) => {
                            return (
                                <div key={id} className="group w-fit px-3">
                                    <Link href={link} >
                                        <div className="flex items-center justify-between w-fit gap-2 font-semibold text-white cursor-pointer">
                                            <BsFillArrowRightCircleFill sixe={20} className="group-hover:text-cyan-500 duration-500" />
                                            <span className='bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 group-hover:text-transparent duration-500 '>
                                                {name}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-5/12 lg:w-1/3 md:pl-4 lg:pl-0">
                        <h3 className='text-2xl font-bold'>Contact Info</h3>
                        <div className="flex flex-col sm:flex-row md:flex-col py-3 gap-5 md:gap-10 justify-between">
                            <div className='text-[0.9rem] font-advanced'>
                                <p className='flex items-center gap-3 '>
                                    <HiOutlineMail className="text-red-500" size={18} /> vijaydhawal9001@gmail.com</p>
                                <p className='flex items-center gap-3 '> <FaMapMarkedAlt className="text-blue-500" size={18} />Udaipur, Rajasthan, India</p>
                            </div>
                            <ul className="flex items-center py-2  gap-3 lg:gap-4 justify-start ">
                                {contactInfo.map(({ id, contact, link, icon }) => {
                                    return (
                                        <li key={id} className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105`}>
                                            <a href={link} target="_blank" rel='noferrer'>
                                                {icon}
                                            </a>
                                            <div className="flex scale-0 group-hover:scale-100 transition ease-out duration-300  origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                                {contact}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section py-2 text-black font-advanced">
                <div className="">
                    <h4 className=' text-sm text-gray-300 flex justify-center items-center  '>
                        <span className="pr-1"> Copyright </span> <FaRegCopyright size={14} /> <span className="px-1">{year}</span> | All Rights Reserved</h4>
                </div>
            </div>
        </div >
    )
}

export default Footer
