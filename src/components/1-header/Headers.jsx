/* eslint-disable react/prop-types */
import Header1 from "./Header1";
import Header2 from "./Header2";
import "./Header.css";
import { useState } from "react";
import { productsData } from "../../ProductsData";
import { useDispatch } from "react-redux";
import { filterBySreach } from "../../Redux/cartSlice";

const Headers = ({ setMode }) => {
  const [showMenuMob, setShowMenuMob] = useState("none");

  const dispatch = useDispatch();

  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = productsData.filter((item) => {
        return item.productName === word;
      });
      dispatch(filterBySreach(newArr));
    }
  };

  return (
    <>
      <Header1
        filterBySearch={filterBySearch}
        setMode={setMode}
        setShowMenuMob={setShowMenuMob}
      />
      <Header2
        showMenuMob={showMenuMob}
        setShowMenuMob={setShowMenuMob}
        filterBySearch={filterBySearch}
      />
    </>
  );
};

export default Headers;
