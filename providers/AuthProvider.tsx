import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AuthProviders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const socialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { redirect: false });
      toast.success("Login Successfull");
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login.");
    }
    setIsLoading(false);
  };

  return <div>Providers</div>;
};
export default AuthProviders;
