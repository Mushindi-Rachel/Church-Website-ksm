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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">

        <h1 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h1>

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

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}