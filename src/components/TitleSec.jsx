import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const TitleSec = ({ pragraph, title, description }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        data-aos="fade-up"
        sx={{ color: "#FEA928" }}
        variant="body1"
        component={"p"}
      >
        {pragraph}
      </Typography>
      <Typography
        data-aos="fade-up-right"
        sx={{ fontWeight: "bold", fontSize: "30px" }}
        variant="body1"
        component={"p"}
      >
        {title}
      </Typography>
      <Typography
        data-aos="fade-right"
        sx={{ fontSize: "12px" }}
        variant="body1"
        component={"p"}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default TitleSec;
