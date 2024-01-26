import React, { useState } from "react";
import { Icon } from "@iconify/react";
// import WorkFlow from "./WorkFlow";

const Contact = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async() => {
    console.log(values);
      const response = await fetch(`http://localhost:8050/api/create/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      alert(data.message)
  };


  return (
    <div name="contact">
      <div className="contact-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] lg:w-[75%] mx-auto ">
          <div className="contact-first pl-4 py-10 my-10">
            <div className="mt-[20px]">
              <h5 className="potential">CONTACT WITH US</h5>
              <h6 className="text-white text-3xl mt-[10px]">
                LET’S WORK TOGETHER?
              </h6>
              <p className="contact-item-text">
                I have worls-class, flexible support via live chat, email and
                hone. I <br></br>guarantee that you’ll be able to have any issue
                resolved within 24 hours.
              </p>
              <div className="address mt-[20px] m flex ">
                <div className="ad-icon">
                  <Icon icon="zondicons:location" className="address-icon" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className="text-[#b5b5b5] hover:text-[#06D889]">
                    <a href="jkuds">
                      168/170, Avenue 01, Old York <br />
                      Drive Rich Mirpur DOHS,Bangladesh
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="phone mt-[20px] flex ">
                <div className="ad-icon">
                  <Icon icon="fluent:call-16-filled" className="address-icon" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className="text-[#b5b5b5] hover:text-[#06D889]">
                    <a href="tel:+123456789">+1 (234) 567-89</a>{" "}
                  </p>
                  <p className="text-[#b5b5b5] hover:text-[#06D889]">
                    <a href="tel:+123456789">+1 (234) 567-89</a>
                  </p>
                </div>
              </div>
              <div className="email mt-[20px] flex ">
                <div className="ad-icon">
                  <Icon icon="ic:round-email" className="address-icon" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className="text-[#b5b5b5] hover:text-[#06D889]">
                    <a href="mailto:qubictechltd@gmail.com">
                      qubictechltd@gmail.com
                    </a>
                  </p>
                  <p className="text-[#b5b5b5] hover:text-[#06D889]">
                    <a href="mailto:qubictechltd@gmail.com">
                      qubictechltd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="follow mt-[40px]">
              <h3 className="text-white font-bold text-2xl">Follow Us</h3>
              <h5 className="p-text">Follow us on Social Network</h5>
              <div className="social-network flex">
                <a href="igdyu">
                  <Icon icon="logos:facebook" className="social-i " />
                </a>
                <a href="ifhysd">
                  <Icon icon="logos:twitter" className="social-i" />
                </a>
                <a href="uhfyrf">
                  <Icon icon="skill-icons:instagram" className="social-i" />
                </a>
                <a href="lhfyf">
                  <Icon icon={"logos:whatsapp-icon"} className="social-i" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-second shadow-2xl py-10 my-10 mx-5">
            <div className="contact-form mt-[20px]">
              <h3 className="text-center text-white text-3xl py-10">
                Make a Free Consulting
              </h3>
              <hr />

              <div className="col-span-12 md:col-span-6 ml-3 md:ml-4">
                <h1 className="text-2xl lg:text-2xl ml-1 text-white italic my-3 ">
                  To get a free consultation please leave your questions.
                </h1>
                <div className="grid md:grid-cols-2">
                  <div className="">
                    <input
                      type="name"
                      className="border-[1px] w-[96%] p-2 bg-gray-100 my-1 rounded-lg"
                      placeholder="Full Name"
                      name="Fname"
                      onChange={(e) => {
                        setValues({ ...values, first_name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="">
                    <input
                      type="lname"
                      className="border-[1px] w-[96%] p-2 bg-gray-100 my-1 rounded-lg"
                      placeholder="Last name"
                      name="lname"
                      onChange={(e) => {
                        setValues({ ...values, last_name: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="name"
                    className="border-[1px] w-[96%] lg:w-[98%] p-2 bg-gray-100 my-1 rounded-lg"
                    placeholder="Company/Organization"
                    name="company"
                    onChange={(e) => {
                      setValues({ ...values, company: e.target.value });
                    }}
                  />
                </div>

                <div>
                  <input
                    type="name"
                    className="border-[1px] w-[96%] lg:w-[98%] p-2 bg-gray-100 my-1 rounded-lg"
                    placeholder="Email"
                    name="Email"
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    className="border-[1px] w-[96%] lg:w-[98%] p-2 bg-gray-100 my-1 rounded-lg"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => {
                      setValues({ ...values, phone: e.target.value });
                    }}
                  />
                </div>

                <div className="">
                  <textarea
                    type="text"
                    placeholder="Type Your Message"
                    className="border-[1px] w-[96%] md:w-[98%] h-[130px] bg-gray-100 p-2 my-2 rounded-lg"
                    name="Message"
                    onChange={(e) => {
                      setValues({ ...values, message: e.target.value });
                    }}
                  />
                  <h2 className="font-semibold italic text-white px-1">
                    We will get back to you within 24hrs.
                  </h2>

                  <button
                    className="btn btn-success px-14 font-bold mb-[40px] mt-[40px]"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <WorkFlow/> */}
    </div>
  );
};

export default Contact;
