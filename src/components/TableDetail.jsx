import React, { Fragment } from 'react';
import "./TableDetail.css";
import ProgressCircular from './ProgressCircular';

const TableDetail = ({ list }) => {


    return (
        <>
            <table>
                <tr>
                    <th>Model Name</th>
                    <th>Material</th>
                    <th>Layer Height</th>
                    <th>Infill%</th>
                    <th>Sub Total</th>
                    <th>Quantity</th>
                    <th>Line Total</th>
                    <th>Printability Score</th>
                </tr>
                {list.map((x, i) => (
                    <Fragment key={i}>
                        <tr>
                            <td>{x.modelName}</td>
                            <td>{x.material}</td>
                            <td>{x.layerHeight}</td>
                            <td>{x.infill}</td>
                            <td>Rs. {x.subTotal}</td>
                            <td>{x.quantity}</td>
                            <td>Rs. {x.lineTotal}</td>
                            <td><ProgressCircular progress={x.score} /></td>
                        </tr>
                    </Fragment>
                ))}
            </table>
        </>
    )

}

export default TableDetail;