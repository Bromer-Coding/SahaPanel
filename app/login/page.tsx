import { createClient } from "@/lib/supabase/server";
import { AuthTabs } from "@/components/auth-tabs";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = { title: "Giriş yap" };

export default async function LoginPage({ searchParams }: { searchParams?: Promise<{ mode?: string }> }) {
  const params = await searchParams;
  const mode = params?.mode === "register" ? "register" : "login";

  // Kayit formundaki departman listesi (anonim okumaya acik).
  const supabase = await createClient();
  const { data: departments } = await supabase
    .from("departments")
    .select("id, name")
    .order("name", { ascending: true });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-canvas px-5 py-12">
      {/* Koyu zemine kurumsal derinlik veren yumusak isik katmanlari */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 50% -10%, rgba(154,47,44,0.22), transparent 60%), radial-gradient(700px 480px at 50% 120%, rgba(212,175,55,0.06), transparent 60%)"
        }}
        aria-hidden
      />

      <ThemeToggle className="absolute right-4 top-4 z-10" />

      <div className="relative z-10 w-full max-w-md">
        {/* Panel kimligi — sik, okunabilir, kurumsal */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-glow ring-1 ring-gold-400/40">
            AP
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Aytemiz Petrol Yakutiye Şubesi
          </h1>
          <p className="mt-1.5 text-sm text-muted">Saha ekipleri için düzenli iş takibi</p>
          <div className="gold-hairline mt-5 w-24" aria-hidden />
        </div>

        <AuthTabs departments={departments ?? []} mode={mode} />

        <p className="mt-6 text-center text-xs text-muted-2">
          Kayıt olduktan sonra yetkili onayı ile girişiniz aktifleşir.
        </p>
      </div>
    </main>
  );
}
