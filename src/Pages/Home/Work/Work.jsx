import React from "react";

const Work = () => {
  return (
    <div>
      <h5 className="text-teal-500 text-center font-bold text-xl mt-10 tracking-[10px]">
        Working Process
      </h5>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We Love to solve our
                <br className="hidden md:block" />
                Client's Problem{" "}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-teal-500">
                    from heart
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Our service team are always ready to serve our client's. we
                almost give 15,000 services after warranty period. And our
                client always satisfy in our works. we believe in best quality
                service .
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-xl border-teal-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Our service is open 24/7
                  </h6>
                  <p className="text-sm text-gray-900">
                    Just pick your phone and dial 26639 . Our team will present
                    in your doorstep within time.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-xl border-teal-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    we guarantee our service
                  </h6>
                  <p className="text-sm text-gray-900">
                    we use world class product so we can guarantee our service.
                    After servicing within 2 month you got free maintenance
                    check from us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://i.ibb.co/ZX9XkMg/man-fixing-motorcycle-modern-workshop.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
