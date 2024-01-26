// import "./../Components/Style/All.css"
import "../Style/All.css"
import { Icon } from "@iconify/react";

const Banner = () => {
  return (
    <div name='home'>
      <div className="hero hero-one text-white">
        <div className="container mx-auto hero-content grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-6xl font-bold text-text white hero-text-head">
              Set Your <span className="business">Business</span>
              <br />
              With Innovative Idea
            </h1>
            <p className="py-6 hero-text-p text-text white">
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla porttitor. oltorrent gongi Duis a orci nunc. Suspendisse
              ac convallis sapien, quis commodo libero. Donec nec duomoi luctus,
              pellentesque lacus sed, mollis going leo.
            </p>
            <button className="btn btn-success btn-sm text-text white font-bold">
              View All Work
            </button>
          </div>
          <div class="hero-img-div">
            <img
              className="hero-img-one"
              src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/home4-banner-image2.png"
              alt="jkhgk"
            />
            <img
              className="hero-img-two"
              src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/home4-banner-image1.png"
              alt="mfyuh"
            />
          </div>
        </div>
      </div>
      <div className="creative-design">
        <div className="hero">
          <div className="container mx-auto hero-content grid grid-cols-1 lg:grid-cols-2">
            <div className="creative-design-imgs">
              <img
                alt=""
                className="creative-design-img-one pt-[50px]"
                src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/about-image-01.png"
              ></img>
              <div className="creative-design-img-two">
                <img src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/about-image-02.png" alt="nvduy"/>
              </div>
            </div>
            <div>
              <h1 className="creative-design-text-one font-bold  pb-[30px]">
                CREATIVE VISION
              </h1>
              <h1 className="text-4xl font-bold text-white creative-design-head">
                Ensure Superlative <br />
                <span className="support">Support </span>
                With Technology.
              </h1>
              <p className="py-6 creative-text-p">
                Maecenas euismod viverra purus, volutpat posuere mauris
                tristique quisokaft. Mauris facilisis consequat dolor, et luctus
                tortor imperdiet eget. Nulla europeai venenatis libero. Proin
                nec nisi auctor, pulvinar massa at, eleifend nisl. Nullaga
                facilisi. Aliquam ac nisi sed enim ullamcorper condimentum.
                Proin nec nisi auctor, pulvinar massa at, eleifend nisl. Nullaga
                facilisi. Aliquam ac nisi sed enim ullamcorper condimentum.
                <br />
                Donec et tortor vel lacus placerat pellentesque id et mi. Aenean
                consequat and interdum tincidunt. Donec eget lorem non ligula
                sodales hendrerit. Donec utrot scelerisque urna. Aenean et
                feugiat massa. Donec eget lorem non ligula sodales hendrerit.
                Donec utrot scelerisque urna. Aenean et feugiat massa.
              </p>

              <button className="btn btn-success btn-sm text-white font-bold">
                ABOUT US MORE
              </button>
            </div>
          </div>
        </div>

        <div className="hero potentials">
          <div className="container mx-auto hero-content grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold text-white potential-text-head">
                Unlock The <span className="potential">Potential</span> Of{" "}
                <br />
                Your Business.
              </h1>
              <p className="py-6 potential-text-p">
                Maecenas euismod viverra purus, volutpat posuere mauris
                tristique quisokaft. Mauris facilisis consequat dolor, et luctus
                tortor imperdiet eget. Nulla europeai facilisi. Aliquam ac nisi
                sed enim ullamcorper condimentum. Creative Strategy Unique
                Production Rebranding Design Corporate Identity
              </p>
              <hr/>
              <div class="grid grid-cols-1 lg:grid-cols-2 mt-[10px]">
                <div className="items-design">
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Creative Strategy</span></h6>
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Unique Production</span></h6>
                </div>
                <div className="items-design">
                <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/> <span className="text-white ml-[5px]">Rebranding Design</span></h6>
                  <h6 className="flex"><Icon icon="solar:star-bold" width="20px" className="mx-1 mt-2 text-[#06D889]"/><span className="text-white ml-[5px]">Corporate Identity</span></h6>
                </div>

              </div>
            </div>
            <div class="design-img-div">
              <img
                className="design-img-one"
                src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/about-image-03.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Banner;
