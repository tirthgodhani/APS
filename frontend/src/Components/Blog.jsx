import React from 'react'

function Blog() {
  return (
    <>
     <div className="text-2xl sm:text-[40px] font-bold text-center pt-20">
                <span className="highlighted-word relative px-3 block sm:inline"
                // style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                >
                    BLOG
                </span>
            </div>
       <div className="w-full flex flex-row  justify-center mt-8 overflow-x-scroll">
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src='https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog2.d352b8ce.webp&w=828&q=75'alt="Analytics and Reporting" className="w-full" />
                        <h2 className="text-center font-bold mt-4">Software is the backbone of New age  Healthcare</h2>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src='https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog1.b1800cc3.webp&w=828&q=75' alt="Product Research & Development" className="w-full" />
                        <h2 className="text-center font-bold mt-4">Contract based Outsoucing</h2>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Blog
