import ReactDOM from "react-dom/client";
import { App } from "./app";
import { Provider } from "react-redux";
import { persister, store } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persister}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </QueryClientProvider>
);
