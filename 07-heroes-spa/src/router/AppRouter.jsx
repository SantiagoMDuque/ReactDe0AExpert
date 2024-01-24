import { Routes, Route } from "react-router-dom"
import { HeroesRouters } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./publicRoute";

export const AppRouter = () => {
  return (
    <>    
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRouters/>
          </PrivateRoute>
        }/>
      </Routes>
    </>
  )
}

