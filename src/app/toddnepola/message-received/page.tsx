import Image from 'next/image'

const Component = () => {
    return (
        <div>
        <div className="canvas-paper">
        <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
            <div className="mr-auto ml-auto max-w-lg">
            <div className="mr-auto ml-auto sm:text-center sm:mx-auto">
            <Image alt="Keeping It Real on Commercial Real Estate" height={100} width={100} src="/toddnepola/keeping-it-real-on-commercial-real-estate.png" className="object-contain object-top mb-8 w-full h-96"/>
                <div className="mb-6">
                <p className="text-3xl font-bold tracking-tight leading-8 sm:text-4xl text-gray-900 block font-sans"></p>
                <p className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-gray-900 inline
                    font-sans">We Received Your Message.</p>
                </div>
                <p className="text-center text-base md:text-lg text-gray-700">
                <span className="whitespace-nowrap" style={{color: 'rgb(31, 41, 51)', fontFamily: 'Poppins, sans-serif'}}>Thank you for taking the time to let us know how we can improve.</span>
                <br/>
                <span style={{color: 'rgb(31, 41, 51)', fontFamily: 'Poppins, sans-serif'}}>We’ll be in touch soon.</span>
                </p>
                <hr className="mt-28 border-gray-300"/>
                <div className="justify-evenly flex container">
                    <div className="items-center mt-4 justify-center flex-col flex">
                        <a className="text-md mb-4 text-gray-600">If you would like to leave a public review, you can do that as well.</a>
                        <Image height={100} width={100} alt="Review in Amazon" src="/rateboost/amazon-icon-bw.svg" className="object-contain object-center block h-16 mx-auto w-16"/>
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