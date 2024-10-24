
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
export default function AuthLayout() {
    return (
        <div className="bg-gray-800">
            <Outlet />
            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </div>

    )
}
