import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./user/user.slice"
import categoriesSlice from "./categories/categories.slice"
import productsSlice from "./products/products.slice"
import cartSlice from "./cart/cart.slice"
import productSlice from './products/product.slice'
import orderSlice from './order/order.slice'
//Root reducer createStore대신 configurestore를 사용한다. 
export const store = configureStore({
    reducer : {
        orderSlice,
        productSlice,
        cartSlice,
        userSlice,
        categoriesSlice,
        productsSlice
    }
})