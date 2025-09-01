type FetcherOptions = RequestInit & { token?: string };

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher<T>(endpoint: string, options: FetcherOptions = {}): Promise<T> {
  const { token, ...restOptions } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(restOptions.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Something went wrong");
  }

  return res.json();
}
