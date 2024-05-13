import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";
import { Box, Container, Stack, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  return (
    <Box className="hero-sec">
      <Container maxWidth="lg">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={200}
        >
          <SwiperSlide>
            <Stack
              gap={2}
              flexWrap={"wrap"}
              alignItems={"center"}
              sx={{
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                mb: 5,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "bolder" }}
                  variant="h5"
                  component="p"
                >
                  {"70% off on all Women's Wear"}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px" }}
                  variant="h5"
                  component="p"
                >
                  {" "}
                  {
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugit?"
                  }
                </Typography>
                <button className="btn-hero">order now</button>
              </Box>
              <Box>
                <img
                  className="imgHero"
                  style={{ width: "400px", height: "300px" }}
                  src="https://mrkzgulfup.com/uploads/171556099905811.png"
                  alt=""
                />
              </Box>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack
              gap={2}
              flexWrap={"wrap"}
              alignItems={"center"}
              sx={{
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                mb: 5,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "bolder" }}
                  variant="h5"
                  component="p"
                >
                  {"30% off on all mens Wear"}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px" }}
                  variant="h5"
                  component="p"
                >
                  {" "}
                  {
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugit?"
                  }
                </Typography>
                <button className="btn-hero">order now</button>
              </Box>
              <Box>
                <img
                  className="imgHero"
                  style={{ width: "400px", height: "300px" }}
                  src="https://mrkzgulfup.com/uploads/171556099916972.png"
                  alt=""
                />
              </Box>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack
              gap={2}
              flexWrap={"wrap"}
              alignItems={"center"}
              sx={{
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                mb: 5,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "bolder" }}
                  variant="h5"
                  component="p"
                >
                  {"50% off on all Women's Wear"}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px" }}
                  variant="h5"
                  component="p"
                >
                  {" "}
                  {
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugit?"
                  }
                </Typography>
                <button className="btn-hero">order now</button>
              </Box>
              <Box>
                <img
                  className="imgHero"
                  style={{ width: "400px", height: "300px" }}
                  src="https://mrkzgulfup.com/uploads/171556099924443.png"
                  alt=""
                />
              </Box>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Hero;
