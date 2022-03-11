import React from 'react';
//style
import "./Table.css"

const Table = ({ list }) => {

    return (
        <>
            <table>
                <tr>
                    <th>Estimated No.</th>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>No. of Model</th>
                    <th>Total Cost</th>
                </tr>
                {list.map((x, i) => (
                    <tr>
                        <td>{x.estimateNo}</td>
                        <td>{x.date}</td>
                        <td>{x.projectName}</td>
                        <td>{x.noOfModel}</td>
                        <td>Rs. {x.totalCost}</td>
                        <td><button>Details</button></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Table;