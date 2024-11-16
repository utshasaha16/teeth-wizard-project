import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-extrabold ml-4">TEETH WIZARD</h1>
            </div>
            <div className="space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allTreatments">All Treatments</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/myAppointments">My Appointments</NavLink>
            </div>
            <div>
                <button className="btn btn-primary mr-4">Login</button>
            </div>
        </div>
    );
};

export default Navbar;