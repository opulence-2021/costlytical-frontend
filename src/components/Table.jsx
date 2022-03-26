import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
//style
import "./Table.css";

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
              <td className="td">{x.projectId}</td>
              <td className="td">{x.date}</td>
              <td className="td">{x.projectName}</td>
              <td className="td">Rs. {x.totalCost}</td>
              <td className="td">
                <Link to="/detail">
                  <CustomButton buttonName="Details"></CustomButton>
                </Link>
              </td>
            </tr>
          </Fragment>
        ))}
      </table>
    </>
  );
};

export default Table;
