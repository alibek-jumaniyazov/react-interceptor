import { store } from "@/redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthState = {
    roles?: number[];
    accessToken?: string;
    refreshToken?: string;
};

export type LangState = {
    currentLang: string;
};
