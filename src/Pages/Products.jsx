import { Box, Container, Stack } from "@mui/material";
import CardProduct from "../components/6-CardProduct/CardProduct";
import TitleSec from "../components/TitleSec";
import CategorySec from "../components/CategorySec";
import { useSelector } from "react-redux";

const Products = () => {
  // @ts-ignore
  const { prodcutsPageData } = useSelector((state) => state.cartt);

  return (
    <Container maxWidth="lg">
      <Box pt={6}>
        <TitleSec
          pragraph={"Top Selling Products for you"}
          title={"All Products"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas."
          }
        />
      </Box>

      <CategorySec />

      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          justifyItems: "center",
          my: 3,
        }}
      >
        {prodcutsPageData.map((item) => {
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
    </Container>
  );
};

export default Products;
