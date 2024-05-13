// @ts-nocheck
import { Button, Divider, Stack, Typography, Paper, Box } from "@mui/material";
import CardProductInCartPage from "../components/7-CardProductInCartPage/CardProductInCartPage";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import TitleSec from "../components/TitleSec";

const Cart = () => {
  const { selectedProducts } = useSelector((state) => state.cartt);

  let subtotal = 0;
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 10, mt: 5 }}>
        <TitleSec
          pragraph={"Products in the cart"}
          title={"Cart Page"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas."
          }
        />
      </Box>

      <Box sx={{ overflowY: "scroll", maxHeight: "70vh" }}>
        {selectedProducts.map((item) => {
          subtotal += Number(item.price) * Number(item.quantity);
          return (
            <CardProductInCartPage
              key={item.id}
              price={item.price}
              productName={item.productName}
              description={item.description}
              imgProductInCard={item.imgProductInCard}
              quantity={item.quantity}
              item={item}
            />
          );
        })}
      </Box>

      <Paper sx={{ width: { xs: "80%", sm: "50%" }, mx: "auto", my: "60px" }}>
        <Typography align="center" variant="h6" p={2}>
          Cart Summary
        </Typography>
        <Divider />
        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">subtotal</Typography>
          <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
        </Stack>
        <Divider />
        <Button fullWidth color="primary" variant="contained">
          chckout
        </Button>
      </Paper>
    </Container>
  );
};

export default Cart;
