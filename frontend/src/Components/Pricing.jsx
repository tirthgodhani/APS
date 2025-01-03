import React from 'react'

function Pricing() {
    const features = [
        'Inventory Count',
        'Maximum Invoice / Bill Count',
        'SMS, Email, WhatsApp Count',
        'Inventory Management',
        'Customizable Template',
        'Historical Analytics',
        'Bill Template and Recent Product List',
        'Cloud Web and Mobile App (Android and iOS)',
        'Advanced Permissions',
        'Payment Reports and Payment Status',
        'Analytics',
        'Unlimited Storage for Product Images',
        'Re-Order and Demand Prediction',
        '99.9% Uptime SLA',
        'Premium Support (Standard Hours)',
        'Core EMR/EHR Functionality',
        'Patient Scheduling & Billing',
    ];
    return (
        <>
                <div className="text-2xl sm:text-[40px] font-bold text-center pt-16">
                    BEST AVAILABLE
                    <span className="highlighted-word relative px-3 block sm:inline"
                    // style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                    >
                        PLANS
                    </span>
                    FOR YOUR TEAMS
                </div>
                <div className="text-center my-12 ">
                    <p className="text-gray-600 text-2xl mt-4 lg:px-[350px] font-normal  ">
                        Enjoy a free trial of Small business or Enterprise on us! If you don’t upgrade
                        after your trial, your team will go back to Free.
                    </p>
                </div>
            <div className="overflow-x-auto  p-12 ">
                <table    className="min-w-full  border-4 rounded-xl border-collapse border  ">
                    <thead>
                        <tr >
                            <th className="border border-gray-300 p-2 font-bold">Sr.No.</th>
                            <th className="border border-gray-300 p-2 font-bold">Features</th>
                            <th className="border border-gray-300 p-2 font-bold">Free Tier<br />Rs 0/year</th>
                            <th className="border border-gray-300 p-2 font-bold">Small Business<br />Rs 9439/year</th>
                            <th className="border border-gray-300 p-2 font-bold">Enterprise<br />Rs 17699/year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index}>
                                <th className="border border-gray-300 p-2 font-semibold">{index+1}</th>
                                <td className="border border-gray-300 p-2 font-semibold">{feature}</td>
                                <th className="border border-gray-300 p-2">{feature === 'Premium Support (Standard Hours)' || feature === 'Core EMR/EHR Functionality' || feature === 'Patient Scheduling & Billing' ? '-' : '✔'}</th>
                                <th className="border border-gray-300 p-2">{feature === 'Premium Support (Standard Hours)' || feature === 'Core EMR/EHR Functionality' || feature === 'Patient Scheduling & Billing' ? '-' : '✔'}</th>
                                <th className="border border-gray-300 p-2">✔</th>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pricing
