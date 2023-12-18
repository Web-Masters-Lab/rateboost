import Image from 'next/image';

const Component = () => {
    return (
        <div>
    <div className="canvas-paper">
      <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
        <div className="mr-auto ml-auto max-w-lg">
          <div className="mr-auto ml-auto sm:text-center sm:mx-auto">
          <Image alt="Keeping It Real on Commercial Real Estate" height={100} width={100} src="/delgado-legal/delgado-legal-logo.svg" className="object-contain object-top mb-8 w-full h-full"/>
            <div className="mb-6">
              <p className="text-3xl font-bold tracking-tight leading-8 sm:text-4xl text-gray-900 block font-sans"></p>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-gray-900 inline font-sans">We
                  Are So Sorry !</p>
            </div>
            <p className="text-center text-base md:text-lg text-gray-700">
              <span style={{color: 'rgb(31, 41, 51)', fontFamily: 'Poppins, sans-serif'}}>Please let us know how we can
                  support you.</span>
            </p>
            <hr className="my-8 border-gray-300"/>
            <form action="/delgadolegalpa/message-received">
              <div className="justify-center flex flex-col container">
                <label htmlFor="name" className="text-left mb-2 font-bold text-xl">Name</label>
                <input name="name" type="text" placeholder="John" className="h-10 px-4 text-lg border-black border-2 border-solid text-black bg-white rounded-md"/>
              </div>
              <div className="justify-center flex flex-col container my-4">
                <label htmlFor="email" className="text-left mb-2 font-bold text-xl">Email</label>
                <input name="email" type="email" placeholder="John@email.com" className="h-10 px-4 text-lg border-black border-2 border-solid text-gray-700 bg-white rounded-md"/>
              </div>
              <div className="justify-center flex flex-col container">
                <label htmlFor="message" className="text-left mb-2 font-bold text-xl">Message</label>
                <textarea name="message" placeholder="Add a message." className="border-black border-2 border-solid w-full pt-2 pr-3 pb-2 pl-3 rounded-md text-lg h-24"/>
              </div>
              <div className="justify-center flex flex-col container">
                <button  className="mt-4 font-bold w-28 bg-black text-white h-12 rounded-md shadow-md pr-6 pl-6">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  };

  export default Component;