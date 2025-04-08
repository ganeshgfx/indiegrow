import { Container } from "@mui/joy";
import Reveal from "./Reveal";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookSquare,
  FaPhone,
} from "react-icons/fa";

const contactinfo = [
  {
    icon: (
      <FaWhatsapp
        h-12
        w-12
        className="font-color-brand w-12 h-12 mb-3 inline-block"
      />
    ),
    title: "WhatsApp",
  },
  {
    icon: (
      <FaInstagram
        h-12
        w-12
        className="font-color-brand w-12 h-12 mb-3 inline-block"
      />
    ),
    title: "Instagram",
  },
  {
    icon: (
      <FaFacebookSquare
        h-12
        w-12
        className="font-color-brand w-12 h-12 mb-3 inline-block"
      />
    ),
    title: "WhatsApp",
  },
  {
    icon: (
      <FaPhone
        h-12
        w-12
        className="font-color-brand w-12 h-12 mb-3 inline-block"
      />
    ),
    title: "WhatsApp",
  },
];

const ContactUs = () => {
  return (
    <>
      {
        <Container>
          <Reveal>
            <section className="text-gray-800 body-font mt-5  bg-white">
              <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
                  <h1 className="sm:text-4xl text-3xl mb-4 font-extrabold text-indigo-600">
                    Empower Your Business Growth
                  </h1>
                  <p className="mb-6 leading-relaxed mt-6 text-gray-700">
                    Partner with us to unlock your business potential. Our
                    tailored solutions and expert guidance will help you achieve
                    your goals.
                  </p>
                  <div className="flex w-full md:justify-start justify-center items-end mt-6">
                    <div className="relative mr-2 md:w-full lg:w-full xl:w-1/2 w-2/4">
                      <input
                        type="email"
                        id="hero-field"
                        name="hero-field"
                        placeholder="Enter your email"
                        className="w-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:bg-white focus:border-color-brand text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button className="color-brand  h-10 px-6 text-white  hover:bg-indigo-700 transition duration-200">
                      SUBSCRIBE
                    </button>
                  </div>
                  <p className="text-sm mt-2 text-gray-500 mb-6 w-full">
                    Stay updated with our latest insights and offers.
                  </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center "
                    alt="Contact Support"
                    src="/public/contactus.png"
                  />
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font mb-8">
              <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl mb-4 font-extrabold text-indigo-600">
                    Empowering Growth, Inspiring Innovation
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever your business goals, we provide tailored solutions,
                    cutting-edge strategies, and impactful digital experiences.
                    Partner with us to elevate your brand, drive growth, and
                    lead with confidence.
                  </p>
                </div>
                <div className="div ">
                  <h1 className="sm:text-4xl text-3xl mb-4 font-extrabold text-indigo-600 text-center">
                    Have Qustions? We'd Love To Hear From You
                  </h1>
                  <div className="flex flex-wrap -m-4 text-center">
                    {contactinfo.map((item, index) => {
                      return (
                        <>
                          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div
                              className="border-2 border-gray-200 px-4 py-6 "
                              key={index}
                            >
                              {item.icon}
                              <h2 className="title-font font-medium text-3xl text-gray-900">
                                {item.title}
                              </h2>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </Container>
      }
    </>
  );
};

export default ContactUs;
