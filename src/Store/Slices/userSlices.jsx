import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"product_listing",
    initialState:[],
    reducers:{
        addProduct(state,action){
            state.push({...action.payload,id:Date.now()})
        },
        deleteProduct(state,action){
            state.pop(action.payload)
        },
        UpdateProduct(state,action){
            const index=state.findIndex((product)=>product.id === action.payload.id);
            if(index!==(-1)){
                state[index]=action.payload;
            }
        }
    }
})

export const {addProduct,deleteProduct,UpdateProduct} = userSlice.actions;
export default userSlice;