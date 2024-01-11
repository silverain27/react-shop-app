import { createAsyncThunk } from "@reduxjs/toolkit/src/createAsyncThunk";
import { createSlice } from "@reduxjs/toolkit/src/createSlice";
import axios from "axios"


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async(thunkAPI) =>{
        try{
            const response = await axios.get("https://fakestoreapi.com/products")
            return response.data;
        }catch(error){
            thunkAPI.rejectwithValue
        }
    }
)

const initialState = {
    products:[],
    isLoading : false,
    error : "",
}

export const productsSlice = createSlice({
    name :'products',
    initialState,
    reducers:{},
    //reducer를 추가하면 프로미스 진행상태에 따라 리듀서를 실행 할 수 있음
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;

        })
        .addCase(fetchProducts.fulfilled,(state, action)=>{
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected ,(state, action)=>{
            state.isLoading = false
            state.products = action.payload
        })
        
    }
})