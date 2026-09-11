export const API_BASE = `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/v1`;

export async function fetchCsrfToken(): Promise<string> {
  const res = await fetch(`${API_BASE}/auth/csrf/`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" }
  });
  if (!res.ok) throw new Error("Failed to fetch CSRF token");
  const data = await res.json();
  return data.csrfToken;
}

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const isUnsafe = ["POST", "PUT", "PATCH", "DELETE"].includes(options.method?.toUpperCase() || "GET");
  
  const headers = new Headers(options.headers || {});
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
    let errorData;
    try {
      errorData = await res.json();
    } catch {
      throw new Error(res.statusText);
    }
    throw new Error(errorData.detail || errorData.error || res.statusText);
  }

  // Handle 204 No Content
  if (res.status === 204) return null;

  return res.json();
}
