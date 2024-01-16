import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async(category, thunkAPI) =>{
        try{
            let response;
            console.log("category : ", category)
            if(category){
                response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)

            }
            else {
                response = await axios.get("https://fakestoreapi.com/products")
                
            }

            
            console.log("###",response )
            return response.data;
        }catch(error){
            thunkAPI.rejectwithValue("Error loading products")
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

export default productsSlice.reducer