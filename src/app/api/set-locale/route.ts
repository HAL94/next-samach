import { setLocaleCookie } from "@/app/actions/set-locale-cookie";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const locale = body?.locale;
        if (!locale) {
            return NextResponse.next();
        }
        return setLocaleCookie(locale);
    } catch (error) {
        console.error(error);
        return null;
    }
}