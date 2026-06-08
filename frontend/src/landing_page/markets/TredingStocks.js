import React from "react";

function TrendingStocks() {

    const stocks = [
        {
            symbol: "AAPL",
            price: "$212.50",
            change: "+1.8%"
        },
        {
            symbol: "TSLA",
            price: "$329.80",
            change: "-0.5%"
        },
        {
            symbol: "NVDA",
            price: "$182.30",
            change: "+3.1%"
        },
        {
            symbol: "MSFT",
            price: "$521.40",
            change: "+0.9%"
        }
    ];

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h2 className="fw-bold">
                    Trending Stocks
                </h2>

                <p className="text-muted">
                    Monitor popular stocks and market movers.
                </p>

            </div>

            <div className="row g-4">

                {stocks.map((stock, index) => (

                    <div className="col-md-3" key={index}>

                        <div className="border rounded shadow-sm p-4 text-center h-100">

                            <h4 className="fw-bold">
                                {stock.symbol}
                            </h4>

                            <h5>{stock.price}</h5>

                            <p
                                className={
                                    stock.change.startsWith("+")
                                        ? "text-success fw-bold"
                                        : "text-danger fw-bold"
                                }
                            >
                                {stock.change}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default TrendingStocks;