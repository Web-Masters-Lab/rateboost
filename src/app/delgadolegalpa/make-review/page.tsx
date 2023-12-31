import Image from 'next/image'

const Component = () => {
    return (
        <div>
    <div className="canvas-paper">
      <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
        <div className="mr-auto ml-auto max-w-lg ">
          <div className="mr-auto ml-auto sm:text-center sm:mx-auto">
          <Image alt="Delgado Legal P.A." height={100} width={100} src="/delgado-legal/delgado-legal-logo.svg" className="object-contain object-top mb-8 w-full h-full"/>
            <div className="mb-6">
              <p className="text-3xl font-bold tracking-tight leading-8 sm:text-4xl text-gray-900 block font-sans"></p>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-gray-900 inline
                  font-sans">Excellent!</p>
            </div>
            <p className="text-center text-base md:text-lg text-gray-700">
              <span style={{color: 'rgb(31, 41, 51)', fontFamily: 'Poppins, sans-serif'}}>It would be great if you could tell
                  others about your experience.</span>
            </p>
            <hr className="my-8 border-gray-300"/>
            <div className="justify-evenly h-80 container">
              <div className="items-center justify-center group flex flex-col">
                <a>
                <Image height={100} width={100} alt="Review in Google" src="/rateboost/google-logo.png" className="object-contain object-center block h-56 mx-auto w-auto"/>
                </a>
                <a className="font-bold text-lg text-blue-600 mt-4 underline group-hover:no-underline group-hover:text-yellow-400">Click Here To Review Us On Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  };

export default Component;