import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8050/api/get/progres`);
    const data = await response.json();
    setData(data.items);
    if(data.items.length > 0){
      setLoading(true)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const data =[
  //   {
  //     percent:90,
  //     name:"WEB DEVELOPMENT"
  //   },
  //   {
  //     percent:80,
  //     name:"DIGITAL MARKETING"
  //   },
  //   {
  //     percent:75,
  //     name:"GAME DEVELOPMENT"
  //   },
  //   {
  //     percent:95,
  //     name:"APP DEVELOPMENT"
  //   },
  // ]

  return (
    <div>
      {
        loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-5 bg-[#22262A] p-4 md:px-10">
        {data.map(({ percent, name }) => {
          return <SkillCard percent={percent} name={name} />;
        })}
      </div> :<span></span>
      }
    </div>
  );
};

export default Skills;
