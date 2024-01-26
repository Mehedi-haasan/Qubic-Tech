import React, { useEffect, useState } from 'react'

const Work = () => {
  const [data, setData]=useState([]);
  const [loading, setLoading]=useState(false)

  const fetchData = async()=>{
    const response = await fetch(`http://localhost:8050/api/get/work`)
    const data = await response.json()
    setData(data.items);
    if(data.items.length > 0){
      setLoading(true)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  const array = [5,7,6,6,4,4,4,7,5,4,4,4]

  return (
    <div className='bg-[#22262A] py-5 ml-5 md:ml-0'>
      <div className='w-full md:w-[90%] lg:w-[70%] mx-auto py-10'>
      <h5 className='text-white  text-[#36D399]'>EXAMPLES OF OUR WORK</h5>
      <h1 className='text-white text-5xl  py-1'>Every <span className='text-[#36D399]'>Great Design</span> Begins<br/>With A Great Story.</h1>
      <button className='btn btn-success font-bold mb-[40px] mt-[40px]'>View All Work</button>
      </div>

      {
        loading ? <div className='grid grid-cols-12 w-full md:w-[90%] lg:w-[70%] mx-auto py-4 gap-4'>
        {
          data.map((data)=>{
            return  <div className={`grid col-span-12 lg:col-span-${array[data.id-1]}`}>
            <img className='w-full rounded-xl h-72 p-2' src={data.image_url} alt='jhbdsg'/>
          </div>
          })
        }
      </div> : <span></span>
      }
      
    </div>
  )
}

export default Work
