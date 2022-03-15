import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
//style
import "./Table.css"

const Table = ({ list }) => {

    return (
        <>
            <table>
                <tr>
                    <th>Project Id</th>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>Total Cost</th>
                </tr>
                {list.map((x, i) => (
                    <Fragment key={i}>
                        <tr>
                            <td>{x.estimateNo}</td>
                            <td>{x.date}</td>
                            <td>{x.projectName}</td>
                            <td>Rs. {x.totalCost}</td>
                            <td><Link to='/detail'><button className='detail__button '>Details</button></Link></td>
                        </tr>
                    </Fragment>
                ))}
            </table>
        </>
    )
}

export default Table;