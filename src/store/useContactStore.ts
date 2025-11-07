"use client";
import { create } from "zustand";
import { sendContact, ContactData } from "@/actions/sendContact";

interface ContactStore {
  loading: boolean;
  success: boolean | null;
  error: string | null;
  submitContact: (data: ContactData) => Promise<void>;
}

export const useContactStore = create<ContactStore>((set) => ({
  loading: false,
  success: null,
  error: null,
  submitContact: async (data) => {
    set({ loading: true, success: null, error: null });
    try {
      await sendContact(data);
      set({ loading: false, success: true });
    } catch (err: any) {
      set({
        loading: false,
        success: false,
        error: err.message || "Unknown error",
      });
    }
  },
}));
