/* eslint-disable react/prop-types */
// @ts-nocheck
import "./CardProductInCartPage.css";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Badge,
  styled,
  IconButton,
} from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  descreseQuantity,
  increseQuantity,
} from "../../Redux/cartSlice";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardProductInCartPage = ({
  price,
  productName,
  imgProductInCard,
  description,
  quantity,
  item,
}) => {
  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: "primary",
    },
  }));

  // eslint-disable-next-line no-unused-vars
  const { selectedProducts } = useSelector((state) => state.cartt);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ width: { xs: "100%", sm: "70%" }, mx: "auto", my: 2, p: 1 }}>
      <Stack
        sx={{ p: 0, flexDirection: { xs: "column-reverse", sm: "row" } }}
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        justifyItems={"center"}
        flexWrap={"wrap"}
      >
        <Stack
          sx={{ mt: 1 }}
          justifyContent={"space-between"}
          alignItems={"center"}
          justifyItems={"center"}
          direction={"row"}
        >
          <IconButton
            onClick={() => {
              dispatch(deleteProduct(item));
            }}
          >
            <Delete />
          </IconButton>
          <Box>
            <IconButton
              onClick={() => {
                dispatch(increseQuantity(item));
              }}
              sx={{ mr: 2 }}
            >
              <Add />
            </IconButton>

            <StyledBadge badgeContent={quantity} color="primary" />

            <IconButton
              onClick={() => {
                dispatch(descreseQuantity(item));
              }}
              sx={{ ml: 2 }}
            >
              <Remove />
            </IconButton>
          </Box>
        </Stack>

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
              style={{
                all: "unset",
                cursor: "pointer",
                "&hover": { color: "red" },
              }}
              to={`/product-detalis/${item.id}`}
            >
              {" "}
              <Typography
                sx={{ fontSixe: "25px", fontWeight: "bold" }}
                variant="body1"
                component={"p"}
              >
                {productName}
              </Typography>{" "}
            </Link>
            <Typography
              sx={{ fontSize: "12px", my: 1 }}
              variant="body1"
              component={"p"}
            >
              {description}
            </Typography>
            <Typography
              sx={{ fontSixe: "25px", fontWeight: 600, color: "red" }}
              variant="body1"
              component={"p"}
            >
              ${Number(price * quantity).toFixed(2)}
            </Typography>
          </Box>

          <Box sx={{ border: "solid 1px ", p: 2, borderRadius: "10px" }}>
            <Link to={`/product-detalis/${item.id}`}>
              {" "}
              <img style={{ width: "80px" }} src={imgProductInCard} alt="" />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CardProductInCartPage;
