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
        clearAuth :  (state) => {
            return (state = {
                accessToken: null,
                refreshToken:null
            });
        },
    },
});

export const { setAuth , clearAuth } = authSlice.actions;
