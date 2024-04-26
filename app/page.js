import LandingSignIn from "@/components/LandingSignIn";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main>
      <LandingSignIn/>
      <Toaster />
    </main>
  );
}
