import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegistersPage } from "../pages"
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> }/>
        <Route path="register" element={ <RegistersPage /> }/>

        <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
    </Routes>
  )
}

