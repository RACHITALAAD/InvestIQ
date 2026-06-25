import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { holdings } from '../../data/dashboardData';

function Holdings(){
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