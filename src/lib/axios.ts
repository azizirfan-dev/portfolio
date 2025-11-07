import axios from "axios";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID!; 
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY!;

export const backendless = axios.create ({ 
    baseURL: `https://api.backendless.com/${APP_ID}/${API_KEY}`,
    headers: { 
        contentType: "application/json",
    },
});