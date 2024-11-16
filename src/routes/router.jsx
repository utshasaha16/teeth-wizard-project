import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:async () => {
                    const serviceRes = await fetch("/service.json");
                    const serviceData = await serviceRes.json()

                    const feedBackRes = await fetch("/happyclients.json");
                    const feedBackData = await feedBackRes.json()

                    return{serviceData, feedBackData}
                }
            },
            {
                path: "/allTreatments",
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch("/service.json")
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/myAppointments",
                element: <MyAppointments></MyAppointments>
            }
        ]
    }
]) 

export default router
    