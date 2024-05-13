// @ts-nocheck
import {
  Box,
  Paper,
  Stack,
  Typography,
  Container,
  Rating,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const SearchPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { searchProducts } = useSelector((state) => state.cartt);

  
  if (searchProducts) {
    return (
      <Container maxWidth="lg">
        {searchProducts.map((item) => {
          return (
            <Paper
              data-aos="zoom-in"
              key={item.id}
              sx={{ width: { xs: "100%", sm: "70%" }, mx: "auto", my: 2, p: 1 }}
            >
              <Stack
                sx={{
                  p: 0,
                  flexDirection: { xs: "column-reverse", sm: "row" },
                }}
                direction={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                justifyItems={"center"}
                flexWrap={"wrap"}
              >
                <Stack
                  sx={{ width: { xs: "100%", sm: "60%" } }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  justifyItems={"center"}
                  direction={"row"}
                  gap={2}
                >
                  <Box sx={{ width: "100%" }}>
                    <Link
                      style={{ all: "unset", cursor: "pointer" }}
                      to={`/product-detalis/${item.id}`}
                    >
                      {" "}
                      <Typography
                        sx={{ fontSixe: "25px", fontWeight: "bold" }}
                        variant="body1"
                        component={"p"}
                      >
                        {item.productName}
                      </Typography>{" "}
                    </Link>
                    <Typography
                      sx={{ fontSize: "12px", my: 1 }}
                      variant="body1"
                      component={"p"}
                    >
                      {" "}
                      {item.description}{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSixe: "25px", fontWeight: 600, color: "red" }}
                      variant="body1"
                      component={"p"}
                    >
                      ${item.price}
                    </Typography>
                    <Rating
                      name="read-only"
                      precision={0.1}
                      value={item.RatingProduct}
                      readOnly
                    />
                  </Box>

                  <Box
                    sx={{ border: "solid 1px ", p: 2, borderRadius: "10px" }}
                  >
                    <Link to={`/product-detalis/${item.id}`}>
                      {" "}
                      <img
                        style={{ width: "80px" }}
                        src={item.imgProductInCard}
                        alt=""
                      />
                    </Link>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          );
        })}
      </Container>
    );
  } else {
    return <NotFound />;
  }
};

export default SearchPage;
