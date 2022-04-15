import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";

const ProgressCircular = ({ progress }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 2000);
  };
  const handleClick = () => {
    alert("Hii");
  };
  const open = Boolean(anchorEl);
  let progressLeft = 100 - progress;
  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          color="success"
          variant="determinate"
          value={progress}
        />
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
          <Typography
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            variant="caption"
            component="div"
            color="text.secondary"
          >
            {progress}
          </Typography>
          <Popover
            id="mouse-over-popover"
            onClick={handleClick}
            sx={{
              pointerEvents: "none",
              top: "5%",
              left: "38%",
              // minWidth: 175,
              width: "60%",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography
              sx={{ padding: 1, fontSize: 14, mb: 1, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              Model Printability Score is {progress}%
            </Typography>

            <Typography variant="body2" sx={{ padding: 1, minWidth: 75 }}>
              {progressLeft}% of total printing time is wasted on printing
              support materials. Try optimizing the model to prevent need for
              support materials. .
            </Typography>
            <CardActions>
              <Button size="small">
                <Link to="/www.google.com">Learn More about 3D printing</Link>
              </Button>
            </CardActions>
          </Popover>
        </Box>
      </Box>
    </>
  );
};

export default ProgressCircular;
