import { useRouter } from "next/router";

export function goto(to: string) : void {
    const router = useRouter();
    router.push("/" + to);
}