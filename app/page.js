"use client"
import AddMedicineModal from "@/components/AddMedicineModal";
import LandingSignIn from "@/components/LandingSignIn";
import { Toaster } from 'react-hot-toast';


export default function Home() {

 
  return (
      <main>
        <LandingSignIn/>
        <Toaster />

      </main>
  );
}
