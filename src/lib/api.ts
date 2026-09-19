export const API_BASE = `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/v1`;
const NGROK_SKIP_BROWSER_WARNING_HEADER = "ngrok-skip-browser-warning";

function getApiErrorMessage(errorData: unknown, fallback: string): string {
  if (!errorData || typeof errorData !== "object") return fallback;

  const errors = errorData as Record<string, unknown>;
  for (const key of ["detail", "error", "non_field_errors"]) {
    const value = errors[key];
    if (typeof value === "string") return value;
    if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  }

  for (const [field, value] of Object.entries(errors)) {
    if (typeof value === "string") return `${field}: ${value}`;
    if (Array.isArray(value) && typeof value[0] === "string") {
      return `${field}: ${value.join(" ")}`;
    }
  }

  return fallback;
}

export async function fetchCsrfToken(): Promise<string> {
  const res = await fetch(`${API_BASE}/auth/csrf/`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      [NGROK_SKIP_BROWSER_WARNING_HEADER]: "true",
    }
  });
  if (!res.ok) throw new Error("Failed to fetch CSRF token");
  const data = await res.json();
  return data.csrfToken;
}

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const isUnsafe = ["POST", "PUT", "PATCH", "DELETE"].includes(options.method?.toUpperCase() || "GET");
  
  const headers = new Headers(options.headers || {});
  headers.set(NGROK_SKIP_BROWSER_WARNING_HEADER, "true");
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (isUnsafe) {
    const csrf = await fetchCsrfToken();
    headers.set("X-CSRFToken", csrf);
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (!res.ok) {
    let errorData: unknown;
    try {
      errorData = await res.json();
    } catch {
      throw new Error(res.statusText);
    }
    throw new Error(getApiErrorMessage(errorData, res.statusText));
  }

  // Handle 204 No Content
  if (res.status === 204) return null;

  return res.json();
}
