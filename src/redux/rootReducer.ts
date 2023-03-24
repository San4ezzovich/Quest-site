import state from "./store";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

interface RootState {
    firstLevel: {
        stopExplanation: boolean;
    }
}


const explanationList = state.messages.firstLevel.explanation;


interface FirstLevelState {
    text: string;
    stopExplanation: boolean;
}
const initialState:FirstLevelState = {
    text: '',
    stopExplanation: false,

};


export const explanationAction = createAsyncThunk(
    'firstLevel/explanationAction',
    async (_, thunkAPI) => {
        for (let i = 0; i < explanationList.length; i++) {
            const stop = (thunkAPI.getState() as RootState).firstLevel.stopExplanation;

            if (stop) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 3000));

            thunkAPI.dispatch(explanation(i));
        }
    }
);

const introduction = createSlice({
    name:'firstLevel',
    initialState,
    reducers:{
        explanation:(state, action)=>{
            if (action.payload+1 <explanationList.length){
                state.text = explanationList[action.payload];
            }
        },
        stopExplanation: (state) => {
            console.log('dispatched')
            state.stopExplanation = true;
            state.text = ' ';
        },
    }
})



export const { explanation, stopExplanation } = introduction.actions;



const store = configureStore({
    reducer: {
        firstLevel: introduction.reducer,
    },
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;