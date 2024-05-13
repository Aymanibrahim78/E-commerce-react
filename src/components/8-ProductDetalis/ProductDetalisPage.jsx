// @ts-nocheck
import {
  Button,
  Container,
  IconButton,
  styled,
  Badge,
  Box,
  Rating,
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import "./ProductDetalisPage.css";
import { productsData } from "../../ProductsData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import {
  addtoCart,
  descreseQuantity,
  increseQuantity,
} from "../../Redux/cartSlice";
import CardProduct from "../6-CardProduct/CardProduct";
import { useState } from "react";
import NotFound from "../../Pages/NotFound";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import TitleSec from "../../components/TitleSec";
const ProductDetalisPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let { ID } = useParams();
  const item = productsData[Number(ID) - 1];
  // const [selectedImg, setSelectedImg] = useState(item.imgProductInCard);
  const [selectedImg, setSelectedImg] = useState(0);

  const [alignment, setAlignment] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: "primary",
    },
  }));
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.cartt
  );
  const dispatch = useDispatch();

  const productQuantityy = (itemProduct) => {
    const productQuantityy = selectedProducts.find((itemInCart) => {
      return itemInCart.id === itemProduct.id;
    });

    return productQuantityy.quantity;
  };

  const newArr = productsData.filter((itemCatAll) => {
    if (item) {
      return itemCatAll.category === item.category;
    }
  });

  if (item) {
    return (
      <Container maxWidth="lg">
        <div data-aos="fade-up" data-aos-duration="3000" className="app">
          <div className="details">
            <div className="big-img">
              <img
                data-aos="zoom-out-up"
                src={item.imgProductInProductDetalisPage[selectedImg]?item.imgProductInProductDetalisPage[selectedImg]:item.imgProductInCard}
                alt="5"
              />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.productName}</h2>
                <span>${item.price}</span>
              </div>

              <p>{item.description}</p>
              <Rating
                name="read-only"
                precision={0.1}
                value={item.RatingProduct}
                readOnly
              />

              <Box>
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "12px",
                    transition: "all 0.5s",
                    "&:hover": { color: "red", cursor: "pointer" },
                  }}
                  variant="body1"
                >
                  Category : {item.category}{" "}
                </Typography>
              </Box>

              {selectedProductsID.includes(item.id) ? (
                <Box>
                  <IconButton
                    onClick={() => {
                      dispatch(increseQuantity(item));
                    }}
                    sx={{ mr: 2 }}
                  >
                    <Add />
                  </IconButton>
                  <StyledBadge
                    badgeContent={productQuantityy(item)}
                    color="primary"
                  />
                  <IconButton
                    onClick={() => {
                      dispatch(descreseQuantity(item));
                    }}
                    sx={{ ml: 2 }}
                  >
                    <Remove />
                  </IconButton>
                </Box>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(addtoCart(item));
                  }}
                  sx={{
                    textTransform: "capitalize",
                    p: 1,
                    lineHeight: 1.1,
                    display: "block",
                    mt: 1,
                  }}
                  variant="contained"
                  color="primary"
                >
                  Add To Cart
                </Button>
              )}

              <Stack
                direction={"row"}
                gap={1}
                flexWrap={"wrap"}
                justifyContent={"center"}
                sx={{ mt: 5 }}
              >
                {item.imgProductInProductDetalisPage.map((item, index) => {
                  return (
                    <ToggleButtonGroup
                      value={alignment}
                      exclusive
                      onChange={handleAlignment}
                      aria-label="text alignment"
                      key={item}
                      sx={{
                        ".Mui-selected": {
                          opacity: "1",
                        },
                      }}
                    >
                      <ToggleButton
                        sx={{
                          p: 0,
                          opacity: "0.5",
                          width: "70px",
                          height: "70px",
                        }}
                        value={index}
                      >
                        <img
                          onClick={() => {
                            setSelectedImg(index);
                          }}
                          style={{
                            width: "100%",
                            padding: "5px",
                            height: "100%",
                            cursor: "pointer",
                          }}
                          src={item}
                          alt=""
                        />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  );
                })}
              </Stack>
            </div>
          </div>
        </div>

        <TitleSec pragraph={"More Category"} title={item.category} />

        <Stack
          sx={{
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            justifyItems: "center",
            mb: 5,
          }}
        >
          {newArr.map((item) => {
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
  } else {
    return <NotFound />;
  }
};

export default ProductDetalisPage;
