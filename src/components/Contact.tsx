import React from 'react';
import { LiaUserGraduateSolid as UserIcon } from "react-icons/lia";
import { MdOutlineMail as EmailIcon } from "react-icons/md";
import { FaBookBookmark as BookIcon } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RiMessage2Line as MessageIcon } from "react-icons/ri";
import BlobButton from './ui/BlobButton';

const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row  md:mt-0 mt-10 md:gap-0 gap-10 md:absolute md:bottom-[-10rem] bg-white mb-12 shadow-lg  md:p-0 h-auto md:h-[221px] items-center'>
            <div className='md:w-[400px] md:px-[60px] flex flex-col gap-2 md:p-0 p-4'>
                <h6 className='uppercase text-[#FF1E1F] font-semibold text-[.9rem]'>Contact Us</h6>
                <h3 className='text-[#181818] text-[2rem] md:text-[2rem] font-extrabold z-20 '>Find Your Course</h3>
                <p className='leading-[1.7]'>Find out our next available admission programs and new members</p>
            </div>
            <div className='w-full md:w-[800px] md:px-[60px] flex flex-col md:gap-4 gap-2  py-4 '>
                <div className='flex translate-x-[-8px] md:translate-x-0 md:items-center md:justify-between md:flex-row flex-col md:gap-0 gap-2'>
                    <div className='flex items-center'>
                        <div className='translate-x-8'>
                            <UserIcon size={18} color='#FF1E1F' />
                        </div>

                        <Input type="text" placeholder="Your Name" className='pl-10' />
                    </div>
                    <div className='flex items-center'>
                        <div className='translate-x-8'>
                            <EmailIcon size={18} color='#FF1E1F' />
                        </div>

                        <Input type="email" placeholder="Your E-mail" className='pl-10' />
                    </div>
                    <div className='flex md:items-center ml-4'>
                        <Select>
                            <SelectTrigger className="md:w-[200px] w-full">
                                <div className='flex items-center gap-3 md:translate-x-0 translate-x-1'>
                                <BookIcon size={18} color='#FF1E1F' />
                                <SelectValue placeholder="Select a language" />
                                </div>
            
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Languages</SelectLabel>
                                    <SelectItem value="english">English</SelectItem>
                                    <SelectItem value="spanish">Spanish</SelectItem>
                                    <SelectItem value="french">French</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='flex md:items-center w-full gap-4 md:flex-row flex-col md:px-0 '>
                    <div className='flex items-center flex-1 translate-x-[-8px] md:translate-x-0 '>
                        <div className='translate-x-8'>
                            <MessageIcon size={18} color='#FF1E1F' />
                        </div>

                        <Input type="text" placeholder="Your Message" className='pl-10' />
                    </div>
                    <div className=' translate-x-[8px] md:translate-x-0 md:mt-0 mt-6'>
                        <BlobButton size='sm' variant='default' color='#FF1E1F'>START NOW</BlobButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
