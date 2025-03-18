import { useState } from "react";
import { Auth } from "./Auth";
import Register from "./Register";

export default function AuthenticationPage() {
    const [activePage, setActivePage] = useState<string>("login");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="flex mb-6">
                    <button
                        className={`w-1/2 text-center py-3 font-semibold transition duration-300 
                        ${activePage === "login" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setActivePage("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 text-center py-3 font-semibold transition duration-300 
                        ${activePage === "register" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setActivePage("register")}
                    >
                        Register
                    </button>
                </div>

                {activePage === "login" ? <Auth /> : <Register />}
            </div>
        </div>
    );
}
