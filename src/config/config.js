export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://leaf-backend-mu.vercel.app/api";
