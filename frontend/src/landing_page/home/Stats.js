import React from 'react';
import {FaChartLine,FaWallet,FaBolt,FaShieldAlt} from "react-icons/fa";

function Stats() {
    return (

        <div className='container p-5'>
            <div className='text-center mb-5'>
                <h1>Why Choose InvestIQ?</h1>

                <p className='text-muted'>
                    Powerful tools and real-time insights designed for modern investors.
                </p>
            </div>

            <div className='row g-4'>

                <div className='col-md-3'>
                    <div className='p-4 border rounded shadow-sm text-center h-100'>

                        <FaChartLine
                            className='text-primary mb-3'
                            size={35}
                        />

                        <h2 className='text-primary fw-bold'>
                            100+
                        </h2>

                        <h5 className='mt-3'>
                            Stocks Tracked
                        </h5>

                        <p className='text-muted mt-3'>
                            Monitor market movements and trending stocks in real time.
                        </p>

                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='p-4 border rounded shadow-sm text-center h-100'>

                        <FaWallet
                            className='text-primary mb-3'
                            size={35}
                        />

                        <h2 className='text-primary fw-bold'>
                            24/7
                        </h2>

                        <h5 className='mt-3'>
                            Market Monitoring
                        </h5>

                        <p className='text-muted mt-3'>
                            Stay updated with continuous analytics and portfolio insights.
                        </p>

                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='p-4 border rounded shadow-sm text-center h-100'>

                        <FaBolt
                            className='text-primary mb-3'
                            size={35}
                        />

                        <h2 className='text-primary fw-bold'>
                            Real-Time
                        </h2>

                        <h5 className='mt-3'>
                            Analytics Dashboard
                        </h5>

                        <p className='text-muted mt-3'>
                            Visualize portfolio growth and investment performance instantly.
                        </p>

                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='p-4 border rounded shadow-sm text-center h-100'>

                        <FaShieldAlt
                            className='text-primary mb-3'
                            size={35}
                        />

                        <h2 className='text-primary fw-bold'>
                            Secure
                        </h2>

                        <h5 className='mt-3'>
                            Portfolio Access
                        </h5>

                        <p className='text-muted mt-3'>
                            Reliable authentication and protected investment management.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;