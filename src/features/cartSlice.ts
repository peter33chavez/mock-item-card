import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ItemInfo } from "interfaces/ItemInfo";
import { Variant } from "interfaces/Variant";


export interface CartState {
  items: Variant[] | []
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Variant>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }
      state.items = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

export const selectCartItemsWithId = (state:any, id:number) =>
  state.cart.items.filter((item:any) => item.id === id);

export const selectCartTotal = (state:any) =>
  state.cart.items.reduce((total:number, item:any) => (total += item.price), 0);

export default cartSlice.reducer;