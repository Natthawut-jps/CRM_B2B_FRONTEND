import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import Link from "next/link";

export function Error404() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                    <AlertCircle className="h-12 w-12 text-muted-foreground" />
                </div>
                <h1 className="mb-2 text-6xl font-bold tracking-tight text-foreground">
                    404
                </h1>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                    Page Not Found
                </h2>
                <p className="mb-8 max-w-md text-muted-foreground">
                    The page you are looking for does not exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>
                <Link href="/">
                    <Button size="lg" className="gap-2">
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}