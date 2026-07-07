# SahaPanel

SahaPanel, WhatsApp grup karmasasi yerine duyuru, gorev, ariza, vardiya ve personel takibini tek panelde toplamak icin hazirlanmis responsive bir web yonetim panelidir.

## Teknolojiler

- Next.js App Router
- Supabase Auth, Database, Storage
- Tailwind CSS
- TypeScript
- Lucide React ikonlari

## Roller

- Admin: Tum modulleri yonetir, personel ve vardiya kaydi acabilir.
- Takim Lideri: Duyuru, gorev ve ariza akislarini yonetir.
- Personel: Duyuru okur, kendi gorev/vardiya bilgilerini gorur, ariza bildirimi acar.

## Kurulum

1. Bagimliliklari yukleyin.

```bash
npm install
```

2. `.env.example` dosyasini `.env.local` olarak kopyalayin ve Supabase bilgilerini girin.

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

3. Supabase SQL editorunde `supabase/schema.sql` dosyasini calistirin.

4. Gelistirme sunucusunu baslatin.

```bash
npm run dev
```

## Supabase notlari

- `profiles.id`, Supabase Auth kullanici ID degeri ile ayni olmalidir.
- `fault-photos` adinda public bir Storage bucket olusturun.
- Yeni kullanici Auth tarafinda olustuktan sonra profil kaydini Yetkili Paneli uzerinden ekleyebilirsiniz.

## Ekip icin calisma notlari

- UI degisiklikleri `components` ve `app/(dashboard)` altinda tutulur.
- Supabase sorgulari sayfalarda okunur, yazma islemleri `app/actions.ts` icindedir.
- Yeni tablo veya politika eklenirse `supabase/schema.sql` guncellenmelidir.
- Gorev paylasimi icin onerilen ayrim:
  - Kisi 1: Supabase schema, RLS, Auth ve veri akislari.
  - Kisi 2: Sayfa tasarimlari, responsive kontroller ve form deneyimi.

## Ana sayfalar

- `/login`
- `/dashboard`
- `/announcements`
- `/tasks`
- `/faults`
- `/shifts`
- `/personnel`
- `/admin`
- `/profile`
