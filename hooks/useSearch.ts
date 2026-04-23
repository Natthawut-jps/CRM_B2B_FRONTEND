"use client"

import { useRef, useEffect, useState } from "react"
import { clientCache } from "@/lib/cache"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useSearch<T>(path: string, query: string, status?: string, source?: string) {
  const [results, setResults] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | undefined>(undefined)

  useEffect(() => {
    const q = query.toLowerCase().trim()

    if (q.length < 2 || status === "") {
      setResults([])
      return
    }

    // 1. check cache first, no need to wait for debounce
    const cacheKey = JSON.stringify({ q, status, source })
    if (clientCache.has(cacheKey)) {
      setResults(clientCache.get(cacheKey) as T[])
      return
    }

    // 2. debounce 300ms
    const timer = setTimeout(async () => {

      // 3. abort request
      abortRef.current?.abort()
      abortRef.current = new AbortController()

      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `${API_URL}${path}`,
          { signal: abortRef.current.signal }
        )

        if (!res.ok) throw new Error("Search failed")

        const data: T[] = await res.json()

        // cache
        clientCache.set(cacheKey, data)
        setResults(data)
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return
        setError("ค้นหาไม่สำเร็จ กรุณาลองใหม่")
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query, status, source])

  return { results, loading, error }
}