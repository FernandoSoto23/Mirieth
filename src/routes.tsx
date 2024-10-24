import { BrowserRouter, Route, Routes } from "react-router-dom";


import MembershipView from "./views/memberships/MembershipView";
import AppLayout from "./layouts/AppLayout";
import CustomerView from "./views/customer/CustomerView";
import Login from "./views/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import RegisterAccount from "./views/auth/RegisterAccount";
import ConfirmAccount from "./views/auth/ConfirmAccount";
import RegisterUserCompany from "./views/auth/RegisterUserCompany";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<></>}/>
                    <Route path="/customer" element={<CustomerView/>}/>
                    <Route path="/membership" element={<MembershipView/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register" element={<RegisterAccount/>}/>
                    <Route path="/auth/register-user-company" element={<RegisterUserCompany/>}/>
                    <Route path="/auth/confirm-account" element={<ConfirmAccount/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
