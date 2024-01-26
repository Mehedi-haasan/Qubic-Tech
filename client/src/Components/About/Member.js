import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MemberCard from './MemberCard'

const Member = () => {
  const [data, setData]=useState([])

  const fetchData =async()=>{
    const response = await fetch(`http://localhost:8050/api/get/employee`)
    const data = await response.json();
    setData(data.items)
  }
  useEffect(()=>{
    fetchData()
  },[])

    // const members=[
    //     {
    //         id:1,
    //         image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
    //         name:"Mazharul Islam",
    //         details:"Founder,CTO",
    //     },
    //     {
    //         id:2,
    //         image:"https://img.freepik.com/free-photo/man-sits-desk-front-computer-screen-that-says-business-it_1340-37817.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
    //         name:"Robin Mahamud",
    //         details:"Co-Founder,CEO",
    //     },
    //     {
    //         id:3,
    //         image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
    //         name:"Sheikh Shakil",
    //         details:"Head of HR & Manager",
    //     },
    //     {
    //         id:4,
    //         image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-mug-coffee_1340-37805.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
    //         name:"Aashok Mredha",
    //         details:"Software Engineer",
    //     },
    //     {
    //         id:5,
    //         image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
    //         name:"Habibur Rahman",
    //         details:"Backend Developer",
    //     },
    //     {
    //         id:6,
    //         image:"https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-3/team-01.png",
    //         name:"Mehedi hasan",
    //         details:"Frontend Developer",
    //     },

    // ]

    var settings1 = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
    <div className='bg-[#22262A] py-20'>
    <div className='w-full md:w-[90%] lg:w-[65%] mx-auto'>
        <h1 className='text-center text-[#36D399]'>EXPERTS & TALENTED STAFF</h1>
        <h1 className='text-white text-3xl lg:text-5xl py-5 text-center'>We Have <span className='text-[#36D399]'>Top Class Expertise</span><br/> For Creative Service</h1>
        <Slider {...settings1}>
          {data.map(({ id, name, details, image_url }) => (
              <div key={id} className="scale-95">
                <MemberCard name={name} details={details} image_url={image_url} />
              </div>
            ))}
        </Slider>
        
      
    </div>
    </div>
  )
}

export default Member
