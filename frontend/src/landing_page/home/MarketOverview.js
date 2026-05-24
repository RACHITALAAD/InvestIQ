import React from 'react';
import MarketImage from '../../assets/Marketimage.jpg';
import { FaChartLine, FaChartPie } from "react-icons/fa";

function MarketOverview() {
    return (
        <div className="container p-5">
            <div className='row align-items-center'>
                <div className="col-md-6 text-center">
                    <img src={MarketImage} alt="Market Overview" className='img-fluid' style={{ width: "85%" }} />
                </div>

                <div className="col-md-6">
                    <h1 className='mb-4'>
                        Stay Ahead of the Market
                    </h1>

                    <p className='text-muted mb-5'>
                        Track market trends, monitor portfolio performance,
                        and explore investment insights in real time.
                    </p>

                    {/* Block 1 */}
                    <div className='mb-4'>

                        <h4 className='d-flex align-items-center gap-2'>

                            <FaChartLine className='text-primary' />

                            Live Market Trends

                        </h4>

                        <p className='text-muted ms-4'>
                            Analyze stock movements, trending sectors,
                            and market performance with interactive visualizations.
                        </p>

                    </div>

                    {/* Block 2 */}
                    <div>

                        <h4 className='d-flex align-items-center gap-2'>

                            <FaChartPie className='text-primary' />

                            Portfolio Insights

                        </h4>

                        <p className='text-muted ms-4'>
                            Monitor portfolio growth and investment activity
                            through a clean analytics dashboard.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MarketOverview;