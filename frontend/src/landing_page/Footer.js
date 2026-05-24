import React from 'react';
import { FaLinkedin , FaTwitterSquare , FaGithubSquare} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <footer className='pt-5 pb-3 mt-5 border-top' style={{backgroundColor : "#f8f8f7"}}>
            <div className="container">
                <div className="row align-items-start justify-content-between">
                    <div className='col-md-4 mb-4'>
                        <h3 className='fw-bold' style={{color: "#002855"}}>InvestIQ</h3>
                        <p className='text-muted mt-3 fw-semibold' style={{lineHeight: "1.8" ,  maxWidth: "420px"}}>
                             Smart investment platform for portfolio tracking,
              analytics, and real-time market insights.
                        </p>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <h5 className='mb-4 fw-bold'>Quick Links</h5>
                          <div className='d-flex gap-4 flex-wrap text-muted fw-semibold'>

                            <span style={{ cursor: "pointer" }}>
                                Features
                            </span>

                            <span style={{ cursor: "pointer" }}>
                                Insights
                            </span>

                            <span style={{ cursor: "pointer" }}>
                                Pricing
                            </span>

                            <span style={{ cursor: "pointer" }}>
                                Markets
                            </span>

                            <span style={{ cursor: "pointer" }}>
                                Login
                            </span>

                        </div>

                    </div>

                    <div className='col-md-3 mb-4'>
                        <h5 className='mb-4 fw-bold'>Connect</h5>
                        <div className='d-flex gap-3 fs-3 mt-1'>
                            <FaLinkedin className='text-secondary fw-semibold' style={{cursor: "pointer"}}/>
                            <FaGithubSquare className='text-secondary fw-semibold' style={{cursor: "pointer"}}/>
                            <FaTwitterSquare  className='text-secondary fw-semibold' style={{cursor: "pointer"}}/>
                        </div>
                    </div>
                </div>

                <hr className='mt-4' />
                <div className='text-center text-muted fw-semibold'>
                    <p> <FaRegCopyright className='me-1'/> 2026 InvestIQ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;