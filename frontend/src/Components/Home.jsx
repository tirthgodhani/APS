import React from 'react';

function Home() {
    return (
        <>
            <div className="text-2xl sm:text-[40px] font-bold text-center pt-8">
                MANAGE YOUR HEALTH DATA
                <span className="highlighted-word relative px-3 block sm:inline"
                // style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                >
                    WISELY
                </span>
            </div>
            <div className='text-center  py-8 px-10  flex flex-col text-lg'>
                Maintain digital records of patient's health information including
                <span>
                    diagnoses, treatment plans, medications, lab results, and imaging reports
                </span>
            </div>
            <div className='flex flex-row justify-center '>
                <button class="btn-61 m-2 text-white font-bold" ><span className='bg-cream  rounded-md p-3 '>Book a Demo</span></button>
                <button class="btn-62 m-2 border-2 border-cream  rounded-md p-[10px]"><span className='text-cream  '>Know Features</span></button>
            </div>
            <div className="flex items-center justify-center p-10 sm:px-64">
            <img 
                className="object-cover w-full rounded-[10px] border-[4px] " 
                src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard_banner.df6d2a33.webp&w=3840&q=75" />
        </div>
         
        </>
    );
}

export default Home;
