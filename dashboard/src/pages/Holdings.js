import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";

function Holdings(){
    const holdings = [
        {
            stock: "Reliance",
            quantity : 10,
            avgPrice: 2500,
            currentPrice: 2700,
        },
        {
            stock: "TCS",
            quantity: 5,
            avgPrice: 3500,
            currentPrice: 3400,
        },
        {
            stock: "Infosys",
            quantity: 15,
            avgPrice: 1450,
            currentPrice: 1520,
        },
        {
            stock: "HDFC Bank",
            quantity: 8,
            avgPrice: 1600,
            currentPrice: 1580,
        }
    ];

    return (
        <div className='container-fluid p-4'>
            <h2 className='fw-bold mb-4'>Holdings</h2>

            <div className='bg-white rounded shadow-sm p-4'>
                <table className='table align-middle'>
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Avg Price</th>
                            <th>Current Price</th>
                            <th>Investment</th>
                            <th>Current Value</th>
                            <th>Profit & Loss</th>
                        </tr>
                    </thead>

                    <tbody>
                        {holdings.map((stock , index) => {
                            const investment = stock.quantity * stock.avgPrice;
                            const currentValue = stock.quantity * stock.currentPrice;
                            const profitLoss = currentValue - investment;

                            return (
                                <tr key={index}>
                                    <td className='fw-semibold'>{stock.stock}</td>
                                    <td>{stock.quantity}</td>
                                    <td><MdCurrencyRupee />{stock.avgPrice}</td>
                                    <td><MdCurrencyRupee />{stock.currentPrice}</td>
                                    <td><MdCurrencyRupee />{investment}</td>
                                    <td><MdCurrencyRupee />{currentValue}</td>

                                    <td className={profitLoss >= 0 ? "text-success fw-bold" : "text-danger fw-bold"}>
                                        <MdCurrencyRupee />{profitLoss}
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Holdings;