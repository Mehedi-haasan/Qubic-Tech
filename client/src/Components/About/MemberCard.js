import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MemberCard = ({ id, image_url, name, details }) => {
    return (
      <div className="bg-white w-[330px] rounded-xl mx-auto">
      <div key={id} className="bg-cover w-[280px] mx-auto px-4 py-2 bg-no-repeat bg-center mx-auto rounded-xl " >
         <img src={image_url} alt="kgusd" className="w-full mt-5 rounded-xl h-72"/>
        <div className="space-y-4 flex flex-col justify-center rounded-md items-center  duration-500 text-white text-center h-[70px] w-full">
          <div>
            <h1 className="md:text-2xl pt-2 text-black font-semibold text-xl">{name}</h1>
            <p className="text-xs text-black font-semibold md:text-sm">{details}</p>
          </div>
        </div>
      </div>

      </div>
    );
  };
  export default MemberCard;