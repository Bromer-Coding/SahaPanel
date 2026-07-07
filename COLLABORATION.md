# SahaPanel Isbirligi Rehberi

Bu dosya, projede birlikte calisacak kisilerin ayni duzeni takip etmesi icin hazirlandi.

## Proje hedefi

SahaPanel; petrol istasyonu, market, saha ekibi ve vardiyali calisan ekiplerde WhatsApp gruplarinin yerine daha takip edilebilir bir is akisi kurar.

## Is bolumu onerisi

| Alan | Sorumluluk |
| --- | --- |
| Supabase | Tablolar, RLS politikalari, Storage bucket, Auth kullanicilari |
| Frontend | Dashboard sayfalari, responsive menu, form ve liste ekranlari |
| Operasyon | Duyuru okundu takibi, gorev durumlari, ariza sureci, vardiya gorunumu |
| Test | Rol bazli ekran kontrolu, mobil gorunum, CRUD senaryolari |

## Kod duzeni

- `app/(dashboard)`: Panel sayfalari
- `app/actions.ts`: Veri yazma ve guncelleme islemleri
- `components`: Ortak arayuz bilesenleri
- `lib`: Supabase istemcileri, rol yardimcilari ve format fonksiyonlari
- `supabase/schema.sql`: Veritabani semasi ve RLS politikalari

## Gelistirme akisi

1. Yeni ise baslamadan once ilgili sayfayi ve `app/actions.ts` dosyasini kontrol edin.
2. Veritabani degisikligi varsa once `supabase/schema.sql` guncelleyin.
3. UI degisikligi yaparken mobil gorunumu da kontrol edin.
4. Rol bazli davranislari en az Admin, Takim Lideri ve Personel ile test edin.
5. Pull request veya commit aciklamasinda hangi modullerin etkilendigini yazin.

## Kontrol listesi

- [ ] Login Supabase Auth ile calisiyor.
- [ ] Admin tum ekranlara erisebiliyor.
- [ ] Takim Lideri duyuru, gorev ve ariza yonetebiliyor.
- [ ] Personel duyuru okuyup ariza bildirimi acabiliyor.
- [ ] Duyuru okundu bilgisi kaydediliyor.
- [ ] Gorev durumlari guncelleniyor.
- [ ] Ariza fotograf yukleme alani test edildi.
- [ ] Vardiya listesi mobilde okunabilir.
