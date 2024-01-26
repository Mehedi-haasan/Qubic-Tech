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
    <div > 
    <h1>Hello</h1>
    </div>
  );
};

export default Contact;
