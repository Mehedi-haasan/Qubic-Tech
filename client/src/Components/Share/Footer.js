import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8050/api/get/progres`);
    const data = await response.json();
    setData(data.items);
    if (data.items.length > 0) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="hero-one">
      <div className="hero-one grid grid-cols-1 md:grid-cols-4 w-full md:w-[90%] lg:w-[75%] mx-auto">
        <div className="ml-5">
          <h1 className="flex my-3">
            <img
              src="https://qubictech.co/wp-content/uploads/2021/04/Logo_Qubic_blanc.png"
              alt="hqubic"
              className="h-[60px] md:h-[80px] lg:h-[90px]"
            />
          </h1>
        </div>

        <div></div>
        <div></div>

        <div className="flex ml-5 lg:my-3 lg:ml-14">
          <div className="mt-3 py-2">
            <Icon
              icon="fluent:call-16-filled"
              width="50px"
              style={{ color: "#06D889" }}
            />
          </div>
          <div className="my-2 py-2">
            <p className="text-white text-lg">
              Call any time <br />{" "}
              <a
                href="tel:+123456789"
                className="text-[#b5b5b5] hover:text-[#06D889]"
              >
                +1 (234) 567-89
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:w-[90%] lg:w-[75%] gap-4 mx-auto">
        <div className="mb-6 pb-10 ml-5">
          <div className="flex py-3 mt-10">
            <Icon
              icon="zondicons:location"
              width="30px"
              style={{ color: "#06D889" }}
            />
            <h1 className="text-white text-2xl px-2">Address</h1>
          </div>
          <p className="text-[#b5b5b5] hover:text-[#06D889]">
            <a href="jkuds">
              168/170, Avenue 01, Old York <br />
              Drive Rich Mirpur DOHS,Bangladesh
            </a>{" "}
          </p>

          <div className="flex mt-10 py-2 ">
            <Icon
              icon="zondicons:location"
              width="30px"
              style={{ color: "#06D889" }}
            />
            <h1 className="text-white text-2xl px-2">Say Hello</h1>
          </div>
          <p className="text-[#b5b5b5]  hover:text-[#06D889]">
            <a href="mailto:qubictechltd@gmail.com">qubictechltd@gmail.com</a>
          </p>
          <p className="text-[#b5b5b5]  hover:text-[#06D889]">
            <a href="mailto:qubictechltd@gmail.com">qubictechltd@gmail.com</a>
          </p>

          <div className="mt-5 ">
            <h1 className="text-white text-xl py-2">See Our New updates</h1>
            <div className="flex">
              <input type="email" placeholder="Email here..." className="p-2" />
              <button className="bg-[#06D889] text-white px-7">
                <Icon icon="maki:arrow" width="27px" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-[#b5b5b5] ml-14 ">
          <h1 className=" text-2xl text-white pt-10">Our Solutions</h1>
          <br />
          <a href="dvb" className="hover:text-[#06D889]">
            Web Development
          </a>
          <br />
          <br />
          <a href="jiuds" className="hover:text-[#06D889]">
            Mobile Development
          </a>
          <br />
          <br />
          <a href="lknv" className="hover:text-[#06D889]">
            Cloud Services
          </a>
          <br />
          <br />
          <a href="ofv" className="hover:text-[#06D889]">
            Network Connectivity
          </a>
          <br />
          <br />
          <a href="lkjvfd" className="hover:text-[#06D889]">
            Data analytics
          </a>
          <br />
          <br />
          <a href="ijhv" className="hover:text-[#06D889]">
            Software Development
          </a>
          <br />
          <br />
        </div>

        <div className="text-[#b5b5b5] ml-14 ">
          <h1 className=" text-2xl text-white pt-10 ">Company</h1>
          <br />
          <a href="dvb" className="hover:text-[#06D889]">
            About Us
          </a>
          <br />
          <br />
          <a href="jiuds" className="hover:text-[#06D889]">
            Case Study
          </a>
          <br />
          <br />
          <a href="lknv" className="hover:text-[#06D889]">
            News & Article
          </a>
          <br />
          <br />
          <a href="ofv" className="hover:text-[#06D889]">
            Our Team
          </a>
          <br />
          <br />
          <a href="lkjvfd" className="hover:text-[#06D889]">
            All Portfolio
          </a>
          <br />
          <br />
          <a href="ijhv" className="hover:text-[#06D889]">
            Pricing Plan
          </a>
          <br />
          <br />
        </div>

        <div className="text-[#b5b5b5] ml-14">
          <h1 className=" text-2xl text-white pt-10">Resources</h1>
          <br />
          <a href="dvb" className="hover:text-[#06D889]">
            Support Area
          </a>
          <br />
          <br />
          <a href="jiuds" className="hover:text-[#06D889]">
            Support Policy
          </a>
          <br />
          <br />
          <a href="lknv" className="hover:text-[#06D889]">
            Terms & Conditions
          </a>
          <br />
          <br />
          <a href="ofv" className="hover:text-[#06D889]">
            Privacy Policy
          </a>
          <br />
          <br />
          <a href="lkjvfd" className="hover:text-[#06D889]">
            Career
          </a>
          <br />
          <br />
          <a href="ijhv" className="hover:text-[#06D889]">
            Pricing Plan
          </a>
          <br />
          <br />
        </div>
      </div>
      <hr />
      <div className=" w-full md:w-[90%] lg:w-[70%] gap-4 mx-auto">
        <div>
          <h1 className="py-8 text-white text-center">
            ©Copyright 2023 QubicTech | Design By QubicTech
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
