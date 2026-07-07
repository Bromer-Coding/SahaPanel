"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { createClient } from "@/lib/supabase/browser";
import { buttonClass, inputClass } from "@/components/ui";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (signInError) {
      setError("E-posta veya sifre hatali.");
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-white p-5 shadow-panel">
      <h2 className="text-2xl font-semibold text-ink">Giris yap</h2>
      <p className="mt-1 text-sm text-slate-500">Ekip hesabinizla devam edin.</p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          E-posta
          <input
            className={inputClass}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Sifre
          <input
            className={inputClass}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
      </div>
      {error ? <p className="mt-4 rounded-md bg-signal-red/10 px-3 py-2 text-sm text-signal-red">{error}</p> : null}
      <button className={`${buttonClass} mt-6 w-full`} disabled={loading}>
        <LogIn className="h-4 w-4" aria-hidden />
        {loading ? "Giris yapiliyor" : "Giris yap"}
      </button>
    </form>
  );
}
