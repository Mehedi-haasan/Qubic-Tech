import { useEffect, useState } from "react";



const SkillCard = ({percent,name}) => {
  const [count, setCount]=useState(0);
  const endValue=percent;
  const speed=10;

  const myStyle={
    background: `conic-gradient(#7d2ae8 ${count *3.6}deg, #ededed 0deg)`
  } 

useEffect(() => {

   setTimeout(() => {

     if(count === endValue){
       setCount(count)
     }
     else{
       setCount((count) => count + 1);
     }

   }, speed);

 }); 





  return (
        <div className="">
            <div className="flex w-full mx-auto items-center justify-center py-5 rounded-lg flex-col bg-[#FFF] gap-4">
                <div className="relative h-[200px] w-200px] bg-red-300 rounded-full p-[15px]" style={myStyle}>
                    <div className="bg-white relative rounded-full h-[170px] w-[170px]">
                      <span className='absolute m-[42%] text-2xl'>{count}%</span>
                    </div>
                </div>
            
                <span className='text-2xl'>{name}</span>
            </div>
        </div>
  );
};

export default SkillCard;
