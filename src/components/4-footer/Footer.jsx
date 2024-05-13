import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  PhoneAndroid,
} from "@mui/icons-material";
import "./Footer.css";
import { Box, Stack, Typography, Container } from "@mui/material";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box className="footer-back-ground">
      <Container maxWidth="lg">
        <Stack
          data-aos="zoom-out-up"
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { xs: "50%", sm: "25%" } }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <img
                style={{ width: "40px" }}
                src="https://mrkzgulfup.com/uploads/171556500390543.png"
                alt=""
              />
              <Typography
                sx={{ fontSize: "25px", fontWeight: "bolder", ml: 1 }}
                variant="body1"
              >
                Shopsy
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: "12px", mt: 1 }} variant="body1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              ducimus tempora iure accusamus quidem odit impedit rem quae?
              Itaque sed officia eveniet ea{" "}
            </Typography>
          </Box>

          <Box sx={{ width: { xs: "50%", sm: "25%" } }}>
            <Typography
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                fontSize: "25px",
              }}
              variant="body1"
            >
              Important Links
            </Typography>
            <nav>
              <ul>
                <li className="item-link-in-footer">Home</li>
                <li className="item-link-in-footer">About</li>
                <li className="item-link-in-footer">Contact</li>
                <li className="item-link-in-footer">Blog</li>
              </ul>
            </nav>
          </Box>

          <Box sx={{ width: { xs: "50%", sm: "25%" } }}>
            <Typography
              sx={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                fontSize: "25px",
              }}
              variant="body1"
            >
              Important Links
            </Typography>
            <nav>
              <ul>
                <li className="item-link-in-footer">Home</li>
                <li className="item-link-in-footer">About</li>
                <li className="item-link-in-footer">Contact</li>
                <li className="item-link-in-footer">Blog</li>
              </ul>
            </nav>
          </Box>

          <Box sx={{ width: { xs: "50%", sm: "25%" } }}>
            <Stack
              sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
            >
              <FacebookOutlined />
              <Instagram />
              <LinkedIn />
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                my: 2,
              }}
            >
              <LocationOn />
              <Typography variant="body1">Noida, Uttar Pradesh</Typography>
            </Stack>

            <Stack
              sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
            >
              <PhoneAndroid />
              <Typography variant="body1">+91 123456789</Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
