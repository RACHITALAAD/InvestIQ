import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Plans(){
    const plans = [
        {
            title : "Starter",
            price : "Free",
            features : [
                "Portfolio Tracking",
                "Market Watchlist",
                "Real-Time Market Data",
                "Basic Analytics"
            ]
        },
        {
            title : "Pro",
            price : "₹299/month",
            popular : true,
            features : [
                "Advanced Analytics",
                "Smart Portfolio Insights",
                "Sector Analysis",
                "Priority Market Updates"
            ]
        },
        {
            title: "Premium",
            price: "₹599/month",
            features : [
                "AI Investment Assistant",
                "Risk Analysis Engine",
                "Smart Recommendations",
                "Premium Dashboard Access"
            ]
        }
    ];

    return (
        <div className="container py-5">
            <div className="row g-4">
                {plans.map((plan , index) => (
                    <div className="col-md-4" key={index}>
                        <div className={`card h-100 shadow-sm border ${plan.popular ? "border-primary" : ""}`}>
                            <div className="card-body p-4">
                                {plan.popular && (<span className="badge bg-primary mb-3">Most Popular</span>)}

                                <h3 className="fw-bold">
                                    {plan.title}
                                </h3>

                                <h2 className="my-3" style={{color: "#387ed1"}}>{plan.price}</h2>

                                <hr />

                                {plan.features.map((feature , idx) => (
                                    <div className="d-flex align-items-center mb-3" key={idx}>
                                        <FaCheckCircle
                                            className="me-2"
                                            color="#387ed1"
                                        />

                                        <span>{feature}</span>
                                    </div>
                                ))}

                                <button className="btn btn-primary mt-3 w-100" style={{backgroundColor: "#387ed1" , border: "none"}}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans