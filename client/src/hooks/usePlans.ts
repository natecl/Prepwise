import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export function usePlans() {
  return useQuery({
    queryKey: ["plans"],
    queryFn: () => api.get("/plans"),
  });
}

export function useGeneratePlan() {
  return useMutation({
    mutationFn: (constraints: unknown) => api.post("/plans/generate", constraints),
  });
}
