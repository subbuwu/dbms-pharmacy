"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import axios from "axios"
import { useAuthStore } from "@/app/store/authStore";


export function SignupFormDemo() {
  const ifUser = localStorage.getItem("user");
  const router = useRouter();

  useEffect(() => {
    if (ifUser) {
      // Redirect user to dashboard if already logged in
      router.push("/dashboard");
    }
  }, [ifUser, router]);

  const currentUser = useAuthStore((state)=> state.currentUser)
  const updateCurrentUser = useAuthStore((state) => state.updateCurrentUser)


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [med,setMed] = useState()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      // Fetch users data from the server
      const response = await axios.get("/api/users");
      const users = response.data;

      if(!formData.email || !formData.password){
        toast.error('Missing credentials.', {
          style: {
            border: '1px solid #713200',
            padding: '16px 44px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
        return;
      }

      // Check if entered email exists in the fetched users data
      const matchedUser = users.find(
        (user) =>
         (user.username === formData.email || user.user_email === formData.email) &&
          user.login.user_pw === formData.password
      );

      if (matchedUser) {
        // If credentials match, navigate to the dashboard
        updateCurrentUser(matchedUser.username)
        localStorage.setItem("user",matchedUser.username)
        navigateToDashboard()
      } else {
        // If credentials don't match, display an error message
        console.error("Invalid credentials");
        toast.error('Invalid credentials.', {
          style: {
            border: '1px solid #713200',
            padding: '16px 44px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Function to handle input change and update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigateToDashboard = () => {
    router.push("/dashboard");
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-center text-3xl text-neutral-200">
        Access Your Account
      </h2>


      <form className="my-8" onSubmit={handleSubmit}>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Username or Email</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="projectmayhem@fc.com"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>


        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log In &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
