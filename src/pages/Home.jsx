import { Link, NavLink } from "react-router-dom";
import featureImg from "../assets/images/featureImg.jpg";
import faqImg from "../assets/images/faqImage.jpg";
import avatarIcon from "../assets/images/avatar-icon.png";
import videoIcon from "../assets/images/video-icon.png";
import heroImg1 from "../assets/images/doctor_01.jpg";
import heroImg2 from "../assets/images/doctor_02.jpg";
import heroImg3 from "../assets/images/doctor_03.jpg";
import icon1 from "../assets/images/icon_01.png";
import icon2 from "../assets/images/icon_02.png";
import icon3 from "../assets/images/icon_03.jpg";
import { BsArrowRight } from "react-icons/bs";
import { About } from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
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

      {/* Service Section start */}
      <section>
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World Class Care for Everyone. Our Health System Offers unmatched
              expert health Care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* Service Section End */}

      {/* === Feature Section ===  */}
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* === feature Content === */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">1. Book an Appointment Online</li>
                <li className="text__para">
                  2. Find Your Doctor and Call Their Office
                </li>
                <li className="text__para">
                  3. Visit the Clinic in Person to Schedule
                </li>
                <li className="text__para">
                  4. Get Assistance from Our Support Team
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* === Feature Image === */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 pb-3 p-2 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Faiyad Bin
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === Feature Section End ===  */}

      {/* === Our Doctors */}
      <section>
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World Class Care for Everyone. Our Health System Offers unmatched
              expert health Care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* === Our Doctors End */}

      {/* === Faq Section ===  */}
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img
                className="w-[384px] h-[552px] rounded-lg"
                src={faqImg}
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading mb-[30px] ">
                Most Questions by our Beloved Patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* === Faq Section End ===  */}

      {/* === Testimonial Start */}

      {/* === Testimonial End */}
      <section>
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Whats our patients say</h2>
            <p className="text__para text-center">
              World Class Care for Everyone. Our Health System Offers unmatched
              expert health Care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
}

export default Home;
