import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
    accessToken: string | null;
    refreshToken: string | null;
};

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<AuthState>) => {
            return (state = payload);
        },
    },
});

export const { setAuth } = authSlice.actions;
