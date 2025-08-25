import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk"
export const api = axios.create({
  baseURL: "https://dev.expressfintech.in",
  headers: {
    Authorization: `Bearer ${token}`, // must match Postman exactly
    Accept: "application/json, text/plain",
  },
});

export const fetchTransactions = async (page = 0) => {
  const res = await api.get("/transaction_history/", {
    params: {
      service_id: 111, // number, not string
      page, // page=0
    },
  });
  return res.data;
};