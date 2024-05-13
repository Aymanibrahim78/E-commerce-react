// @ts-nocheck
/* eslint-disable react/prop-types */

import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme, Badge, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { productsData } from '../../ProductsData';

const Header1 = ({ setShowMenuMob, setMode, filterBySearch }) => {
  const navigate = useNavigate();
  const { selectedProducts } = useSelector((state) => state.cartt);

  const [fixed, setFixed] = useState("relative");
  const [searchValue, setSearchValue] = useState("");

  

  window.addEventListener("scroll", () => {
    if (scrollY >= 30) {
      setFixed("fixed");
    } else {
      setFixed("relative");
    }
  });
  const theme = useTheme();
  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      position: "absolute",
      top: "-10px",
      right: "-39px",
      fontWeight: "bolder",

      padding: "10px",
    },
  }));
  const onSearch = () => {
    filterBySearch(searchValue);
  };

  return (
    <Box sx={{ position: fixed }} className="headerSec-1">
      <Container className="bolder" maxWidth="lg">
        <Stack
          className="headersec1"
          flexWrap={"wrap"}
          gap={2}
          alignItems={"center"}
          sx={{ justifyContent: "space-between", flexDirection: "row" }}
        >
          <Link style={{ all: "unset" }} to={"/"}>
            <Box sx={{ cursor: "pointer" }}>
              <Stack direction={"row"} alignItems={"center"}>
                <img
                  style={{ width: "30px" }}
                  src="https://mrkzgulfup.com/uploads/171556500390543.png"
                  alt=""
                />
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", fontWeight: "bold", ml: 1 }}
                >
                  Shopsy
                </Typography>
              </Stack>
            </Box>
          </Link>

          <Box>
            <Stack
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}
              gap={2}
            >
              <form
                className="box-search"
                onSubmit={(eo) => {
                  eo.preventDefault();
                  onSearch();
                  navigate("/search");
                  setSearchValue("");
                }}
              >
                <input
                  value={searchValue}
                  onChange={(eo) => {
                    setSearchValue(eo.target.value);
                  }}
                  className="input-search"
                  type="search"
                  placeholder="search.."
                />
                <button className="btn-search" type="submit">
                  {" "}
                  <Search sx={{ fontSize: "20px" }} />{" "}
                </button>
              </form>

              <Stack
                className="headerIcon"
                direction={"row"}
                alignItems={"center"}
                gap={2}
              >
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <Link to={"/cart"}>
                    <Box
                      sx={{
                        bgcolor: "#FEA928",
                        color: "#fff",
                        py: 0.2,
                        px: 2.5,
                        mx: 1,
                        borderRadius: "20px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      <StyledBadge
                        badgeContent={selectedProducts.length}
                        color="primary"
                      />

                      <ShoppingCart />
                    </Box>
                  </Link>
                  <Box
                    onClick={() => {
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );

                      localStorage.setItem(
                        "theme",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                    }}
                  >
                    <img
                      style={{ width: "80px", cursor: "pointer" }}
                      src={
                        theme.palette.mode === "dark"
                          ? "https://mrkzgulfup.com/uploads/171556500376081.png"
                          : "https://mrkzgulfup.com/uploads/171556500382932.png"
                      }
                      alt=""
                    />
                  </Box>
                </Stack>

                <button
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenuMob("block");
                    }, 300);
                  }}
                  className="btn-menu"
                >
                  <Menu />{" "}
                </button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
