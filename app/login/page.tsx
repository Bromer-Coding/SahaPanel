import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-field lg:grid-cols-[1fr_0.9fr]">
      <section className="flex items-center px-6 py-10 md:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded bg-brand-600 font-bold text-white">SP</div>
            <div>
              <p className="text-xl font-bold text-ink">SahaPanel</p>
              <p className="text-sm text-slate-500">Saha ekipleri icin duzenli is takibi</p>
            </div>
          </div>
          <LoginForm />
        </div>
      </section>
      <section className="hidden bg-ink px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">Operasyon paneli</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight">
            Duyuru, gorev, ariza ve vardiya akisi tek yerde.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            WhatsApp mesaj kalabaligi yerine okunma takibi, rol bazli yetki ve vardiya odakli is akisi.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm">
          {["Petrol istasyonu", "Market ekipleri", "Vardiyali saha"].map((item) => (
            <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
