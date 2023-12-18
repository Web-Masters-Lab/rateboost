import Image from 'next/image'

const Component = () => {
    return (
        <div>
            <div className="canvas-paper">
            <div className="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
                <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <div className="mr-auto ml-auto max-w-lg sm:text-center sm:mx-auto">
                        <Image alt="Keeping It Real on Commercial Real Estate" height={100} width={100} src="/toddnepola/keeping-it-real-on-commercial-real-estate.png" className="object-contain object-top mb-8 w-full h-96"/>
                        <div className="mb-6">
                            <p className="block text-3xl font-bold tracking-tight text-gray-900 leading-8 font-sans sm:text-4xl"></p>
                            <p className="inline text-3xl font-bold tracking-tight text-gray-900 font-sans sm:text-4xl sm:leading-none">Your
                                Opinion Is Important
                            </p>
                        </div>
                        <p className="text-center text-gray-700 text-base md:text-lg">
                            Would you recommend my book to your friends?
                        </p>
                        <hr className="my-8 border-gray-300"/>
                        <div className="flex items-center mb-3 sm:justify-center space-x-8">
                            <a href="/reviews/make-review">
                                <span className="flex justify-center items-center">
                                <svg width="145" height="158" viewBox="0 0 145 158" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M1 1V144H78L82 157L94.5 144H144V1H1Z" fill="#3E558E" stroke="black"/><path d="M48.8852 61L25
                                    64.5304L32.1148 119L56 115.974L48.8852 61Z" fill="#42B0ED"/><path d="M63 104L58 66.5C67.3174 59.8146
                                    71.1647 54.6823 77 42.5C78.3067 35.762 79 28 80 26.5C81 25 87 25.5 87 25.5C91.6086 28.6677 91.9552
                                    33.1675 91.5 42.5C90.2067 50.1229 89.0186 53.5685 86.5 59L109.5 55.5C117.622 58.6554 116 64.5 114
                                    67.5C121 70 123 78 115 82C125 83 122 95 115 96C119.5 100 116.5 105 113 105L86.5 109C81.329 109.529
                                    78.5974 109.296 74 108L63 104Z" fill="white"/></svg>
                                </span>
                                <p className="text-2xl font-sans font-bold">Yes</p>
                            </a>
                            <a href="/reviews/service-recovery">
                                <span className="flex justify-center items-center">
                                <svg width="145" height="158" viewBox="0 0 145 158" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M1 1V144H78L82 157L94.5 144H144V1H1Z" fill="#FF0101" stroke="black"/><path d="M101.923
                                    89.5618L125.715 85.4536L117.283 31.1724L93.478 34.7764L101.923 89.5618Z" fill="#AE2626"/><path
                                    d="M86.7702 46.9164L92.6774 84.2842C83.5248 91.1935 79.803 96.4175 74.2646 108.738C73.1216 115.505
                                    72.6165 123.282 71.6532 124.806C70.6898 126.329 64.6795 125.975 64.6795 125.975C59.9955 122.92
                                    59.5399 118.43 59.7689 109.089C60.877 101.437 61.9813 97.9636 64.3676 92.4726L41.4591
                                    96.5289C33.2631 93.5712 34.7429 87.6891 36.6697 84.6415C29.6111 82.3119 27.4179 74.3627 35.3186
                                    70.17C25.2973 69.4126 28.0056 57.3434 34.9793 56.1741C30.3837 52.2843 33.2617 47.2131 36.7607
                                    47.1283L63.156 42.4873C68.3127 41.8336 71.0491 41.9998 75.6765 43.1841L86.7702 46.9164Z"
                                    fill="white"/></svg>
                                </span>
                                <p className="text-2xl font-sans font-bold">No</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  };

  export default Component;