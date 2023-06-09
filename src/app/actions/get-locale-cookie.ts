import { cookies } from "next/headers";

export async function getLocaleCookie() {
    try {
        const locale = cookies().get('_culture')?.value;
        console.log('got locale', locale);
        return locale;
    } catch (error) {
        console.error(error)
        return null;
    }
}