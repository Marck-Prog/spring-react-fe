import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center  items-center mt-5">
      <div className="max-w-md h-[85vg] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          src={
            isLogin
              ? "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?t=st=1739421597~exp=1739425197~hmac=a236adcad8ffee2b5d782ece3f25fc6ba8e12e389eddf0dff6f3b3d66eaf5fb7&w=740"
              : "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?t=st=1739421503~exp=1739425103~hmac=00e54f274c68dd33e592151db86ae3ee514dc2a903b24205266bd66944734f13&w=740"
          }
          alt=""
        />
        <div className="px-10 flex-grow">
          {isLogin ? <LoginForm /> : <RegisterForm />}

          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't "} Have an Account ?</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
