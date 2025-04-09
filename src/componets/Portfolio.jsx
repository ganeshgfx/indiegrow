import RevealMoveUp from "./RevealMoveUp";

const Portfolio = () => {
  return (
    <RevealMoveUp>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container ">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-indigo-500 font-semibold">
              Discover our latest projects and success stories
            </p>
          </div>

          {/* First Project */}
          <section className="text-gray-400 body-font mb-14">
            <div className="container mx-auto flex px-5 flex-col-reverse md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <img
                  className="object-cover object-center w-full rounded"
                  alt="GravityFilms"
                  src="/portfolio/image.png"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-0">
                <h1 className="text-2xl md:text-4xl mb-4 font-medium font-color-brand">
                  GravityFilms
                </h1>
                <p className="leading-relaxed mb-4">
                  Fully functional website for a creative agency with clean and
                  minimalistic design.
                </p>
                <ul className="list-disc list-inside text-left mb-4">
                  <li>Minimalistic design</li>
                  <li>Responsive design</li>
                  <li>SEO Friendly</li>
                  <li>Fast loading</li>
                </ul>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="bg-gray-800 py-3 px-5 rounded-lg flex items-center hover:bg-gray-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191..."></path>
                    </svg>
                    <span className="ml-4 leading-none">
                      <span className="text-xs text-gray-400 mb-1 block">
                        GET IT ON
                      </span>
                      <span className="font-medium">Google Play</span>
                    </span>
                  </button>
                  <button className="bg-gray-800 py-3 px-5 rounded-lg flex items-center hover:bg-gray-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79..."></path>
                    </svg>
                    <span className="ml-4 leading-none">
                      <span className="text-xs text-gray-400 mb-1 block">
                        Download on the
                      </span>
                      <span className="font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Second Project */}
          <section className="text-gray-600 body-font mb-14">
            <div className="container mx-auto flex px-5 flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-0">
                <h1 className="text-2xl md:text-4xl mb-4 font-medium text-gray-900">
                  GAS MANAGEMENT SYSTEM
                </h1>
                <p className="mb-4 leading-relaxed">
                  Automate your gas bills and save time and money by using our
                  gas management system. With our system, you can easily track
                  your gas usage and set up automatic payments.
                </p>
                <ul className="list-disc list-inside text-left mb-4">
                  <li>Track your gas usage</li>
                  <li>Set up automatic payments</li>
                  <li>Get alerts when you're running low on gas</li>
                  <li>Real-Time data access</li>
                </ul>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="bg-gray-100 py-3 px-5 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191..."></path>
                    </svg>
                    <span className="ml-4 leading-none">
                      <span className="text-xs text-gray-600 mb-1 block">
                        GET IT ON
                      </span>
                      <span className="font-medium">Google Play</span>
                    </span>
                  </button>
                  <button className="bg-gray-100 py-3 px-5 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79..."></path>
                    </svg>
                    <span className="ml-4 leading-none">
                      <span className="text-xs text-gray-600 mb-1 block">
                        Download on the
                      </span>
                      <span className="font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="object-cover object-center w-full rounded"
                  alt="Gas Management"
                  src="/portfolio/GS.png"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </RevealMoveUp>
  );
};

export default Portfolio;
