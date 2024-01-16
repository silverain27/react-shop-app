import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async(userId, thunkAPI) =>{
        try{
            const response = await axios.get(`https://65a6160274cf4207b4ef3eb2.mockapi.io/orders?search=${userId}`)
            return response.data

        }catch(err){
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

const initialState = {
    order: [] ,
    isLoading: false,
    error: ""
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            })
    }
})

export default orderSlice.reducer;