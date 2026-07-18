"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, ShieldAlert } from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { Input, Label, Checkbox } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter your registered email and password to continue.");
      return;
    }

    setLoading(true);
    // Demo-mode auth: mock latency, then route to citizen dashboard.
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1400);
  }

  return (
    <AuthShell panelLabel="Identity Verification">
      <h1 className="font-display text-2xl font-semibold text-white">
        Welcome back
      </h1>
      <p className="mt-1.5 text-sm text-white/50">
        Sign in to access your Digital Safety Dashboard
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 rounded-xl border border-threat-critical/30 bg-threat-critical/10 px-3.5 py-2.5 text-xs text-threat-critical"
            >
              <ShieldAlert className="h-4 w-4 shrink-0" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <Input
              id="email"
              type="email"
              placeholder="you@domain.gov.in"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="#"
              className="text-xs font-medium text-signal-soft hover:text-signal transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="pl-10 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2.5 text-sm text-white/60 cursor-pointer select-none">
          <Checkbox defaultChecked />
          Remember me on this device
        </label>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Verifying identity...
            </>
          ) : (
            <>
              Login to Dashboard <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        <div className="relative flex items-center py-1">
          <div className="h-px flex-1 bg-void-border" />
          <span className="px-3 text-[11px] uppercase tracking-widest text-white/30 font-mono">
            or continue with
          </span>
          <div className="h-px flex-1 bg-void-border" />
        </div>

        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => {
            setLoading(true);
            setTimeout(() => (window.location.href = "/dashboard"), 1200);
          }}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24Z"
            />
            <path
              fill="#FBBC05"
              d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.96 11.96 0 0 0 0 12c0 1.93.46 3.76 1.29 5.38l3.98-3.09Z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
            />
          </svg>
          Sign in with Google
        </Button>
      </form>

      <p className="mt-7 text-center text-sm text-white/40">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-signal-soft hover:text-signal transition-colors">
          Create one now
        </Link>
      </p>
    </AuthShell>
  );
}
