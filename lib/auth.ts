import { cookies } from "next/headers";

export async function getToken(): Promise<string> {
    const token = (await cookies()).get("_ssid")?.value;
    if (!token) {
        throw new Error("Unauthorized");
    }
    return token;
}
