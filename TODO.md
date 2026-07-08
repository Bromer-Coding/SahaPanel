# Bekleyen İşler / Bilinen Durumlar

## Açık

- **(2026-07-08) Supabase performans uyarıları (schema genelinde, bağımsız, dokunulmadı):** `get_advisors` birçok tabloda RLS politikalarının `auth.<fn>()` çağrısını her satırda yeniden değerlendirdiğini (`auth_rls_initplan`) ve bazı tablolarda (`departments`, `profiles`, `shift_boards`, `shifts`) aynı işlem için birden fazla permissive policy olduğunu (`multiple_permissive_policies`) bildiriyor. Performans etkisi düşük ölçekte önemsiz; veri/kullanıcı sayısı büyürse ele alınmalı. Detay: `supabase/schema.sql` RLS bölümü.
- **(2026-07-08) `profiles_is_online_idx` henüz kullanılmadı:** Yeni eklenen bir indeks olduğu için normal; trafik arttıkça Supabase advisor'da "unused index" uyarısı kendiliğinden düşmeli.

## Çözüldü

- ~~Supabase'de "postgres_exporter" bağlantısı aborted-transaction durumunda takılıydı, her 60 saniyede bir `current transaction is aborted` hatası logluyordu~~ — 2026-07-08 14:50'de Supabase Dashboard → Project Settings → General → "Restart project" ile proje restart edildi (kullanıcının onayıyla, Claude in Chrome üzerinden). Restart sonrası doğrulandı: `pg_stat_activity`'de aborted/idle-in-transaction bağlantı kalmadı, postgres loglarında restart sonrası (14:51'den itibaren, 4+ dakika ve birden fazla 60s döngüsü boyunca) hiç tekrar etmedi, Vercel runtime hatalarında da hiçbir şey yok. Sorun tamamen giderildi.
- ~~Branch main'e merge edilmedi~~ — `claude/shifts-cleanup-online-staff-bggahc`, PR #4 olarak 2026-07-08 17:44'te SupremeRia tarafından main'e merge edildi (commit `f1c4e02`); Vercel bu merge'ü otomatik yakalayıp production'a deploy etti (`dpl_Fr5eeABr...`, READY).
- ~~Supabase ortam değişkenleri Vercel'de eksikti (`NEXT_PUBLIC_SUPABASE_URL`/`ANON_KEY`), `/dashboard` sayfasında 42 hata / 6 kullanıcı etkilenmişti~~ — 2026-07-08 itibarıyla env'ler eklenmiş ve sonraki deploy ile giderilmiş durumda (bkz. [CHANGELOG.md](CHANGELOG.md)).
- ~~`profiles.is_online`/`last_seen_at` migration'ı elle SQL editöründe çalıştırılması gerekiyordu~~ — 2026-07-08'de doğrudan uygulandı.
