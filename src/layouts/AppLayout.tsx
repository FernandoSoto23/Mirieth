
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from '@/views/Header'
import 'react-toastify/dist/ReactToastify.css'
export default function AppLayout() {
    return (

        <>
            <Header />
            <Outlet />
            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>

    )
}
