"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };

  console.log("Hello Next js Page");
  return (
    <div>
      <h1 className="text-6xl font-semibold">Hello Next js Page</h1>
      <button className="border rounded-3xl p-3" onClick={handleNavigation}>Dashboard</button>
    </div>
  );
};

export default HomePage;
