import aboutImg from "../../assets/images/about_01.jpg";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img
                src={aboutImg}
                alt="About Us"
                className="w-[470px] h-[470px] rounded-lg"
              />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img
                  src={aboutCardImg}
                  alt="About Card"
                  className="rounded-full"
                />
              </div>
            </div>
            {/* === About Content */}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">
                Dedicated to Delivering Quality Healthcare Services
              </h2>
              <p className="text__para">
                At our medical facility, we take pride in offering top-notch
                healthcare services with compassion and expertise. Our goal is
                to ensure every patient receives personalized care, tailored to
                their specific needs.
              </p>
              <p className="text__para mt-[30px]">
                With a team of experienced professionals and cutting-edge
                technology, we are committed to improving lives and promoting
                well-being. From preventive care to advanced treatments, we are
                here to support you every step of the way.
              </p>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
