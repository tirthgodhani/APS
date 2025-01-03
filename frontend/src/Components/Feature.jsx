import React from 'react'

function Feature() {
    
    return (
        <>
            <div className="text-2xl sm:text-[40px] font-bold text-center pt-20">
                <span className="highlighted-word relative px-3 block sm:inline"
                // style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                >
                    FEATURES
                </span>
            </div>
            <div className="w-full mt-10 flex flex-col gap-1 sm:gap-8 py-12">
                <div className="slide-in w-full flex items-center flex-col sm:flex-row ">
                    <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">
            
                        <img className="rounded-lg  w-64 h-64 md:w-[327px] md:h-[320px] " src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory_management.ae6c81f6.webp&w=1920&q=75" alt="Inventory Management" />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left py-12">
                        <h1 className="text-3xl md:text-4xl font-semibold pb-12">Inventory Management</h1>
                        <ul className="list-disc list-inside text-2xl font-medium">
                            <li className="mb-2">Product Management</li>
                            <li className="mb-2">Quantity Management</li>
                            <li className="mb-2">Warehouse Management</li>
                            <li className="mb-2">Manufacturing Management</li>
                        </ul>
                    </div>
                </div>

                <div className=" slide-out w-full flex flex-col items-center sm:flex-row-reverse ">
                    <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">

                        <img className="rounded-lg  w-64 h-64 md:mr-32 md:w-[327px] md:h-[320px] " src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics_and_reporting.29a744f1.webp&w=1920&q=75" alt="Inventory Management" />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left lg:px-32 p-12">
                        <h1 className="text-3xl md:text-4xl font-semibold pb-12">Analytics and Reporting</h1>
                        <ul className="list-disc list-inside text-2xl font-medium">
                            <li className="mb-2">Sales Report</li>
                            <li className="mb-2">Purchase Report</li>
                            <li className="mb-2">User-Friendly Dashboard</li>
                            <li className="mb-2">Stock Report</li>
                        </ul>
                    </div>
                </div>

                <div className=" slide-in w-full flex flex-col items-center sm:flex-row ">
                    <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">

                        <img className="rounded-lg  w-64 h-64  md:w-[327px] md:h-[320px] " src="https://aps-three-ai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftax_and_billing_system.a4c5ddbc.webp&w=1920&q=75" alt="Inventory Management" />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left py-12">
                        <h1 className="text-3xl md:text-4xl font-semibold pb-12">Tax and Billing System</h1>
                        <ul className="list-disc list-inside text-2xl font-medium">
                            <li className="mb-2">Purchase Billing</li>
                            <li className="mb-2">Tax Report </li>
                            <li className="mb-2">Labelled Invoices</li>
                            <li className="mb-2">Cloud based Invoice Database</li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Feature
