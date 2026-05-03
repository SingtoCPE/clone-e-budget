# e-budget-web

Frontend สำหรับระบบ e-budget พัฒนาด้วย Vue 3 + Vite + Vuetify

## เทคโนโลยีหลัก

- Vue 3
- Vite
- Vuetify 3
- Pinia
- Vue Router
- Tailwind CSS

## ความต้องการระบบ

- [Bun](https://bun.sh/) เวอร์ชันล่าสุด
- Node.js (แนะนำ LTS สำหรับเครื่องมือบางตัวใน ecosystem)

## การติดตั้ง

```sh
bun install
```

## การตั้งค่า Environment

สร้างไฟล์ `.env` จาก `.env.example` แล้วกำหนดค่าตามสภาพแวดล้อมของคุณ

```sh
cp .env.example .env
```

ตัวแปรที่ใช้งาน:

- `VITE_MAPBOX_ACCESS_TOKEN`

## คำสั่งที่ใช้บ่อย

รันโหมดพัฒนา:

```sh
bun run dev
```

รัน build production:

```sh
bun run build
```

รัน preview (พอร์ต 5050):

```sh
bun run preview
```

รัน lint:

```sh
bun run lint
```

## โครงสร้างโปรเจกต์โดยย่อ

```txt
src/
  plugins/      # plugin setup (router, pinia, i18n, vuetify, casl)
  pages/        # หน้าแต่ละ route
  layouts/      # layout หลักของระบบ
  @core/        # utility และระบบแกนกลางของ template
```

## หมายเหตุ

- มี `postinstall` script สำหรับสร้าง icon assets และตั้งค่า MSW worker อัตโนมัติ
- หาก clone โปรเจกต์ใหม่แล้ว แค่ `bun install` ครั้งแรกก็เพียงพอ
