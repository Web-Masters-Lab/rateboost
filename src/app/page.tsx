import Image from 'next/image';

const Component = () => {
  return (
      
          <div className="bg-blue-900 flex flex-col h-100% pt-2 pb-10 justify-center items-center relative">
            <div className="absolute inset-x-0 bottom-0">
              <span className="items-center justify-center flex">
                <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none"><path
                    d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039
                    175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"/></svg>
              </span>
            </div>
            <div className="bg-blue-900 h-100% pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto justify-center items-center sm:max-w-xl
                md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="bg-blue-900 w-full justify-- flex flex-col items-center relative max-w-2xl sm:mx-auto sm:max-w-xl
                  md:max-w-2xl sm:text-center">
                <div className="bg-blue-900 block text-white text-3xl font-bold leading-tight w-full justify-- items-- mt-0
                    mr-auto mb-6 ml-auto sm:text-4xl sm:leading-none">
                  <p className="text-white text-3xl font-bold leading-tight sm:text-4xl sm:leading-none">Rank Higher With</p>
                  <div className="bg-blue-900 inline-block text-white text-3xl font-bold leading-tight w-full pt-0 pr-2 pb-0 pl-2
                      relative">
                    <div className="bg-green-500 absolute inset-0 transform -skew-x-12"></div>
                    <p className="text-white text-3xl font-bold leading-tight sm:text-4xl sm:leading-none relative">More
                        Reviews</p>
                  </div>
                </div>
                <p className="text-indigo-100 text-base leading-tight mb-6 md:text-lg">Effortlessly gather positive reviews, boost
                    your online presence, and attract more customers. Take charge of your reputation and rank higher on Google
                    searches, capturing the attention your business deserves.</p>
                <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                  <input type="email"  placeholder="Email" className="md:mr-2 md:mb-0 focus:ring
                      focus:border-white border-white focus:outline-none focus:shadow-outline flex-grow transition
                      duration-200 border-2 appearance-none text-white bg-transparent font-normal w-80 h-12 text-xs rounded-md
                      pt-3 pr-4 pb-3 pl-4 mt-0 mr-3 mb-0 ml-0"/>
                  <a href="#" className="inline-flex w-full h-12 pr-6 pl-6 font-semibold text-white shadow-md bg-green-500
                      tracking-wide transition items-center justify-center duration-200 rounded md:w-auto hover:bg-yellow-500
                      focus:shadow-outline focus:outline-none">Join The Waitlist</a>
                </form>
              </div>
            </div>
          </div>
  );
};

export default Component;