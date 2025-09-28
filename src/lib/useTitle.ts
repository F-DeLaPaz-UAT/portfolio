// src/lib/useTitle.ts
import { useEffect } from "react";
const SUFFIX = "Mad Tinker’s Workshop";
export function useTitle(title: string) {
  useEffect(() => { document.title = `${title} — ${SUFFIX}`; }, [title]);
}
