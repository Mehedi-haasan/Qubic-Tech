import React from "react";
import Slider from "react-slick";

const ClientReview = () => {
  const clients = [
    {
      name: "Abdul halim",
      image:
        "https://img.freepik.com/free-photo/pleased-hipster-male-adult-points-with-index-finger-upper-right-corner-dressed-stylish-clothes_273609-23572.jpg?w=1380&t=st=1688669735~exp=1688670335~hmac=0f2fc9eed3eeed19eb64b6edfaf3e2ea1d536bf2c6d1fcb8e2336b2de205e6fe",
      title:
        "You need someone that understands your needs, budget and desire to grow. We specialize in the needs of small businesses",
    },
    {
      name: "John Abraham",
      image:
        "https://img.freepik.com/free-photo/serious-pleasant-looking-hipster-with-afro-hairstyle_273609-17457.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
      title:
        "You need someone that understands your needs, budget and desire to grow. We specialize in the needs of small businesses",
    },
    {
      name: "Necola Mandana",
      image:
        "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
      title:
        "You need someone that understands your needs, budget and desire to grow. We specialize in the needs of small businesses",
    },
    {
      name: "Sheikh Shakil",
      image:
        "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
      title:
        "You need someone that understands your needs, budget and desire to grow. We specialize in the needs of small businesses",
    },
    {
      name: "Ashok Mredha",
      image:
        "https://img.freepik.com/premium-photo/portrait-businessman-grunge-style_743855-18797.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
      title:
        "You need someone that understands your needs, budget and desire to grow. We specialize in the needs of small businesses",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      //   {
      //     breakpoint: 300,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-center py-4 text-5xl font-bold">Client Reviews</h1>
      <Slider {...settings}>
        {clients.map((client) => (
          <div>
            <div className="h-[200px] w-[200px] rounded-full mx-auto">
              <img
                src={client.image}
                alt="image3"
                className="h-[160px] w-[160px] rounded-full"
              />
            </div>
            <div>
              <h2 className="text-center text-2xl font-semibold p-0">
                {client.name}
              </h2>
              <p className="text-center p-2">{client.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientReview;
