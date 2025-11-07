import { backendless } from "@/lib/axios";

export interface ContactData { 
    name:string; 
    email:string; 
    subject: string; 
    message:string;
}

export async function sendContact(data: ContactData) {
    const table = process.env.NEXT_PUBLIC_BACKENDLESS_TABLE || "Contact";
    const res = await backendless.post(`/data/${table}`, data);
    return(res.data)
};