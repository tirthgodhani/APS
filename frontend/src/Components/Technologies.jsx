import React from 'react';

function Technologies() {
    return (
        <>
            <div className="text-2xl sm:text-4xl font-bold text-center pt-20">
                <span className="highlighted-word relative px-3 block sm:inline">
                    TECHNOLOGIES
                </span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center md:px-28'>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazure.8c59ed42.webp&w=640&q=75" alt="Azure" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>Azure</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazure_function.2b8e2c63.webp&w=384&q=75" alt="Azure Function" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>Azure Function</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazure_sql.3682a11f.webp&w=828&q=75" alt="Azure SQL" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>Azure SQL</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdot_net_core.6526ee36.webp&w=256&q=75" alt=".Net Core" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>.Net Core</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300 ml-3' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdot_net_framework.ce776076.webp&w=3840&q=75" alt=".Net Framework" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>.Net Framework</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgcp_cloud.775e2858.webp&w=1200&q=75" alt="GCP - Cloud" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>GCP - Cloud</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogic_app.139be666.webp&w=640&q=75" alt="Logic App" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>Logic App</h2>
                </div>
                <div className='py-6 sm:py-12'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300 ml-16' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmachine_learning.b81ad433.webp&w=1920&q=75" alt="Machine Learning - Supervised algorithm" />
                    <h2 className='flex flex-col justify-center items-center font-bold mt-4 sm:mt-8 text-center'>Machine Learning - Supervised <span>algorithm</span></h2>
                </div>
                <div className='py-6 sm:py-12 md:col-span-2'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Focr_python.ff84243f.webp&w=640&q=75" alt="OCR Python" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>OCR Python</h2>
                </div>
                <div className='py-6 sm:py-12 md:col-span-2'>
                    <img className='photo w-24 h-20 shadow-xl rounded-lg transform hover:scale-125 transition duration-300' src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpython_flask.0c673ec8.webp&w=1200&q=75" alt="Python Flask" />
                    <h2 className='flex justify-center font-bold mt-4 sm:mt-8'>Python Flask</h2>
                </div>
            </div>
        </>
    );
}

export default Technologies;
