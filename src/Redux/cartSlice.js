/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../ProductsData";
const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
  searchProducts: [],
  prodcutsPageData: productsData,

  // : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const productWithQuentity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuentity);
      state.selectedProductsID.push(productWithQuentity.id);
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    increseQuantity: (state, action) => {
      const increseProduct = state.selectedProducts.find((item) => {
        return action.payload.id === item.id;
      });
      increseProduct.quantity += 1;
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    descreseQuantity: (state, action) => {
      const descreseProduct = state.selectedProducts.find((item) => {
        return action.payload.id === item.id;
      });
      descreseProduct.quantity -= 1;

      if (descreseProduct.quantity <= 0) {
        const deldeleteProductFilter = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.selectedProducts = deldeleteProductFilter;

        const deldeleteProductIdFilter = state.selectedProductsID.filter(
          (item) => {
            return item !== action.payload.id;
          }
        );
        state.selectedProductsID = deldeleteProductIdFilter;

        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    deleteProduct: (state, action) => {
      const deldeleteProductFilter = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectedProducts = deldeleteProductFilter;
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );

      const deldeleteProductIdFilter = state.selectedProductsID.filter(
        (item) => {
          return item !== action.payload.id;
        }
      );
      state.selectedProductsID = deldeleteProductIdFilter;
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    filterBySreach: (state, action) => {
      state.searchProducts = action.payload;
    },
    prodcutsPageDataFun: (state, action) => {
      state.prodcutsPageData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addtoCart,
  increseQuantity,
  descreseQuantity,
  deleteProduct,
  filterBySreach,
  prodcutsPageDataFun,
} = counterSlice.actions;

export default counterSlice.reducer;
