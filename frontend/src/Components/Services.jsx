import React from 'react';

function Services() {
    return (
        <>
            <div className="text-2xl sm:text-4xl font-bold text-center pt-20">
                <span className="highlighted-word relative px-3 block sm:inline">
                SERVICES
                </span>
            </div>
            <div className='text-center  py-8 px-10  flex flex-col text-lg text-justify'>
            At APS THREEAI you not only receive the splendid healthcare ERP products but also get the
                excellent services to amplify your business. Our products and services are categorized as:
            </div>
            <div className="flex sm:flex-row flex-col justify-center mt-8">
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src='https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics_and_reporting.dcf37cd8.webp&w=640&q=75'alt="Analytics and Reporting" className="w-full" />
                        <h2 className="text-center font-bold mt-4">Analytics and Reporting</h2>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src='https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontract_based_outsourcing.7e6b4387.webp&w=640&q=75' alt="Product Research & Development" className="w-full" />
                        <h2 className="text-center font-bold mt-4">Product Research & Development</h2>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src='https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct_research.9f1d3376.webp&w=640&q=75' alt="Contract based Outsourcing" className="w-full" />
                        <h2 className="text-center font-bold mt-4">Contract based Outsourcing</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
