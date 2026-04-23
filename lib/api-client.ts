interface RequestOption extends RequestInit {
    token?: string;
}

async function request<T>(path: string, options: RequestOption = {}): Promise<T> {
    const { token, ...rest } = options;

    const res = await fetch(`${process.env.API_URL}${path}`, {
        ...rest,
        headers: {
            ...rest.headers,
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
    });

    if (!res.ok) {
        throw new Error(`API request failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export const apiClient = {
    get: <T>(path: string, options?: RequestOption) => request<T>(path, { method: 'GET', ...options }),
    post: <T>(path: string, body: unknown, options?: RequestOption) => request<T>(path, { method: 'POST', body: JSON.stringify(body), ...options }),
    put: <T>(path: string, body: unknown, options?: RequestOption) => request<T>(path, { method: 'PUT', body: JSON.stringify(body), ...options }),
    delete: <T>(path: string, options?: RequestOption) => request<T>(path, { method: 'DELETE', ...options }),
};

