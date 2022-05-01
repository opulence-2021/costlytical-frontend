import { React } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Styles
import "./ListProjects.css";

// Components
import CustomButton from "../../../../components/CustomButton";

// Material table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ListProjects() {
  const { url } = useRouteMatch();

  const data1 = {
    columns: ["Date", "Project Name", "No. of Models"],

    list: [
      {
        date: "01/02/2022",
        projectName: "Stationary Set",
        noOfModels: 5,
      },
      {
        date: "02/03/2022",
        projectName: "Water Pump",
        noOfModels: 6,
      },
    ],
  };

  const data2 = {
    columns: [
      "Estimate No",
      "Date",
      "Project Name",
      "No. of Models",
      "Total Cost",
    ],

    list: [
      {
        estimateNo: "CE-003",
        date: "01/02/2022",
        projectName: "Stationary Set",
        noOfModels: 5,
        totalCost: 2500,
      },
      {
        estimateNo: "CE-004",
        date: "02/03/2022",
        projectName: "Water Pump",
        noOfModels: 6,
        totalCost: 1500,
      },
    ],
  };

  return (
    <>
      <h1 style={{ marginBottom: "25px" }}>Awaiting Projects</h1>

      {/* Table 1 */}
      <div
        style={{
          backgroundColor: "var(--lightGray)",
          borderRadius: "8px",
          padding: "30px",
          marginBottom: "50px",
        }}
      >
        <h3 style={{ marginBottom: "25px" }}>
          Projects waiting for Cost-estimate
        </h3>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {data1.columns.map((column, i) => (
                  <TableCell key={"culumn-" + i} style={{ fontWeight: "bold" }}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.list.map((row, i) => (
                <TableRow
                  key={"row-" + i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.noOfModels}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Table 2 */}
      <div
        style={{
          backgroundColor: "var(--lightGray)",
          borderRadius: "8px",
          padding: "30px",
          marginBottom: "50px",
        }}
      >
        <h3 style={{ marginBottom: "25px" }}>
          Projects waiting for response from the Service Provider
        </h3>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {data2.columns.map((column, i) => (
                  <TableCell key={"culumn-" + i} style={{ fontWeight: "bold" }}>
                    {column}
                  </TableCell>
                ))}

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.list.map((row, i) => (
                <TableRow
                  key={"row-" + i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.estimateNo}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.noOfModels}</TableCell>
                  <TableCell>Rs. {row.totalCost}</TableCell>
                  <TableCell>
                    <Link to={url + "/1"} re>
                      <CustomButton buttonName="Details"></CustomButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Table 3 */}
      <div
        style={{
          backgroundColor: "var(--lightGray)",
          borderRadius: "8px",
          padding: "30px",
        }}
      >
        <h3 style={{ marginBottom: "25px" }}>
          Projects undergoing manufacturing
        </h3>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {data2.columns.map((column, i) => (
                  <TableCell key={"culumn-" + i} style={{ fontWeight: "bold" }}>
                    {column}
                  </TableCell>
                ))}

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.list.map((row, i) => (
                <TableRow
                  key={"row-" + i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.estimateNo}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.noOfModels}</TableCell>
                  <TableCell>Rs. {row.totalCost}</TableCell>
                  <TableCell>
                    <Link to={url + "/1"}>
                      <CustomButton buttonName="Details"></CustomButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
