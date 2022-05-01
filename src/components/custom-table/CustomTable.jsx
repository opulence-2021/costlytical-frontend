import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
//style
import "./Table.css";

const Table = ({ columns, list }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={"culumn-" + i}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {list.map((x, i) => (
            <tr key={i}>
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
