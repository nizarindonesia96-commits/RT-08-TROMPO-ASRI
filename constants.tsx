
import { Announcement, FinancialRecord, ServiceRequest, UserRole } from './types';

export const APP_NAME = "RT 08 Trompo Asri";
export const SLOGAN = "Pelayanan Cepat, Transparan, dan Bersama";

export const MOCK_STATS = {
  totalKK: 120,
  totalWarga: 450,
  totalLaki: 215,
  totalPerempuan: 235,
  rtWilayah: "Blok A - Blok C"
};

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'Kerja Bakti Massal Persiapan HUT RI',
    date: '10 Agustus 2024',
    summary: 'Gotong royong membersihkan lingkungan dan pemasangan bendera.',
    content: 'Diharapkan seluruh warga RT 08 berkumpul di lapangan jam 07:00 WIB.',
    category: 'Sosial',
    image: 'https://picsum.photos/seed/cleanup/800/400'
  },
  {
    id: '2',
    title: 'Posyandu Balita & Lansia',
    date: '15 Agustus 2024',
    summary: 'Pemeriksaan kesehatan rutin di Balai RT.',
    content: 'Membawa buku KIA untuk balita.',
    category: 'Kesehatan',
    image: 'https://picsum.photos/seed/health/800/400'
  },
  {
    id: '3',
    title: 'Rapat Bulanan Warga',
    date: '20 Agustus 2024',
    summary: 'Pembahasan program keamanan lingkungan (Siskamling).',
    content: 'Lokasi di rumah Ketua RT.',
    category: 'Umum'
  }
];

export const MOCK_FINANCE: FinancialRecord[] = [
  { month: 'Jan', income: 4500000, expense: 3200000 },
  { month: 'Feb', income: 4200000, expense: 3800000 },
  { month: 'Mar', income: 4800000, expense: 2500000 },
  { month: 'Apr', income: 4100000, expense: 4000000 },
  { month: 'May', income: 5200000, expense: 3100000 },
  { month: 'Jun', income: 4900000, expense: 2800000 },
];

export const MOCK_REQUESTS: ServiceRequest[] = [
  { id: '1', type: 'Surat Pengantar KTP', status: 'Selesai', date: '2024-05-10', wargaName: 'Ahmad Subarjo' },
  { id: '2', type: 'Surat Keterangan Domisili', status: 'Diproses', date: '2024-05-12', wargaName: 'Siti Aminah' },
  { id: '3', type: 'Laporan Fasilitas Rusak', status: 'Ditolak', date: '2024-05-08', wargaName: 'Budi Santoso' },
];
