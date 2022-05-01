import { React } from "react";

// Material UI
import {
  Card,
  CardContent,
  CircularProgress,
  Box,
  Typography,
  TableCell,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

// Layouts
import { AppLayout } from "../../layouts/AppLayout/AppLayout";

const data = {
  columns: [
    "Model Name",
    "Material",
    "Layer Height",
    "Infil%",
    "Sub Total",
    "Quantity",
    "Line Total",
    "Printability Score",
  ],

  list: [
    {
      modelName: "Base v2",
      material: "PLA+",
      layerHeight: "0.28mm",
      infilPercent: "20%",
      subTotal: 1000,
      quantity: 1,
      lineTotal: 500,
      printabilityScore: 75,
    },
    {
      modelName: "Propeller v2",
      material: "PLA+",
      layerHeight: "0.28mm",
      infilPercent: "20%",
      subTotal: 1000,
      quantity: 1,
      lineTotal: 500,
      printabilityScore: 75,
    },
  ],
};

export default function ProjectDetailsPage() {
  return (
    <>
      <AppLayout>
        {/* Header */}
        <div
          style={{
            backgroundColor: "var(--lightGray)",
            borderRadius: "8px",
            padding: "30px",
            marginBottom: "50px",
          }}
        >
          <Card>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div className="text-large font-weight-bold">Water Pump</div>
                <div
                  className="text-small"
                  style={{ color: "var(--darkGray)" }}
                >
                  Created by John Harry
                </div>
              </div>

              <div className="text-large font-weight-bold">
                Estimate No: 001
              </div>

              <div className="font-weight-bold">Total Value: Rs. 1500</div>

              <div>
                <CircularProgressWithLabel value={75} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          style={{
            backgroundColor: "var(--lightGray)",
            borderRadius: "8px",
            padding: "30px",
            marginBottom: "50px",
          }}
        >
          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {data.columns.map((column, i) => (
                    <TableCell
                      key={"culumn-" + i}
                      style={{ fontWeight: "bold" }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.list.map((row, i) => (
                  <TableRow
                    key={"row-" + i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.modelName}</TableCell>
                    <TableCell>{row.material}</TableCell>
                    <TableCell>{row.layerHeight}</TableCell>
                    <TableCell>{row.infilPercent}</TableCell>
                    <TableCell>Rs. {row.subTotal}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>Rs. {row.lineTotal}</TableCell>
                    <TableCell>
                      <CircularProgressWithLabel
                        value={row.printabilityScore}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>{" "}
        </div>
      </AppLayout>
    </>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" color="success" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
