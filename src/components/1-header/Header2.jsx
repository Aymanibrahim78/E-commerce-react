/* eslint-disable react/prop-types */
import { Close, Search } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header2 = ({ showMenuMob, setShowMenuMob, filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    filterBySearch(searchValue);
  };

  return (
    <Box className="header2">
      <Container maxWidth="md">
        <Box>
          <nav className="nav-link-lg-screen">
            <ul className="list-link">
              <Link style={{ all: "unset" }} to={"/"}>
                <li className="item-link">Home</li>
              </Link>
              <Link style={{ all: "unset" }} to={"/Products"}>
                <li className="item-link">Products</li>
              </Link>
              <Link style={{ all: "unset" }} to={"/faq"}>
                <li className="item-link">FQA</li>
              </Link>

              {/* <li className="item-link" >Kids Wear</li>
           <li className="item-link" >Mens Wear</li>
           <li className="item-link" >Electronics</li>
           <li className="item-link" >Trending Products</li> */}
            </ul>
          </nav>
        </Box>

        <Box sx={{ display: showMenuMob }} className="menu-mob">
          <Box className="menu-btn-mob">
            <button
              onClick={() => {
                setShowMenuMob("none");
              }}
              className="btn-cancel"
            >
              {" "}
              <Close />
            </button>

            <form
              className="box-search-mob "
              onSubmit={(eo) => {
                eo.preventDefault();
                onSearch();
                navigate("/search");
                setShowMenuMob("none");
                setSearchValue("");
              }}
            >
              <input
                value={searchValue}
                onChange={(eo) => {
                  setSearchValue(eo.target.value);
                }}
                className="input-search-mob"
                type="search"
                placeholder="search.."
              />
              <button className="btn-search-mob" type="submit">
                {" "}
                <Search sx={{ fontSize: "20px" }} />{" "}
              </button>
            </form>

            <nav className="nav-link-mob">
              <ul className="list-link-mob">
                <Link
                  style={{ all: "unset" }}
                  onClick={() => {
                    setShowMenuMob("none");
                  }}
                  to={"/"}
                >
                  <li className="item-link">Home</li>
                </Link>
                <Link
                  style={{ all: "unset" }}
                  onClick={() => {
                    setShowMenuMob("none");
                  }}
                  to={"/Products"}
                >
                  <li className="item-link">Products</li>
                </Link>
                <Link
                  style={{ all: "unset" }}
                  onClick={() => {
                    setShowMenuMob("none");
                  }}
                  to={"/faq"}
                >
                  <li className="item-link">FAQ</li>
                </Link>
                {/* <li className="item-link-mob" >Kids Wear</li>
            <li className="item-link-mob" >Mens Wear</li>
            <li className="item-link-mob" >Electronics</li>
            <li className="item-link-mob" >Trending Products</li> */}
              </ul>
            </nav>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header2;
