import { LRUCache } from "lru-cache"

export const clientCache = new LRUCache<string, unknown[]>({
  max: 20,
  ttl: 1000 * 60 * 2,
})