/* eslint-disable react/prop-types */
// @ts-nocheck

import "./CardProduct.css";
import {
  Box,
  IconButton,
  Rating,
  Typography,
  styled,
  Badge,
} from "@mui/material";
import {
  addtoCart,
  descreseQuantity,
  increseQuantity,
} from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const CardProduct = ({
  price,
  productName,
  description,
  imgProductInCard,
  RatingProduct,
  item,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

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
  return (
    <Box className="box-card-product" data-aos="flip-left">
      <Link to={`/product-detalis/${item.id}`}>
        {" "}
        <img className="img-card-product" src={`${imgProductInCard}`} alt="" />
        <Rating
          name="read-only"
          precision={0.1}
          value={RatingProduct}
          readOnly
        />
      </Link>
      <Link
        style={{ all: "unset", cursor: "pointer" }}
        to={`/product-detalis/${item.id}`}
      >
        {" "}
        <Typography
          sx={{ fontWeight: "bolder" }}
          className="title-card-product"
          variant="body1"
        >
          {productName}
        </Typography>{" "}
      </Link>
      <Typography className="descraption-card-product" variant="body1">
        {description}
      </Typography>
      <Typography className="pirce-card-product" variant="body1">
        ${price}
      </Typography>
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
          <StyledBadge badgeContent={productQuantityy(item)} color="primary" />
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
        <button
          onClick={() => {
            dispatch(addtoCart(item));
          }}
          className="btn-card-product"
        >
          Add Cart
        </button>
      )}
    </Box>
  );
};

export default CardProduct;
