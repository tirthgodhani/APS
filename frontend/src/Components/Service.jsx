import React from 'react'

function Service() {
    return (
        <>
        
            <div className=" flex flex-col text-2xl sm:text-[40px] font-bold text-center pt-10">
                INNOVATIONMEETS EXPERTISE
                <span className="highlighted-word relative px-3 pt-2 block sm:inline"
                // style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                >
                    IN OUR RANGE OF SERVICES
                </span>
                <div className="text-center my-12 ">
                    <p className="text-gray-600 text-2xl mt-4 lg:px-64 font-normal  ">
                        Experience the power of optimized technology and increased productivity with the help of My Algosoft and its services.
                    </p>
                </div>
            </div>
            <div className="bg-white min-h-screen flex flex-col items-between   py-12 px-12">
                <div className='py-8'>
                    <div className="bg-slate  p-6 rounded-lg shadow-xl max-w-full mx-auto flex  sm:flex-row-reverse flex-col sm:flex-row ">
                        <div className=" mt-6 md:mt-0 ">
                            <img src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics_and_reporting.dcf37cd8.webp&w=640&q=75" alt="Analytics" className="rounded-lg sm:w-[1800px] sm:h-[300px]" />
                        </div>
                        <div className=" flex flex-col ">
                            <h2 className="text-3xl font-bold mb-4 flex justify-center sm:px-8 ">Analytics and Reporting</h2>
                            <p className="text-gray-700 text-xl sm:px-8 text-justify">
                                Harness the power of your data! Our analytics and reporting services transform raw information into actionable insights, empowering you to make smarter decisions, improve performance, and achieve success. Don't let valuable data sit unused - unlock its potential and gain a clear competitive edge.
                            </p>
                        </div>
                    </div>
                </div>
                <div  className='py-8'>
                    <div className="bg-slate  p-6 rounded-lg shadow-lg max-w-full mx-auto flex   flex-col sm:flex-row ">
                        <div className=" mt-6 md:mt-0 ">
                            <img src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct_research.9f1d3376.webp&w=640&q=75" alt="Analytics" className="rounded-lg sm:w-[2000px] sm:h-[300px]" />
                        </div>
                        <div className=" flex flex-col ">
                            <h2 className="text-3xl font-bold mb-4 flex justify-center sm:px-8">Product Research & Development</h2>
                            <p className="text-gray-700 text-xl sm:px-8 text-justify">
                            Fuel innovation and stay ahead of the curve with our Product Research & Development services. We combine deep market analysis with user experience expertise to identify opportunities for groundbreaking products and features. Collaborate with our team to refine your vision, validate concepts, and bring your next game-changing product to life.
                                </p>
                        </div>
                    </div>
                </div>
                <div  className='py-8'>
                    <div className="bg-slate  p-6 rounded-lg shadow-lg max-w-full mx-auto flex  sm:flex-row-reverse flex-col sm:flex-row ">
                        <div className=" mt-6 md:mt-0 ">
                            <img src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontract_based_outsourcing.7e6b4387.webp&w=640&q=75" alt="Analytics" className="rounded-lg sm:w-[2000px] sm:h-[300px]" />
                        </div>
                        <div className=" flex flex-col ">
                            <h2 className="text-3xl font-bold mb-4 flex justify-center sm:px-8 ">Contract based Outsourcing</h2>
                            <p className="text-gray-700 text-xl sm:px-8 text-justify ">
                            Streamline your operations and access a global talent pool with our Contract-based IT Outsourcing. We provide flexible, cost-effective solutions with experienced professionals tailored to your specific needs. Focus on your core business while we handle your IT projects, ensuring on-time delivery and expertise you can trust.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Service
