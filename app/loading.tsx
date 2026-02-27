import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  // Or a custom loading skeleton component
  return <p className="flex w-full justify-center items-center gap-2">Loading <Spinner className="size-8" /></p>
}