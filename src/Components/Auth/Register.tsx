import { useState } from "react";
import { Input } from "../UI/Input";
import Label from "../UI/Label";
import { Button } from "../UI/Button";
import Loading from "../Common/Loading";
import AuthService from "../../Services/AuthService";
import { RegisterRequest } from "../../Types/Requests/Auth/RegisterRequest";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState<RegisterRequest>({email: "",password: "",firstname: "",lastname: ""});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors,setErrors] = useState<[]|null>(null)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       const response = await AuthService.Register(userData);
       Navigate({to:"/"})
    } catch (error:any) {
      console.log(error);
      setErrors(error)
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
              style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              textToDisplay="Enter your email"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="Password" />
            <Input
              func={(e) => setUserData({ ...userData, password: e.target.value })}
              style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              textToDisplay="Enter your password"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="First Name" />
            <Input
              func={(e) => setUserData({ ...userData, firstname: e.target.value })}
              style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              textToDisplay="Enter your first name"
            />
          </div>

          <div>
            <Label style="block text-gray-700 mb-2" textToDisplay="Last Name" />
            <Input
              func={(e) => setUserData({ ...userData, lastname: e.target.value })}
              style="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              textToDisplay="Enter your last name"
            />
          </div>
          {errors && errors.map((element,index)=>{
                return <p className="text-red-500 text-start" key={index}>*{element}</p>})
            }
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
    </div>
  );
};

export default Register;
