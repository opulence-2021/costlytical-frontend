//components
import { createTheme } from "@mui/material/styles";

export const ThemeOption = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#74CD63",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#f50057",
    },
    divider: "rgba(0,0,0,0.12)",
  },
});
