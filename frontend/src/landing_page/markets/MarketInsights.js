import React from "react";

function MarketInsights() {

    const insights = [
        "Technology sector continues to drive market growth.",
        "AI-related companies remain among the most watched stocks.",
        "ETFs are gaining popularity among long-term investors.",
        "Renewable energy markets remain highly volatile."
    ];

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h2 className="fw-bold">
                    Market Insights
                </h2>

                <p className="text-muted">
                    Key observations from current market trends.
                </p>

            </div>

            <div className="row g-4">

                {insights.map((item, index) => (

                    <div className="col-md-6" key={index}>

                        <div className="border rounded shadow-sm p-4 h-100">

                            <h5>
                                {item}
                            </h5>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default MarketInsights;