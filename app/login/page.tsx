"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("LOGIN RESULT:", data, error);

  if (error) {
    alert(error.message);
    return;
  }

  if (data.session) {
    router.replace("/Admin");
  }
};

  return (
    <div className="flex items-center justify-center h-screen">
       {/* 🌄 Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center scale-100"
      style={{
        backgroundImage: "url('/bgWoodP.jpg')",
      }}
    />

    {/* 🌫 Dark Gradient Overlay (more elegant than flat black) */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>

    {/* ✨ Soft floating glow effect */}
    <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
    <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"></div>

    {/* 🧾 Login Card */}
    <div className="relative z-10 w-[360px]">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 text-white">


        <h1 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h1>
        <div className="text-black">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
      </div>
    </div>
  );
}