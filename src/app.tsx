import { Suspense } from "react";
import { routes } from "@/routes";
import { RequireAuth } from "@/components";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <Routes>
            <Route path="/">
                {routes.public.map(({ id, path, element, fallback }) => (
                    <Route
                        key={id}
                        path={path}
                        element={
                            <Suspense fallback={fallback}>{element}</Suspense>
                        }
                    />
                ))}
                <Route element={<RequireAuth />}>
                    {routes.private.map(({ id, path, element, fallback }) => (
                        <Route
                            key={id}
                            path={path}
                            element={
                                <Suspense fallback={fallback}>
                                    {element}
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            </Route>
        </Routes>
    );
}
