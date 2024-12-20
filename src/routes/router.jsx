import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Details from "../components/Details/Details";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";


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
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: async ({params}) => {
                    const res = await fetch("/service.json");
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData
                }
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            }
        ]
    }
]) 

export default router
    