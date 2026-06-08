import React from "react";

function SectorPerformance() {

    const sectors = [
        {
            name: "Technology",
            growth: "+3.2%"
        },
        {
            name: "Banking",
            growth: "+1.1%"
        },
        {
            name: "Healthcare",
            growth: "+0.8%"
        },
        {
            name: "Energy",
            growth: "-0.5%"
        }
    ];

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h2 className="fw-bold">
                    Sector Performance
                </h2>

                <p className="text-muted">
                    Explore how major sectors are performing.
                </p>

            </div>

            <div className="row g-4">

                {sectors.map((sector, index) => (

                    <div className="col-md-3" key={index}>

                        <div className="border rounded shadow-sm p-4 text-center h-100">

                            <h5 className="fw-bold">
                                {sector.name}
                            </h5>

                            <h4
                                className={
                                    sector.growth.startsWith("+")
                                        ? "text-success"
                                        : "text-danger"
                                }
                            >
                                {sector.growth}
                            </h4>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default SectorPerformance;