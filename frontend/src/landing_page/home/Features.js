import React from 'react';
import { FaChartLine , FaWallet} from "react-icons/fa";
import { PiChartBarFill } from "react-icons/pi";
import { IoMdLock } from "react-icons/io";

function Features() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-4'>Built for Smarter Investing</h1>

                    <p className='text-muted'>
                        InvestIQ provides modern tools for portfolio management,
                        market tracking, and investment analytics — all in one platform.
                    </p>
                </div>

                <div className='col-6'>

                    <div className='mb-4'>
                        <h4> <FaChartLine /> Real-Time Market Tracking</h4>
                        <p className='text-muted'>
                            Track stock prices and market trends with interactive insights.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <h4><FaWallet /> Portfolio Management</h4>
                        <p className='text-muted'>
                            Manage holdings and monitor investment performance easily.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <h4><PiChartBarFill /> Analytics Dashboard</h4>
                        <p className='text-muted'>
                            Visualize portfolio growth and market analytics in real time.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <h4><IoMdLock /> Secure Authentication</h4>
                        <p className='text-muted'>
                            Secure login and protected account management system.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Features;