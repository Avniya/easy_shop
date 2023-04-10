import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    name : string
    email : string
    image : string
}

const initialState : InitialState = {
    name : '',
    email : '',
    image : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        createUser : ( state, action : PayloadAction<InitialState>) => {
            state.name = action.payload.name,
            state.email = action.payload.email,
            state.image = action.payload.image
        },
        setName : (state, action : PayloadAction<string> ) => {
            state.name = action.payload
        },
        setEmail : (state, action : PayloadAction<string> ) => {
            state.email = action.payload
        },
        setImage : (state, action : PayloadAction<string> ) => {
            state.image = action.payload
        },
    }
});

export default userSlice.reducer;
export const { createUser, setName, setEmail, setImage } = userSlice.actions;