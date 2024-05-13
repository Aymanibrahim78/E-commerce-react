import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productsData } from "../ProductsData";
import { prodcutsPageDataFun } from "../Redux/cartSlice";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const CategorySec = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [alignment, setAlignment] = useState("all");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const dispatch = useDispatch();

  // @ts-ignore
  const categoryBTN = [
    "all",
    ...new Set(
      productsData.map((item) => {
        return item.category;
      })
    ),
  ];

  const filterByCategory = (cat) => {
    if (cat === "all") {
      dispatch(prodcutsPageDataFun(productsData));
    } else {
      const newArr = productsData.filter((item) => {
        return item.category === cat;
      });
      dispatch(prodcutsPageDataFun(newArr));
      // console.log(newArr)
    }
  };

  return (
    <Box sx={{ textAlign: "center", my: 5 }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {categoryBTN.map((item) => {
          return (
            <div data-aos="zoom-in-up" key={item}>
              <ToggleButton
                sx={{ mr: 2 }}
                onClick={() => {
                  filterByCategory(item);
                }}
                className="btn-category"
                color="primary"
                value={item}
              >
                {item}
              </ToggleButton>
            </div>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};

export default CategorySec;
