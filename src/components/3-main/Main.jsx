import { Box, Container, Stack } from "@mui/material";
import "./Main.css";
import TitleSec from "../TitleSec";
import CardProduct from "../6-CardProduct/CardProduct";
import { productsData } from "../../ProductsData";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box className="main-Sec">
      <Container maxWidth="lg">
        <Box pt={2}>
          <TitleSec
            pragraph={"Top Selling Products for you"}
            title={"Products"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas."
            }
          />
        </Box>

        <Stack
          sx={{
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            justifyItems: "center",
          }}
        >
          {productsData.slice(0, 6).map((item) => {
            return (
              <CardProduct
                key={item.id}
                price={item.price}
                productName={item.productName}
                description={item.description}
                imgProductInCard={item.imgProductInCard}
                RatingProduct={item.RatingProduct}
                item={item}
              />
            );
          })}
        </Stack>
        <Link style={{ all: "unset", cursor: "pointer" }} to={"/products"}>
          <button data-aos="zoom-in" className="btn-all-product">
            all products
          </button>
        </Link>
      </Container>
    </Box>
  );
};

export default Main;
