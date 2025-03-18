import { useState } from "react";
import { Input } from "../Components/UI/Input";
import Label from "../Components/UI/Label";
import { Button } from "../Components/UI/Button";
import Loading from "../Components/Common/Loading";
import AuthService from "../Services/AuthService";
import { RegisterRequest } from "../Types/Requests/Auth/RegisterRequest";

const Register = () => {
  const [userData, setUserData] = useState<RegisterRequest>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("object");
      // const response = await AuthService.Register(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-4 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="text-start space-y-4">
          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="Email" />
            <Input
              func={(e) => setUserData({ ...userData, email: e.target.value })}
              style="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              textToDisplay="Enter your email"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="Password" />
            <Input
              func={(e) => setUserData({ ...userData, password: e.target.value })}
              style="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              textToDisplay="Enter your password"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="First Name" />
            <Input
              func={(e) => setUserData({ ...userData, firstname: e.target.value })}
              style="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              textToDisplay="Enter your first name"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="Last Name" />
            <Input
              func={(e) => setUserData({ ...userData, lastname: e.target.value })}
              style="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              textToDisplay="Enter your last name"
            />
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <Button
                        textToDisplay="Register"
                        style="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                    />
          )}
        </form>

        <div className="mt-4 text-center">
                <span className="text-gray-700">Don't have an account?</span>{" "}
                <a href="#" className="text-purple-600 hover:underline">
                     Login
                </a>
            </div>
      </div>
    </div>
  );
};

export default Register;
