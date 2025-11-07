"use server";
import { backendless } from "@/lib/axios";

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContact(data: ContactData) {
  const TABLE = process.env.NEXT_PUBLIC_BACKENDLESS_TABLE || "Contact";

  try {
    const res = await backendless.post(`data/${TABLE}`, data);
    return res.data;
  } catch (err: any) {
    console.error("Backendless Error:", err.response?.data || err.message);
    throw new Error("Gagal mengirim pesan ke server.");
  }
}
