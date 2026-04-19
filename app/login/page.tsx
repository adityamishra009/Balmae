"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 py-10">

      {/* LOGO */}
      <Image
        src="/Newlogo.jpeg"
        alt="Balmae Logo"
        width={120}
        height={40}
        className="object-contain"
      />

      {/* DIVIDER */}
      <div className="w-full max-w-sm h-px bg-gray-100" />

      {/* EMAIL */}
      <div className="w-full max-w-sm flex flex-col gap-1.5">
        <label className="text-sm font-medium text-secondary">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full h-11 px-4 rounded-xl border border-gray-500 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* PASSWORD */}
      <div className="w-full max-w-sm flex flex-col gap-1.5">
        <label className="text-sm font-medium text-secondary">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full h-11 px-4 pr-11 rounded-xl border border-gray-500 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary transition-all"
          >
            {showPassword
              ? <EyeSlashIcon className="w-5 h-5 cursor-pointer" />
              : <EyeIcon className="w-5 h-5 cursor-pointer" />
            }
          </button>
        </div>
      </div>

      {/* FORGOT PASSWORD */}
      <div className="w-full max-w-sm flex justify-end -mt-4">
        <Link href="/forgot-password" className="text-xs text-black hover:text-primary transition-all">
          Forgot password?
        </Link>
      </div>

      {/* LOGIN BUTTON */}
      <div className="w-full max-w-sm">
        <button
          type="submit"
          className="w-full h-11 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg cursor-pointer">
          Login
        </button>
      </div>

      {/* OR DIVIDER */}
      <div className="w-full max-w-sm flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-muted">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* GOOGLE LOGIN */}
      <div className="w-full max-w-sm cursor-pointer">
        <button className="w-full h-11 flex items-center justify-center gap-3 border border-gray-200 rounded-xl text-sm font-medium text-secondary hover:bg-gray-50 transition-all duration-200">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      {/* REGISTER LINK */}
      <p className="text-xs text-black text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary font-semibold hover:underline cursor-pointer">
          Register
        </Link>
      </p>

    </div>
  );
}