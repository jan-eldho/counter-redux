import { createSlice } from "@reduxjs/toolkit";

//to initialize the file as slice we use a method createslice()
export const counterSlice=createSlice({
//name has no importance
    name:'counterApp',
    //initial state creation
    initialState:{
        value:0
    },
    reducers:{
        //logic to update the value
        //action are created inside the reducers
        incrment:(state,data)=>{
            if(!data.payload)
            {
                state.value+=1
            }else{

                state.value=state.value+ data.payload

            }

            
        },
        decrment:(state,data)=>{
            if(!data.payload)
            {
                state.value-= 1
            }
            else{
                state.value-= data.payload
            }
           
        },
        rst:(state)=>{
            state.value=0
        }
    }
})

export const {incrment,decrment,rst}=counterSlice.actions;
export default counterSlice.reducer;