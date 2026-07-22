# Metafirst Website

Website Metafirst — Software Development Studio. Dibangun dengan React + Vite.

## Cara menjalankan

1. Pastikan Node.js (versi 18 ke atas) sudah terinstall.
2. Install dependency:
   ```bash
   npm install
   ```
3. Jalankan dev server:
   ```bash
   npm run dev
   ```
4. Buka browser ke alamat yang muncul di terminal (biasanya `http://localhost:5173`).
   Vite akan otomatis membuka tab browser baru.

## Struktur project

- `src/App.jsx` — seluruh halaman website (Home, About, Product, Service, Client Logos, Contact)
- `src/main.jsx` — entry point React
- `public/favicon.png` — favicon Metafirst
- `index.html` — HTML shell

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke hosting statis mana pun (Vercel, Netlify, dll).
