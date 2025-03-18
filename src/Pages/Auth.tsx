import React, { useState } from "react";
import { Button } from "../Components/UI/Button";
import { Input } from "../Components/UI/Input";
import Label from "../Components/UI/Label";
import Loading from "../Components/Common/Loading";
import AuthService from "../Services/AuthService";
import { useDispatch } from "react-redux";
import { SETAUTHENTICATION } from "../State/AuthSlice";
import { AuthRequest } from "../Types/Requests/Auth/AuthRequest";
import { AuthResponse } from "../Types/Responses/AuthType";
import { useNavigate } from "react-router-dom";

function Auth() {
    const [user, setUser] = useState<AuthRequest>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response: AuthResponse = await AuthService.Authenticate(user);
            dispatch(SETAUTHENTICATION(response));
            navigate("/main");
        } catch (error: any) {
            setError("Invalid email or password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Login to Your Account
            </h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={HandleSubmit} className="text-start">
                <div className="mb-4">
                    <Label style="block text-gray-700 mb-2" textToDisplay="Email" />
                    <Input
                        func={(e) => setUser({ ...user, email: e.target.value })}
                        textToDisplay="Enter your email"
                        style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                        />
                </div>

                <div className="mb-4">
                    <Label style="block text-gray-700 mb-2" textToDisplay="Password" />
                    <Input
                        func={(e) => setUser({ ...user, password: e.target.value })}
                        textToDisplay="Enter your password"
                        style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                        />
                </div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <Button
                        textToDisplay="Login"
                        style="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                    />
                )}
            </form>

          
        </div>
    );
}

export { Auth };
