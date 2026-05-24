import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

function Pricing() {
    return (

        <div className='container p-5'>

            <div className='text-center mb-5'>

                <h1>Simple & Transparent Plans</h1>

                <p className='text-muted'>
                    Choose the plan that fits your investment journey.
                </p>
            </div>

            <div className='row justify-content-center g-4'>

                <div className='col-md-4'>

                    <div className='border rounded shadow-sm p-5 text-center h-100'>

                        <h3 className='mb-3 fw-bold'>
                            Starter
                        </h3>

                        <h4 className='text-primary fw-bold mb-4'>
                            Free
                        </h4>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Portfolio Tracking
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Market Watchlist
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Real-Time Market Data
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Basic Analytics
                        </p>

                        <button className='btn btn-outline-primary mt-3'>
                            Get Started
                        </button>

                    </div>

                </div>

                <div className='col-md-4'>

                    <div className='border rounded shadow p-5 text-center h-100'>

                        <h3 className='mb-3 fw-bold'>
                            Pro
                        </h3>

                        <h4 className='text-primary fw-bold mb-4'>
                            ₹299/month
                        </h4>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Advanced Analytics
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Smart Portfolio Insights
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Priority Market Updates
                        </p>

                        <p className='text-muted d-flex align-items-center gap-2 mb-3'>
                            <FaCircleCheck /> Enhanced Dashboard Access
                        </p>

                        <button className='btn btn-primary mt-3'>
                            Upgrade Plan
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Pricing;