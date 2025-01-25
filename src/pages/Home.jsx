import { Link, NavLink } from "react-router-dom";
import heroImg1 from "../assets/images/doctor_01.jpg";
import heroImg2 from "../assets/images/doctor_02.jpg";
import heroImg3 from "../assets/images/doctor_03.jpg";
import icon1 from "../assets/images/icon_01.png";
import icon2 from "../assets/images/icon_02.png";
import icon3 from "../assets/images/icon_03.jpg";
import { BsArrowRight } from "react-icons/bs";
import { About } from "../components/About/About";
function Home() {
  return (
    <>
      {/* hero section start */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[90px] justify-between items-center">
            {/* === hero content === */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] 
              md:text-[60px] md:leading-[70px]"
                >
                  We help patients to live a healthy , longer life
                </h1>
                <p className="text__para">
                  At our facility, we prioritize your health and well-being by
                  providing exceptional care and personalized medical services.
                  Our dedicated team of doctors and specialists work tirelessly
                  to ensure you receive the best treatment, tailored to your
                  unique needs. Whether you’re managing a chronic condition,
                  seeking preventive care, or in need of expert medical advice,
                  we are here to guide you every step of the way. Together,
                  let’s make your journey toward a healthier and longer life as
                  smooth and stress-free as possible.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* === hero counter === */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* === hero content === */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-[370px] h-[524px] rounded-lg"
                  src={heroImg1}
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg2}
                  alt=""
                  className="w-[270px] h-[270px] mb-[30px] rounded-lg"
                />
                <img
                  src={heroImg3}
                  alt=""
                  className="w-[270px] h-[270px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section End */}

      <section>
        <div className="container mx-auto ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best Medical Services
            </h2>
            <p className="text__para text-center">
              Dedicated to delivering personalized care with compassion and
              excellence, we aim to support your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* 1st */}
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center">
                <img src={icon1} alt="" className="w-[168px] h-[150px]" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Locate experienced specialists who are committed to providing
                  exceptional healthcare tailored to your needs.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* 2nd */}
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center">
                <img src={icon2} alt="" className="w-[272px] h-[150px]" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Discover conveniently located healthcare facilities equipped
                  with state-of-the-art technology and services.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* 3rd */}
            <div className="py-[30px] px-5">
              <div className="flex justify-center items-center">
                <img src={icon3} alt="" className="w-[252px] h-[148px]" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Schedule your appointment easily and efficiently, ensuring
                  timely access to quality care.Book the appointment Fast for
                  your better treatment
                </p>
                <NavLink
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
