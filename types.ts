
export enum UserRole {
  WARGA = 'WARGA',
  KETUA = 'KETUA',
  SEKRETARIS = 'SEKRETARIS',
  BENDAHARA = 'BENDAHARA'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  address: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  category: 'Kesehatan' | 'Keamanan' | 'Sosial' | 'Umum';
}

export interface ServiceRequest {
  id: string;
  type: string;
  status: 'Diproses' | 'Selesai' | 'Ditolak';
  date: string;
  wargaName: string;
}

export interface FinancialRecord {
  month: string;
  income: number;
  expense: number;
}
