import React from 'react'
import { Icon } from "@iconify/react";
import image from '../Image/app-development.png'
import image1 from '../Image/analysis.png'
import image2 from '../Image/requirement.png'
import image3 from '../Image/testing (1).png'
import image4 from '../Image/monitoring.png'

import { NavLink } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <div className='bg-[#0F0F0F]'>
        <div className='w-[220px] mx-auto'>
        <NavLink to="/" className="btn btn-success font-bold px-8 mb-[40px] mt-[40px]">Go to Home</NavLink>
        </div>
        <div className='grid grid-cols-12 w-full md:w-[90%] lg:w-[70%] gap-8 mx-auto'>
            <div className='grid col-span-12 lg:col-span-6 text-white ml-5 md:ml-0'>
                <h1 className='text-2xl lg:text-5xl font-bold mt-10'>Digital Marketing</h1>
                <p className='py-4 text-[#b5b5b5]'>Maecenas euismod viverra purus, volutpat posuere mauris tristique quisokaft. Mauris facilisis consequat dolor, et luctus tortor imperdiet eget. Nulla europeai facilisi. Aliquam ac nisi sed enim ullamcorper condimentum. Creative Strategy Unique Production Rebranding Design Corporate Identity</p>
                <div className='grid grid-cols-12'>
                <div className='grid col-span-12 lg:col-span-6 text-white'>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Custom Software</h1>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Web Application</h1>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Mobile Application</h1>

                </div> 
                <div className='grid col-span-12 lg:col-span-6 text-white'>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Enterprise Software</h1>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Software Consulting</h1>
                    <h1 className='py-2 flex'><Icon icon="solar:star-bold" width="20px" className="mx-1 text-[#06D889]"/>Maintenance and Support</h1>
                </div>

                </div>
            </div>



            <div className='grid col-span-12 lg:col-span-6'>
                <img src='https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/about-service-img.png' alt='nfghdf' className='w-full h-96 my-10'/>

            </div>
        </div>

        <h1 className='text-white text-2xl lg:text-5xl font-bold text-center py-20'>How we Work</h1>

        <div className='grid grid-cols-10 w-full pb-20 md:w-[90%] lg:w-[85%] mx-auto text-white'>
            
            <div className='grid col-span-10 lg:col-span-2 '>
               <div className='bg-[#06D889] h-16 w-16 rounded-full ml-2 justify-center flex item-center text-white'>
               <img src={image2} alt='ihhd' className='h-10 w-10 p-auto  mt-3'/>
               </div>
                <h1 className='text-xl md:text-2xl p-3 font-semibold'>Requirements Gathering.</h1>
                <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
            </div>

            <div className='grid col-span-10 lg:col-span-2'>
              <div className='bg-[#06D889] h-16 w-16 rounded-full ml-2 justify-center flex item-center text-white'>
               <img src={image1} alt='ihhd' className='h-10 w-10 p-auto  mt-3'/>
               </div>
               <h1 className='text-xl md:text-2xl p-3 font-semibold'>Analysis And Planning.</h1>
               <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
            </div>

            <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full ml-2 justify-center flex item-center text-white'>
               <img src={image} alt='ihhd' className='h-10 w-10 p-auto  mt-3'/>
               </div>
               <h1 className='text-xl md:text-2xl p-3 font-semibold'>Design & Development.</h1>
               <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
            </div>

            <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full ml-2 justify-center flex item-center text-white'>
               <img src={image3} alt='ihhd' className='h-10 w-10 p-auto  mt-3'/>
               </div>
               <h1 className='text-xl md:text-2xl p-3 font-semibold'>Testing Device & Release.</h1>
               <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
            </div>

            <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full ml-2 justify-center ml-2 flex item-center text-white'>
               <img src={image4} alt='ihhd' className='h-10 w-10 p-auto  mt-2'/>
               </div>
               <h1 className='text-xl md:text-2xl p-3 font-semibold'>Maintenance And Support.</h1>
               <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
            </div>

        </div>
      
    </div>
  )
}

export default DigitalMarketing
