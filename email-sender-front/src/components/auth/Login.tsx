import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import closeEye from "../../assets/closeEye.svg";
import openEye from "../../assets/openEye.svg";

export const Login = () => {
  const [enable, setEnable] = useState(false);
  return (
    <div className="poppins w-screen h-screen bg-zinc-900 flex items-center justify-center">
      <form className="flex  flex-col  items-center border border-white w-72 rounded-lg py-5">
        <div className=" grid px-5 w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="font-medium text-lg text-white">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="px-2 py-2 font-medium text-base text-gray-300"
          />
        </div>
        <div className="relative mt-4 grid px-5 w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password" className="font-medium text-lg text-white">
            Password
          </Label>
          <Input
            type={enable ? "text" : "password"}
            id="password"
            placeholder="Password"
            name="password"
            className="relative px-2 py-2 font-medium text-base text-gray-300"
          />
          {enable ? (
            <img
              src={openEye}
              alt="eye"
              onClick={() => setEnable(!enable)}
              className="absolute w-6 top-10 right-8"
            />
          ) : (
            <img
              src={closeEye}
              alt="closeEye"
              onClick={() => setEnable(!enable)}
              className="absolute w-6 top-10 right-8"
            />
          )}
        </div>
        <Button className="bg-gray-300 w-60 items-center flex mt-5 text-base text-zinc-900 font-bold hover:bg-gray-400">
          Login
        </Button>
        <p className="text-gray-300 font-medium mt-3 ">
          Don't have an account ?{" "}
          <Link to={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
