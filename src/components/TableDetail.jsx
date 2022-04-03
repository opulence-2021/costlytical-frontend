import React, { Fragment } from "react";
import "./TableDetail.css";
import ProgressCircular from "./ProgressCircular";

const TableDetail = ({ list }) => {
  return (
    <>
      <table>
        <tr>
          <th>Model Name</th>
          <th>Material</th>
          <th>Layer Height</th>
          <th>Sub Total</th>
          <th>Quantity</th>
          <th>Line Total</th>
          <th>Printability Score</th>
        </tr>
        {list.map((x, i) => (
          <Fragment key={i}>
            <tr>
              <td>{x.modelName}</td>
              <td>{x.materialName}</td>
              <td>{x.layerHeight}mm</td>
              <td>Rs. {x.lineTotal}</td>
              <td>{x.modelQuantity}</td>
              <td>Rs. {x.subTotal}</td>
              <td>
                <ProgressCircular progress={x.printabilityScore} />
              </td>
            </tr>
          </Fragment>
        ))}
      </table>
    </>
  );
};

export default TableDetail;
