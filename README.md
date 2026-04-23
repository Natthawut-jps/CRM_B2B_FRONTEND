# CRM B2B Frontend

ระบบ CRM (Customer Relationship Management) สำหรับธุรกิจ B2B ที่พัฒนาด้วย Next.js, React, TypeScript และ Tailwind CSS

## เทคโนโลยีที่ใช้

- **Next.js 16** - Framework สำหรับ React
- **React 19** - Library สำหรับสร้าง UI
- **TypeScript** - ภาษาโปรแกรมที่มีระบบ Type Safety
- **Tailwind CSS v4** - CSS Framework
- **shadcn/ui** - UI Component Library
- **Lucide React** - Icon Library
- **Recharts** - สร้างกราฟและ Chart

## โครงสร้างโปรเจกต์

```
├── app/                    # Next.js App Router
│   ├── (components)/       # Shared components
│   ├── dashboard/          # หน้า Dashboard
│   ├── leads/              # หน้าจัดการ Leads
│   ├── contacts/           # หน้าจัดการ Contacts
│   ├── companies/          # หน้าจัดการ Companies
│   ├── deals/              # หน้าจัดการ Deals
│   ├── activities/         # หน้าจัดการ Activities
│   ├── reports/            # หน้ารายงาน
│   ├── marketing/          # หน้า Marketing
│   └── support/            # หน้า Support
├── components/             # React Components
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility functions
├── repositories/           # Data access layer
├── services/               # Business logic layer
├── types/                  # TypeScript type definitions
└── config/                 # Configuration files
```

## การติดตั้ง

1. ติดตั้ง dependencies:

```bash
npm install
```

2. ตั้งค่า Environment Variables:

```bash
cp .env.example .env.development
```

แก้ไขไฟล์ `.env.development` ให้ตรงกับ environment ของคุณ

## การรันโปรเจกต์

### Development Mode

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser

### Production Build

```bash
npm run build
npm start
```

## Features หลัก

- **Dashboard** - ภาพรวมข้อมูลและสถิติการขาย
- **Leads Management** - จัดการ Lead หรือผู้สนใจสินค้า/บริการ
- **Contacts** - จัดการข้อมูลผู้ติดต่อ
- **Companies** - จัดการข้อมูลบริษัทลูกค้า
- **Deals Pipeline** - จัดการ Pipeline การขาย
- **Activities** - ติดตามกิจกรรมและการติดต่อ
- **Reports** - รายงานและการวิเคราะห์
- **Marketing** - เครื่องมือทางการตลาด
- **Support** - ระบบช่วยเหลือลูกค้า

## Scripts

- `npm run dev` - รัน development server
- `npm run build` - สร้าง production build
- `npm run start` - รัน production server
- `npm run lint` - รัน ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
